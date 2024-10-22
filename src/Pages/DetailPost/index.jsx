import { BiXCircle, BiImageAdd, BiHeart, BiMessageRounded, BiShare, BiSolidHeart } from 'react-icons/bi';
import classNames from 'classnames/bind';
import style from './DetailPost.module.scss';
import { Fragment, useEffect, useState, useRef } from 'react';

const cx = classNames.bind(style);
function DetailPost() {
    //Xử lí nút like bài viết
    const [like, setLike] = useState();
    const [countLike, setCountLike] = useState(0);
    const [showHeart, setShowHeart] = useState(false);
    const handleLike = () => {
        setLike(true);
        if (like) {
            setCountLike(countLike - 1);
        } else {
            setCountLike(countLike + 1);
        }
        setLike(!like);

        setShowHeart(true);
        setTimeout(() => {
            setShowHeart(false);
        }, 1000);
    };

    //Xử lí thêm bình luận
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState([]);

    // Hàm xử lý khi người dùng nhập vào ô input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Hàm xử lý khi người dùng click vào nút "Đăng"

    //số lượng cmt
    const [countComment, setCountComment] = useState(0);

    const handlePostSubmit = () => {
        if (inputValue.trim() !== '') {
            // Thêm nội dung mới vào danh sách bài đăng và xóa nội dung đã nhập sau khi đăng

            const newComment = { id: Date.now(), text: inputValue.trim() };
            setPosts([...posts, newComment]);
            setInputValue('');
            setCountComment((prev) => prev + 1);
        }
    };

    //Xoá bình luận theo id bài viết
    const deleteComment = (id) => {
        const updateComment = posts.filter((posts) => posts.id !== id);
        setPosts(updateComment);
        setBtnUpLoad(false);
        setCountComment((prev) => prev - 1);
    };

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

    //Kết nối phím enter đến với button đăng comment

    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <div className={cx('wr_post')}>
                    <div className={cx('head_post')}>
                        <div className={cx('avatar_post')}>
                            <img
                                className={cx('avatar')}
                                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                            />
                        </div>
                        <div className={cx('user_id_day')}>
                            <p>user_id</p>
                            <span>01/01/2024</span>
                        </div>
                    </div>
                    <div className={cx('content_post')}>
                        <div className={cx('content')}>
                            <p>Nội dung bài viết....</p>
                            <div className={cx('file_post')}>

                            <img
                                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                                alt=""
                                onDoubleClick={handleLike}
                            />
                            </div>
                            {showHeart && <div className={cx('show_heart')} style={like ? {color: '#d63232'} : {color: '#fff'}}><BiSolidHeart /></div>
                        }
                        </div>
                        <div className={cx('interact')}>
                            <button onClick={handleLike} className={cx('like')}>
                                {like ? <BiSolidHeart style={{ color: '#d63232' }} /> : <BiHeart />}{' '}
                            </button>
                            <label>{countLike}</label>
                            <button className={cx('comment')}>
                                <BiMessageRounded />{' '}
                            </button>{' '}
                            <label>{countComment}</label>
                            <button className={cx('share')}>
                                <BiShare />
                            </button>{' '}
                            <label>Share</label>
                        </div>
                    </div>
                </div>
                <div className={cx('tittle_comment')}>Comment</div>
                {posts.map((post, index) => (
                    <div className={cx('wr_comment')}>
                        <div className={cx('comment')}>
                            <div className={cx('wr_avatar')}>
                                <img
                                    src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                                    alt=""
                                />
                            </div>
                            <div className={cx('content')}>
                                <p className={cx('user_id')}>user_id </p>
                                <p className={cx('content_des')}>{post.text}</p>
                            </div>
                            <div className={cx('wr_btn_up_comment')}>
                                <button className={cx('btn_delete')} key={post.id} onClick={handleUpLoad}>
                                    Xoá
                                </button>
                            </div>
                        </div>
                        {btnUpLoad && (
                            <div className={cx('wr_position_up_post')}>
                                <div className={cx('relative_wr')}>
                                    <div ref={containerRef} className={cx('position_wr_add_post')}>
                                        <div className={cx('tittle_delete')}>Xác nhận xoá</div>
                                        <div className={cx('wr_btn_del_comment')}>
                                            <button
                                                key={post.id}
                                                className={cx('btn_delete_comment')}
                                                onClick={() => deleteComment((post.id = index))}
                                            >
                                                Xoá
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className={cx('wr_inp_comment')}>
                    <input
                        maxLength={100}
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Nhập Bình Luận ..."
                    />
                    <button type="submit" onClick={handlePostSubmit}>
                        Đăng
                    </button>
                </div>
            </div>
            {/* Xử lí render info post */}
        </Fragment>
    );
}

export default DetailPost;
