import classNames from 'classnames/bind';
import style from './Notification.module.scss';
import { useEffect, useState } from 'react';

function Notification() {
    const cx = classNames.bind(style);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tittle_page')}>Thông báo</div>
            <div className={cx('wr_notification')}>
                <div className={cx('wr_img')}>
                    <img
                        className={cx('img_user')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"
                        alt=""
                    />
                </div>
                <div className={cx('content_notification')}>
                    <div className={cx('user_id')}>
                        <div className={cx('id')}></div>
                        <div className={cx('time')}></div>
                    </div>
                    <div className={cx('content')}></div>
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
        </div>
    );
}

export default Notification;
