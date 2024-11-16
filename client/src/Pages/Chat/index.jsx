import classNames from 'classnames/bind';
import style from './Chat.module.scss';
import { Avatar } from '@mui/material';
import { BiImageAdd } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Authentication from '~/functions/Authentication.jsx';
import MessageUser from '~/components/MessagePage/MessageUser';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const cx = classNames.bind(style);
function Chat() {
    // Khai báo state
    const [user, setUser] = useState([]);
    const [userLogin,setUserLogin] = useState();
    const [listFriend,setlistFriend] = useState([]);
    
    
    //Xác thực người dùng để lấy thông tin đăng nhập 
    // Và sau đó lấy luôn danh sách bạn bè   
    useEffect( ()  =>  {
         async function getUserLogin() {
            const dataUserLogin = await Authentication();
            if (dataUserLogin === 0) {
                console.log('Cần login lại');
            }else{ 
                const dataListFriend = await axios.get(`http://localhost:8080/friend/getListFriend/${dataUserLogin.id}`)
                setUserLogin(dataUserLogin)
                setlistFriend(dataListFriend.data);
            }   
         }

         getUserLogin();
    },[])

    // ----------
    const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');

  useEffect(() => {
    // Lắng nghe sự kiện 'receive_message' từ server
    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Join room khi component mount
    socket.emit('join_room', room);

    // Clenup function
    return () => {
      socket.off('receive_message');
    };
  }, [room]);

  const sendMessage = () => {
    const messageData = {
      room,
      message,
    };
    socket.emit('send_message', messageData);
    setMessage('');
  };

    // ---------

    const [inputValue, setInputValue] = useState('');

    const [mess, setMess] = useState([]);

    // Hàm xử lý khi người dùng nhập vào ô input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlePostSubmit = () => {
        if (inputValue.trim() !== '') {
            // Thêm nội dung mới vào danh sách bài đăng và xóa nội dung đã nhập sau khi đăng

            const newMess = { id: Date.now(), text: inputValue.trim() };
            setMess([...mess, newMess]);
            setInputValue('');
            console.log(...mess);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list_chat')}>
                <div className={cx('title_chat')}>Tin nhắn</div>

                {listFriend.map(friend => (<MessageUser key={friend.id} friend={friend}/>))}
                
            </div>
            <div className={cx('chat')}>
                <div className={cx('header_chat')}>
                    <div className={cx('div_avatar')}>
                        <Avatar
                            sx={{ width: 60, height: 60 }}
                            className={cx('avatar')}
                            src="https://i.pravatar.cc/150?img=1"
                        />
                    </div>
                    <div className={cx('wr_user_name')}>
                        <span className={cx('user_name')}>Nguyễn Văn A</span>
                        <br />
                        <span className={cx('span_time_onl')}>Hoạt động 6 giờ trước</span>
                    </div>
                </div>

                <div className={cx('content_mess')}>
                    <div className={cx('user_mess')}>
                        <div className={cx('avatar_user_mess')}>
                            <Avatar src="https://th.bing.com/th/id/OIP.6nDu0p6RwW2arJTCOU2pCQHaDt?rs=1&pid=ImgDetMain" />
                        </div>
                        <div className={cx('content_user_mess')}>hehe</div>
                    </div>
                    {mess.map((item, index) => (
                        <div className={cx('my_mess')}>
                            <div className={cx('content_my_mess')} id={item.id}>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('wr_send_mess')}>
                    <div className={cx('wr_input_mess')}>
                        <input
                            onChange={handleInputChange}
                            value={inputValue}
                            type="text"
                            placeholder="Nhập tin nhắn.."
                        />

                        <div className={cx('wr_inp_img')}>
                            <input type="file" className={cx('inp_img')} />
                            <label>
                                <BiImageAdd className={cx('img_icon')} />
                            </label>
                        </div>
                        <button onClick={handlePostSubmit}>Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
