import classNames from 'classnames/bind';
import style from './Notification.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Notification() {
    const cx = classNames.bind(style);

    const [notifications, setNotifications] = useState([]);
     //Lấy dữ liệu id người dùng khi đăng nhập
     const [error, setError] = useState(null);
     const [userId, setUserId] = useState({});
    
     //Lấy token người dùng
     const token = localStorage.getItem('authToken');
 
     //Lấy dữ liệu userId khi đăng nhập vào
     useEffect(() => {
         const fetchUserData = async () => {
             if (token) {
                 try {
                     const response = await axios.get('http://localhost:8080/', {
                         headers: {
                             Authorization: `Bearer ${token}`,
                         },
                     });
                     setUserId(response.data);
                 } catch (err) {
                     setError('Không thể lấy thông tin người dùng');
                 }
             } else {
                 setError('Bạn chưa đăng nhập');
             }
         };
         fetchUserData();
     }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/notification/${userId.id}`);
        setNotifications(response.data.notification);
        
        
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId.id]);
  console.log(notifications);
  
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tittle_page')}>Thông báo</div>
            {notifications.map((item, index) => (
                <div className={cx('wr_notification')}>
                <div className={cx('wr_img')}>
                    <img
                        className={cx('img_user')}
                        src={userId.avatar}
                        alt=""
                    />
                </div>
                <div className={cx('content_notification')}>
                    <div className={cx('user_id')}>
                        <div className={cx('id')}></div>
                        <div className={cx('time')}></div>
                    </div>
                    <div className={cx('content')}>{item.message}</div>
                </div>
            </div>
            ))}

            
            

            

        </div>
    );
}

export default Notification;
