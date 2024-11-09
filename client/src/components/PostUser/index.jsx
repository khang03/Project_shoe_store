import classNames from 'classnames/bind';
import { BiHeart, BiSolidHeart, BiMessageRounded, BiShare } from 'react-icons/bi';
import style from './PostUser.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TimeUp from '../TimeUp';

const cx = classNames.bind(style);

const PostUser = ({ setPosts, user, item, index }) => {
    //Tạo usestate lấy dữ liệu bài viết

    // Xử lí nút like bài viết
    const [liked, setLiked] = useState(false);
    const [countLike, setCountLike] = useState(0);
    const [showHeart, setShowHeart] = useState(false);
    const [likecount, setLikeCount] = useState();



    //Xử lí like bài viết

    const handleLike = async (postId) => {
        try {
            const response = await axios.post('http://localhost:8080/likes', {
                user_id: user.id,
                post_id: postId,
            });

            setPosts((prevPosts) => {
                return prevPosts.map((post) => {
                    if (post.id === postId) {
                        return {
                            ...post,
                            Likes: [
                                ...post.Likes,
                                {
                                    id: Math.floor(100 + Math.random() * 900), // Tạo id ngẫu nhiên cho like
                                    user_id: user.id, // Lưu id của người dùng
                                },
                            ],
                        };
                    }
                    return post; // Không thay đổi bài viết khác
                });
            });

            setLiked(true);
            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 1000);

            console.log('Like added:', response.data);
        } catch (error) {
            console.error('Error adding like:', error);
        }
    };

    //Xoá Like
    const handleUnLike = async (postId) => {
        try {
            const response = await axios.delete('http://localhost:8080/likes', {
                data: {
                    user_id: user.id,
                    post_id: postId,
                },
            });

            setPosts((prevPosts) => {
                return prevPosts.map((post) => {
                  if (post.id === postId) {
                    // Xoá like của người dùng hiện tại
                    return {
                      ...post,
                      Likes: post.Likes.filter(like => like.user_id !== user.id), // Loại bỏ like của user
                    };
                  }
                  return post; // Không thay đổi bài viết khác
                });
              });

            setLiked(false);
            // setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 1000);

            console.log('Like added:', response.data);
        } catch (error) {
            console.error('Error adding like:', error);
        }
    };

    const toggleLike = async (postId) => {
        if (liked) {
            await handleUnLike(postId);
        } else {
            await handleLike(postId);
        }
    };
            // Kiểm tra trạng thái like khi component load
            useEffect(() => {
                const checkLikeStatus = async () => {
                    try {
                        const response = await axios.get(`http://localhost:8080/likes/${user.id}/${item.id}`);
                        setLiked(response.data.liked);
                        console.log(response.data.liked);
                    } catch (error) {
                        console.error('Error checking like status', error);
                    }
                };
                checkLikeStatus();
            }, [user, item]);
    //Sử dụng navigation để chuyển đến trang chi tiết bài viết
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/DetailPost/${item.id}`);
    };
    // console.log(data.Images);

    return (
        <>
            <div className={cx('post')} key={item.id}>
                <>
                    <div className={cx('wr_startus_post')}>
                        <div className={cx('img_startus')}>
                            <img alt="" src={item.User.avatar} />
                        </div>
                        <div className={cx('wr_des_post')}>
                            <div className={cx('user_id')}>
                                <p>{item.User.username}</p>{' '}
                                <span>
                                    <TimeUp time={item.createdAt} />
                                </span>
                            </div>
                            <div className={cx('des_post')}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wr_image_post')}>
                        {item.Images.map((image, index) => (
                            <img key={index} alt="" className={cx('image_post')} src={image.img_url} />
                        ))}
                    </div>

                    <div className={cx('interact')}>
                        <button className={cx('like')} onClick={() => toggleLike(item.id)}>
                            {liked ? <BiSolidHeart style={{ color: 'red' }} /> : <BiHeart />}{' '}
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

            <hr />
        </>
    );
};

export default PostUser;
