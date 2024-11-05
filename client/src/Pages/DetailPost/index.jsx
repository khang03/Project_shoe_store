import { BiXCircle, BiImageAdd, BiHeart, BiMessageRounded, BiShare, BiSolidHeart } from 'react-icons/bi';
import classNames from 'classnames/bind';
import style from './DetailPost.module.scss';
import { Fragment, useEffect, useState, useRef } from 'react';
import { Avatar, Button, Menu, MenuItem, Fade, Switch, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);

function DetailPost() {
    //lấy danh sách user
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/users`)

            .then((reponse) => setUsers(reponse.data))
            .catch((error) => console.log('Không lấy đƯợc dữ liệu', error));

        return () => {
            console.log('hihi');
        };
    }, []);

    const [post, setPost] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/posts/${id}`)

            .then((reponse) => setPost(reponse.data))
            .catch((error) => console.log('Không lấy đƯợc dữ liệu', error));

        return () => {
            console.log('hihi');
        };
    }, [id]);

    // console.log(post);

    //Xử lí nút like bài viết
    const [like, setLike] = useState();
    const [countLike, setCountLike] = useState(0);
    const [showHeart, setShowHeart] = useState(false);
    // const handleLike = () => {
    //     if (like) {
    //         setCountLike(countLike - 1);
    //     } else {
    //         setCountLike(countLike + 1);
    //     }

    // };

    const handleLike = async () => {
        try {
            const response = await axios.post('http://localhost:8080/likes', {
                user_id: 1,
                post_id: post.id,
            });

            setPost((prevPost) => {
                return {
                    ...prevPost,
                    // Likes: prevPost.Likes.length + 1,
                    Likes: [
                        ...prevPost.Likes,
                        {
                            id: Math.floor(100 + Math.random() * 900),
                            user_id: 1,
                        },
                    ],
                    // Likes: 3,
                };
            });

            setLike(true);
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
    const handleUnLike = async () => {
        try {
            const response = await axios.delete('http://localhost:8080/likes', {
                data: {
                    user_id: 1,
                    post_id: post.id,
                },
            });

            setPost((prevPost) => {
                const updateLike = prevPost.Likes.filter((like) => like.user_id !== 1);
                return {
                    ...prevPost,
                    Likes: updateLike,
                };
            });

            setLike(false);
            setShowHeart(true);
            setTimeout(() => {
                setShowHeart(false);
            }, 1000);
            setPost((prev) => ({
                ...prev,
                Comments: prev.Likes.length + 1,
            }));

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

    //Xử lí thêm bình luận
    const [content, setContent] = useState('');
    const [dataComment, setDataComment] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/comments')
            .then((response) => setDataComment(response.data))
            .catch((error) => console.log('Không lấy được dữ liệu', error));
    }, []);

    //đăng bình luận
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngừng load lại trang

        try {
            const response = await axios.post('http://localhost:8080/comments/', {
                comment_content: content,
                user_id: 1,
                post_id: post.id,
            });
            console.log('Comment added:', response.data);
            setContent('');

            setPost((prevPost) => {
                return {
                    ...prevPost,
                    Comments: [
                        ...prevPost.Comments,
                        {
                            
                            user_id: 1,
                            content_comment: content,
                            post_id: post.id,
                        },
                    ],
                };
            });

            
            // setDataComment((prevComments) =>
            //     prevComments.map((comment) =>
            //         comment.id === commentId ? { ...comment, comment_content: newContent } : comment,
            //     ),
            // );
        } catch (error) {
            console.error('Error adding comment:', error.response.data.error);
        }
    };

    // Hàm xử lý khi người dùng click vào nút "Đăng"

    //số lượng cmt
    // const [countComment, setCountComment] = useState(0);
    // const [dataComment, setDataComment] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080/comments')
    //         .then((reponse) => setDataComment(reponse.data))
    //         .catch((error) => console.log('Không lấy đƯợc dữ liệu', error));
    // }, []);

    // Xoá bình luận theo id bài viết
    const [error, setError] = useState(null);

    const handleDeleteComment = async (commentId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/comments/${commentId}`);
            console.log(response.data.message); // Thông báo thành công

            // Cập nhật danh sách bình luận sau khi xóa
            setPost((prevPost) => ({
                ...prevPost,
                Comments: prevPost.Comments.filter((comment) => comment.id !== commentId),
            }));
        } catch (error) {
            console.error('Failed to delete comment:', error);
            setError('Failed to delete comment');
        }
        setBtnDelete(false);
    };

    //Sửa comment-------------------------------------------------------------------------------------

    const [newContent, setNewContent] = useState('');

    const handleUpdateComment = async (commentId) => {
        try {
            const response = await axios.put(`http://localhost:8080/comments/${commentId}`, {
                commentContent: newContent, // Nội dung bình luận mới
            });
            console.log(response.data.message); // Thông báo thành công

            // Cập nhật danh sách bình luận sau khi sửa
            setDataComment((prevComments) =>
                prevComments.map((comment) =>
                    comment.id === commentId ? { ...comment, comment_content: newContent } : comment,
                ),
            );
        } catch (error) {
            console.error('Failed to update comment:', error);
            setError('Failed to update comment');
        }
    };

    //----------------------------------------------Phan xu li render màn hình nhỏ---------------------------------------

    const [btnDelete, setBtnDelete] = useState(false);
    const [editComment, setEditComment] = useState(false);
    const [idComment, setIdComment] = useState(0);

    //phan set true false cho man hinh up post-------------------------------------------------
    const handleDelete = (commentId) => {
        setBtnDelete(commentId);
        setAnchorEl(null);
    };
    const handleEditComment = (id, text) => {
        setEditComment(true);
        setAnchorEl(null);
    };

    const containerRef = useRef(null);

    const unrenderUpPost = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setBtnDelete(false);
            setEditComment(false);
        }
    };

    //Mouse ra ngoiaf sẽ tắt cửa sổ nhỏ
    useEffect(() => {
        document.addEventListener('mousedown', unrenderUpPost);
        return () => {
            document.removeEventListener('mousedown', unrenderUpPost);
        };
    });

    // Xử lí render menu của bài viết

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <div className={cx('wrapper_post')}>
                {post && post.User && post.User.avatar && (
                    <>
                        <div className={cx('wr_post')}>
                            <div className={cx('head_post')}>
                                <div className={cx('avatar_post')}>
                                    <img className={cx('avatar')} src={post.User.avatar} />
                                </div>
                                <div className={cx('user_id_day')}>
                                    <p>{post.User.username}</p>
                                    <span>01/01/2024</span>
                                </div>
                            </div>

                            <div className={cx('content_post')}>
                                <div className={cx('content')}>
                                    <p>{post.content}</p>
                                    <div className={cx('file_post')}>
                                        {post.Images.map((image, index) => (
                                            <img key={index} src={image.img_url} alt="" onDoubleClick={handleLike} />
                                        ))}
                                    </div>
                                    {showHeart && (
                                        <div
                                            className={cx('show_heart')}
                                            style={like ? { color: '#d63232' } : { color: '#fff' }}
                                        >
                                            <BiSolidHeart />
                                        </div>
                                    )}
                                </div>
                                <div className={cx('interact')}>
                                    <button onClick={toggleLike} className={cx('like')}>
                                        {like ? <BiSolidHeart style={{ color: '#d63232' }} /> : <BiHeart />}{' '}
                                    </button>
                                    <label>{post.Likes.length}</label>
                                    <button className={cx('comment')}>
                                        <BiMessageRounded />{' '}
                                    </button>{' '}
                                    <label></label>
                                    <button className={cx('share')}>
                                        <BiShare />
                                    </button>{' '}
                                    <label>Share</label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('tittle_comment')}>Comment</div>
                        {post.Comments && post.Comments.length ? (
                            post.Comments.map((comment, index) =>
                                comment.post_id === post.id ? (
                                    <div className={cx('wr_comment')} key={comment.id}>
                                        <div className={cx('comment')} key={comment.id}>
                                            {/* Render avatar của comment */}
                                            {users.map((user) =>
                                                user.id === comment.user_id ? (
                                                    <>
                                                        <div className={cx('wr_avatar')} key={user.id}>
                                                            <img src={user.avatar} alt="avatar user comment" />
                                                        </div>

                                                        <div className={cx('content')}>
                                                            <p className={cx('user_id')}>{user.username}</p>
                                                            {comment.comment_content ? (

                                                            <p className={cx('content_des')}>
                                                                {comment.comment_content}
                                                            </p>
                                                            ): (
                                                                <></>
                                                            )}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                ),
                                            )}

                                            <div className={cx('wr_btn_up_comment')}>
                                                <div className={cx('menu')}>
                                                    <Button
                                                        id="fade-button"
                                                        aria-controls={open ? 'fade-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick}
                                                        className={cx('btn_menu')}
                                                    >
                                                        ...{comment.id}
                                                    </Button>
                                                    <Menu
                                                        key={comment.id}
                                                        className={cx('wr_menu')}
                                                        id="fade-menu"
                                                        MenuListProps={{
                                                            'aria-labelledby': 'fade-button',
                                                        }}
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        TransitionComponent={Fade}
                                                    >
                                                        <MenuItem
                                                            className={cx('menu_item')}
                                                            onClick={() => handleEditComment(post.id, post.text)}
                                                        >
                                                            Chỉnh sửa
                                                        </MenuItem>
                                                        <MenuItem onClick={() => handleDelete(comment.id)}>
                                                            Xoá bài viết {comment.id}{' '}
                                                        </MenuItem>
                                                    </Menu>
                                                </div>
                                            </div>
                                            {btnDelete === comment.id && (
                                                <div className={cx('wr_position_up_post')}>
                                                    <div className={cx('relative_wr')}>
                                                        <div ref={containerRef} className={cx('position_wr_add_post')}>
                                                            <div className={cx('tittle_delete')}>
                                                                Xác nhận xoá {comment.id}
                                                            </div>
                                                            <div className={cx('wr_btn_del_comment')}>
                                                                <button
                                                                    onClick={() => handleDeleteComment(comment.id)}
                                                                    key={post.id}
                                                                    className={cx('btn_delete_comment')}
                                                                >
                                                                    Xoá
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <>
                                                {editComment && (
                                                    <div className={cx('wr_position_up_post')}>
                                                        <div className={cx('relative_wr')}>
                                                            {/* {editingId === post.id && ( */}
                                                            <div
                                                                ref={containerRef}
                                                                className={cx('position_wr_add_post')}
                                                            >
                                                                <div className={cx('tittle_delete')}>
                                                                    Nhập bình luận mới
                                                                </div>

                                                                <div className={cx('wr_inp_new_comment')}>
                                                                    <form
                                                                        onSubmit={() => handleUpdateComment(comment.id)}
                                                                    >
                                                                        <input
                                                                            value={newContent}
                                                                            placeholder={comment.comment_content}
                                                                            type="text"
                                                                            onChange={(e) =>
                                                                                setNewContent(e.target.value)
                                                                            }
                                                                        />

                                                                        <button
                                                                            type="submit"
                                                                            className={cx('btn_edit_comment')}
                                                                        >
                                                                            Đăng
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            {/* )} */}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                ),
                            )
                        ) : (
                            <></>
                        )}

                        {/* Render màn hình chỉnh sửa khi click chỉnh sửa */}

                        <div className={cx('wr_inp_comment')}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    maxLength={100}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    type="text"
                                    placeholder="Nhập Bình Luận ..."
                                    required
                                />
                                <button type="submit">Đăng</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
            {/* Xử lí render info post */}
        </Fragment>
    );
}

export default DetailPost;
