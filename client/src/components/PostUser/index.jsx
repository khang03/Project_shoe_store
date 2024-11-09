import classNames from 'classnames/bind';
import { BiHeart, BiSolidHeart, BiMessageRounded, BiShare } from 'react-icons/bi';
import style from './PostUser.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Menu, MenuItem ,Fade} from '@mui/material';
import ModalPost from '../ModalPost';
import { toast } from 'react-toastify';

const cx = classNames.bind(style);

const PostUser = ( {data, isActiveEdit} ) => {

    const [showModal, setShowModal] = useState(false);
    const [openMenus, setOpenMenus] = useState({});
    const [selectedModal, setSelectedModal] = useState({});
    
    // Xử lí nút like bài viết
    const [like, setLike] = useState(false);
    const [countLike, setCountLike] = useState(0);
    const handleShowLike = () => {
        setLike(true);
        if (like) {
            setCountLike(countLike - 1);
        } else {
            setCountLike(countLike + 1);
        }
        setLike(!like);
    };

    // Xử lí render menu của bài viết
    
    
    const handleClick = (id,event) => {
        setOpenMenus((pre) => ({
            ...pre,
            [id] : event.currentTarget,
        }))
    };
    const handleClose = (id) => {
        setOpenMenus((pre) => ({
            ...pre,
            [id] : null
        }))
    };
    console.log('sd');
    
    // handle Edit Post of user
    const handleEditPost = (id,imgs, content) => {
        setShowModal(true);
        setSelectedModal({id, imgs, content});
        setOpenMenus((pre) => ({
            ...pre,
            [id] : null
        }))
    }
    

    


    const handleLike = async (postId) => {
        try {
            const response = await axios.post('http://localhost:8080/likes', {
                user_id: 1,
                post_id: postId,
            });

            // setPost((prevPost) => ({
            //     ...prevPost,
            //     Likes: prevPost.Likes.length + 1,
            // }));

            setLike(true);
            // setShowHeart(true);
            // setTimeout(() => {
            //     setShowHeart(false);
            // }, 1000);

            console.log('Like added:', response.data);
        } catch (error) {
            console.error('Error adding like:', error);
        }
    };
    // console.log(post);
    

    //Xoá Like
    const handleUnLike = async () => {
        try {
            const response = await axios.delete('http://localhost:8080/likes', {
                data: {
                    user_id: 1,
                    post_id: data.id,
                },
            });

            // setPost((prevPost) => ({
            //     ...prevPost,
            //     Likes: prevPost.Likes.length + 1,
            // }))

            setLike(false);
            // setShowHeart(true);
            // setTimeout(() => {
            //     setShowHeart(false);
            // }, 1000);
            // setPost((prev) => ({
            //     ...prev,    
            //     Comments: prev.Likes.length + 1,
            // }))

            console.log('Like added:', response.data);
        } catch (error) {
            console.error('Error adding like:', error);
        }
    };

    const toggleLike = async () => {
        if (like) {
            await handleUnLike();
        } else {
            await handleLike();
        }
    };
    //Sử dụng navigation để chuyển đến trang chi tiết bài viết
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/DetailPost/${id}`);
    };
    // console.log(data.Images);
    

    return (
        <>
                {data.map((item, index) => (
                    
                    
                    <div className={cx('post')} key={item.id}>
                    <>
                        
                        <div className={cx('wr_startus_post')}>
                            <div className={cx('img_startus')}>
                                <img alt="" src={item.oneUser.avatar} />
                            </div>
                            
                            <div className={cx('wr_des_post')}>
                                <div className={cx('user_id')}>{item.oneUser.username}</div>
                                <div className={cx('des_post')}>
                                    <p>{item.content}</p>
                                </div>
                            </div>

                            {isActiveEdit && (<div className={cx('menu')}>
                            
                                <Button
                                    id="fade-button"
                                    aria-controls={openMenus[item.id] ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenus[item.id] ? 'true' : undefined}
                                    onClick={(e) => handleClick(item.id,e)}
                                    className={cx('btn_menu')}
                                >
                                    <span style={{fontSize: '20px'}}>...</span>
                                </Button>
                                <Menu
                                    className={cx('wr_menu')}
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={openMenus[item.id]}
                                    open={Boolean(openMenus[item.id])}
                                    onClose={() =>handleClose(item.id)}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem className={cx('menu_item')} onClick={() => handleEditPost(item.id ,item.manyImage, item.content)}>
                                        Chỉnh sửa
                                    </MenuItem>
                                    <MenuItem onClick={() => handleDeletePost(item.id)}>Xoá bài viết</MenuItem>
                                </Menu>

                                
                            </div>)}
                            {showModal && (<ModalPost 
                                            isActiveEdit
                                            nameModal='Sửa'
                                            closeModal={() => setShowModal(false)} 
                                            idPost={selectedModal.id}
                                            imgs={selectedModal.imgs}  
                                            txt={selectedModal.content}
                                            />
                            )}
                        </div>
                        <div className={cx('wr_image_post')}>
                                {/* {console.log(item.manyImage)} */}
                                {item.manyImage.map((image, index) => (
                                        <img key={index} alt="" className={cx('image_post')} src={`http://localhost:8080/uploads/${image.img_url}`} />         
                                ))}

                        </div>

                        <div className={cx('interact')}>
                            <button className={cx('like')} onClick={() => handleLike(item.id)}>
                                {like ? <BiSolidHeart style={{ color: 'red' }} /> : <BiHeart />}{' '}
                            </button>{' '}
                            <label>{item.likeCount}</label>
                            <Link to={`DetailPost/${item.id}`}>
                                <button className={cx('comment')}>
                                    <BiMessageRounded />{' '}
                                </button>{' '}
                            </Link>
                            <label>Comment</label>
                            <button className={cx('share')}>
                                <BiShare />
                            </button>{' '}
                            <label>Share</label>
                        </div>
                    </>
    </div>
                ))}
                    
            <hr />
        </>
    );
};

export default PostUser;
