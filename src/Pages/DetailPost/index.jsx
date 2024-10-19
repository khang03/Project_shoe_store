import { BiXCircle, BiImageAdd, BiHeart, BiMessageRounded, BiShare } from 'react-icons/bi';
import classNames from 'classnames/bind';
import style from './DetailPost.module.scss';

const cx = classNames.bind(style);
function DetailPost() {
    return (
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
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                            alt=""
                        />
                    </div>
                    <div className={cx('interact')}>
                        <button className={cx('like')}>
                            <BiHeart />{' '}
                        </button>{' '}
                        <label>Like</label>
                        <button className={cx('comment')}>
                            <BiMessageRounded />{' '}
                        </button>{' '}
                        <label>Comment</label>
                        <button className={cx('share')}>
                            <BiShare />
                        </button>{' '}
                        <label>Share</label>
                    </div>
                </div>
            </div>
            <div className={cx('tittle_comment')}>Comment</div>
            <div className={cx('wr_comment')}>
                <div className={cx('comment')}>
                    <div className={cx('wr_avatar')}>
                        <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6" alt="" />
                    </div>
                    <div className={cx('content')}>
                        <p className={cx('user_id')}>user_id</p>
                        <p className={cx('content')}>Content Comment...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPost;
