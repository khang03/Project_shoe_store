import classNames from "classnames/bind";
import { BiHeart, BiSolidHeart,BiMessageRounded,BiShare } from "react-icons/bi";
import style from "./PostUser.module.scss"
import { useState } from "react";

const cx = classNames.bind(style);



const PostUser = ({dataItem}) => {
    // Xử lí nút like bài viết
    const [like, setLike] = useState(false);
    const [countLike, setCountLike] = useState(0);
    const handleLike = () => {
        setLike(true);
        if(like){
            setCountLike(countLike - 1);
        }
        else{
            setCountLike(countLike + 1);
        }
        setLike(!like)
    };


    return (
        
            <>
                <hr />
                <div className={cx('wr_startus_post')}>
                    <div className={cx('img_startus')}>
                        <img alt="" src={dataItem.avatar}/>
                    </div>
                    <div className={cx('wr_des_post')}>
                        <div className={cx('user_id')}>{dataItem.username}</div>
                        <div className={cx('des_post')}>
                            <p>
                                abc
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('wr_image_post')}>
                    <img
                        alt=""
                        className={cx('image_post')}
                        src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                    />
                </div>

                <div className={cx('interact')}>
                    <button className={cx('like')}  onClick={handleLike}>

                        {like ? <BiSolidHeart style={{color: 'red'}}/> : <BiHeart />}{' '}
                    </button>{' '}
                    <label>{countLike}</label>
                    <button className={cx('comment')}>
                        <BiMessageRounded />{' '}
                    </button>{' '}
                    <label>Comment</label>
                    <button className={cx('share')}>
                        <BiShare />
                    </button>{' '}
                    <label>Share</label>
                </div>
            </>
    );
};

export default PostUser;