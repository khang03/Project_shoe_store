import classNames from 'classnames/bind';
import style from './Find.module.scss';
import { BiSearch } from 'react-icons/bi';

const cx = classNames.bind(style);
function Find() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head_inp')}>
                <div className={cx('wr_inp')}>
                    <div className={cx('wr_icon_search')}>
                        <BiSearch />
                    </div>
                    <div className={cx('wr_search')}>
                        <input placeholder="Nhập user id" />
                    </div>
                </div>
            </div>
            <div className={cx('tittle_result')}>
                <span>Kết quả</span>
            </div>

            <div className={cx('wr_result')}>
                <div className={cx('result')}>
                    <div className={cx('wr_img')}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                            alt=""
                        />
                    </div>
                    <div className={cx('wr_info_user_find')}>
                        <p className={cx('user_id')}>user_id</p>
                        <p className={cx('user_name')}>user_name</p>
                    </div>
                </div>
                <div className={cx('result')}>
                    <div className={cx('wr_img')}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                            alt=""
                        />
                    </div>
                    <div className={cx('wr_info_user_find')}>
                        <p className={cx('user_id')}>user_id</p>
                        <p className={cx('user_name')}>user_name</p>
                    </div>
                </div>
                <div className={cx('result')}>
                    <div className={cx('wr_img')}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/451342439_1545279516420145_664382896184158578_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtuooj7cntrEsyS3BI2qyHQrU2AFLPZpNCtTYAUs9mkzrpY2pD6_iv9FlZyhceycfj5e9SPg2qhA7bXxn-XCls&_nc_ohc=MmZ5MF3JLYYQ7kNvgHft24g&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AQjnXq8jnQH4TA9ys9-kvYX&oh=00_AYD4C1xmRYphJ_489MmztS-XieVXUbqUbbyVlBA5_48fCg&oe=671566A6"
                            alt=""
                        />
                    </div>
                    <div className={cx('wr_info_user_find')}>
                        <p className={cx('user_id')}>user_id</p>
                        <p className={cx('user_name')}>user_name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Find;
