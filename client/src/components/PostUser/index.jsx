import classNames from 'classnames/bind';
import { BiHeart, BiSolidHeart, BiMessageRounded, BiShare } from 'react-icons/bi';
import style from './PostUser.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);

const PostUser = ( {data} ) => {

    
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
    console.log(data);
    

    return (
        <>
                {data.map(item => (
                    <div className={cx('post')} key={item.id}>
                    <>
                        <div className={cx('wr_startus_post')}>
                            <div className={cx('img_startus')}>
                                <img alt="" src={item.User.avatar} />
                            </div>
                            <div className={cx('wr_des_post')}>
                                <div className={cx('user_id')}>{item.User.username}</div>
                                <div className={cx('des_post')}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('wr_image_post')}>
                            {item.Image && item.Image.img_url ? (

                                <img alt="" className={cx('image_post')} src={item.Image.img_url} />
                            ): (
                                <div></div>

                            )}
                        </div>

                        <div className={cx('interact')}>
                            <button className={cx('like')} onClick={() => handleLike(item.id)}>
                                {like ? <BiSolidHeart style={{ color: 'red' }} /> : <BiHeart />}{' '}
                            </button>{' '}
                            <label>{item.Likes.length}</label>
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
