import { Fragment, useEffect, useRef, useState } from 'react';
import * as React from 'react';

import style from './Profile.module.scss';
import classNames from 'classnames/bind';
import { Switch, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostUser from '~/components/PostUser';

const cx = classNames.bind(style);



function Profile() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Tạo biến lấy token
    const token = localStorage.getItem('authToken')

    useEffect(() => {
        const fetchUserData = async () => {   

            if (!token) {
                navigate('/login');  // Nếu không có token, điều hướng về trang login
                return;
            }

            if(token){
                try{
                    const response = await axios.get('http://localhost:8080/',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    setUser(response.data)      
                }catch(err){
                    setError('Không thể lấy thông tin người dùng');
                }
            }else{
                setError('Bạn chưa đăng nhập');
            }
        }
        fetchUserData();    
    }, [navigate])
    // Lấy thông tin post :id
    
    
    
    useEffect(() => {
        
        axios.get(`http://localhost:8080/posts/user/${user.id}`)
            .then(response => setPosts(response.data.posts))
            .catch(error => {
                console.log('Có lỗi ',error);
            })
    }, [user])
    
    
    

    
    //----------------------------------------------Phan xu li render up post---------------------------------------
    const [btnUpLoad, setBtnUpLoad] = useState(false);

    //phan set true false cho man hinh up post
    const handleUpLoad = () => {
        setBtnUpLoad(true);
    };

    const containerRef = useRef(null);

    const unrenderUpPost = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setBtnUpLoad(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', unrenderUpPost);
        return () => {
            document.removeEventListener('mousedown', unrenderUpPost);
        };
    });

    //Render image khi nhập từ input
    const [imageRender, setImageRender] = useState();

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];

        //Lấy link ảnh bằng cách đặt một thuộc tính
        file.preview = URL.createObjectURL(file);
        setImageRender(file);
        console.log(URL.createObjectURL(file));
    };

    //------------------------Render Edit profile------------------------------------------------------------------------

    const [editProfile, setEditProfile] = useState(false);

    //Phan set true false cho btn edit Profile
    const handleEdit = () => {
        setEditProfile(true);
    };

    const containerRefEditProfile = useRef(null);

    const unrenderEditProfile = (e) => {
        if (containerRefEditProfile.current && !containerRefEditProfile.current.contains(e.target)) {
            setEditProfile(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', unrenderEditProfile);
        return () => {
            document.removeEventListener('mousedown', unrenderEditProfile);
        };
    },[]);

    //Btn Trang rieng tu hoac cong khai
    const [loading, setLoading] = React.useState(true);
    function handleClickBtn() {
        setLoading(true);
    }

 
    //Xử lí chuyển đến trang chi tiết bài viết khi click vào bài post
    const navigation = useNavigate();

    const handleClickPage = () => {
        navigation('/DetailPost');
    };

    //Xử lí nút like bài viết
    const [like, setLike] = useState();
    const [countLike, setCountLike] = useState(0);
    const handleLike = async (id) => {
        setLike(true);
        if (like) {
            setCountLike(countLike - 1);
        } else {
            setCountLike(countLike + 1);
        }
        setLike(!like);
    };

    return (
        <Fragment>
            {user && (
                <div className={cx('wrapper')}>
                    <div className={cx('profile')}>
                        <div className={cx('wr_info')}>
                            <div className={cx('info')}>
                                <h2>{user.name}</h2>
                                <p className={cx('user_id')}>{user.username}</p>
                                <p className={cx('bio')}>{user.bio}</p>
                                <p className={cx('sum_fr')}>Có 10 bạn bè</p>                               
                            </div>
                            <div className={cx('wr_img_info')}>
                                <img src={user.avatar} alt="avata user" />
                            </div>
                        </div>
                        <div className={cx('wr_btn_edit_profile')} onClick={handleEdit}>
                            <div className={cx('btn_title_edit')}> Chỉnh sửa trang cá nhân</div>
                        </div>
                    </div>

                    <div className={cx('wr_upl')}>
                        <div className={cx('img_startus')}>
                            <img src={user.avatar} />
                        </div>
                        <div onClick={handleUpLoad} className={cx('des_startus')}>
                            <div className={cx('des')}>Có gì hot?</div>
                        </div>
                        <div className={cx('btn_upl_stt')}>
                            <button onClick={handleUpLoad} className={cx('btn_upload')}>
                                Đăng
                            </button>
                        </div>
                        
                    </div>

                    {posts.map((item) => {
                        return <PostUser setPosts={setPosts} userId={user.id} item={item} isActiveEdit/> 
                    })}                    
                        
                </div>
            )}

            {/* Xử lí render info post */}
            

            {/* Xử lí render edit profile */}
            {editProfile && (
                <div className={cx('wr_position_up_post')}>
                    <div className={cx('relative_wr')}>
                        <div ref={containerRefEditProfile} className={cx('position_wr_add_post')}>
                            <div className={cx('wrapper')}>
                                <div className={cx('wr_edit_item')}>
                                    <div className={cx('my_name')}>
                                        <span>Tên</span>
                                        <p>user_name</p>
                                    </div>
                                    <div className={cx('my_avatar')}>
                                        <img
                                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                                            alt="my avatar"
                                        />
                                    </div>
                                </div>
                                <div className={cx('wr_edit_item')}>
                                    <div className={cx('my_id')}>
                                        <p>Id</p>
                                        <input type="text" placeholder="My_id" />
                                    </div>
                                </div>
                                <div className={cx('wr_edit_item')}>
                                    <div className={cx('my_des')}>
                                        <p>Tiểu sử</p>
                                        <input type="text" placeholder="Nhập tiểu sử..." />
                                    </div>
                                </div>
                                <div className={cx('wr_edit_item')}>
                                    <div className={cx('my_status')}>
                                        <p>Trang cá nhân riêng tư</p>
                                        <FormControlLabel
                                            className={cx('status')}
                                            sx={{ display: 'block' }}
                                            control={
                                                <Switch
                                                    checked={loading}
                                                    onChange={() => setLoading(!loading)}
                                                    name="loading"
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                                <div className={cx('btn_confirm')}>Xong</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Profile;
