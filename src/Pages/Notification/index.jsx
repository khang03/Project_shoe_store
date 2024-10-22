import classNames from 'classnames/bind';
import style from './Notification.module.scss';
import { useEffect, useState } from 'react';

const arr_user = [
    { user_id: 1, user_name: 'Nguyễn An', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 2, user_name: 'Trần Bình', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 3, user_name: 'Lê Cường', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 4, user_name: 'Phạm Duy', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 5, user_name: 'Đỗ Hà', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 6, user_name: 'Vũ Hải', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 7, user_name: 'Bùi Kiên', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 8, user_name: 'Ngô Lan', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 9, user_name: 'Dương Mai', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
    { user_id: 10, user_name: 'Lý Nam', content: 'Đã thích bài viết của bạn', time: '6 giờ trước' },
];
function Notification() {
    const cx = classNames.bind(style);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...arr_user]);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tittle_page')}>Thông báo</div>
            {data.map((item, index) => (
                <div className={cx('wr_notification')} id={item.user_id}>
                    <div className={cx('wr_img')}>
                        <img
                            className={cx('img_user')}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"
                            alt=""
                        />
                    </div>
                    <div className={cx('content_notification')}>
                        <div className={cx('user_id')}>
                            <div className={cx('id')}>{item.user_name}</div>
                            <div className={cx('time')}>{item.time}</div>
                        </div>
                        <div className={cx('content')}>{item.content}</div>
                    </div>
                </div>
            ))}

            {/* <div className={cx('wr_notification')}>
                <div className={cx('wr_img')}>
                    <img className={cx('img_user')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" alt="" />
                </div>
                <div className={cx('content_notification')}>
                    <div className={cx('user_id')} >
                        <div className={cx('id')}>user_id</div>
                        <div className={cx('time')}>Thời gian</div>
                    </div>
                    <div className={cx('content')}>Content notification</div>
                </div>
           </div>
           <div className={cx('wr_notification')}>
                <div className={cx('wr_img')}>
                    <img className={cx('img_user')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" alt="" />
                </div>
                <div className={cx('content_notification')}>
                    <div className={cx('user_id')} >
                        <div className={cx('id')}>user_id</div>
                        <div className={cx('time')}>Thời gian</div>
                    </div>
                    <div className={cx('content')}>Content notification</div>
                </div>
           </div>
           <div className={cx('wr_notification')}>
                <div className={cx('wr_img')}>
                    <img className={cx('img_user')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" alt="" />
                </div>
                <div className={cx('content_notification')}>
                    <div className={cx('user_id')} >
                        <div className={cx('id')}>user_id</div>
                        <div className={cx('time')}>Thời gian</div>
                    </div>
                    <div className={cx('content')}>Content notification</div>
                </div>
           </div> */}
        </div>
    );
}

export default Notification;
