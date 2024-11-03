// Reactjs
import { Fragment, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

// My Source
import style from './Home.module.scss';
import PostUser from '~/components/PostUser';
import ModalPost from '~/components/ModalPost';

const cx = classNames.bind(style);

function Home() {
    // Khai báo State và Ref (khai báo biến ở đây)
    const [showModalPost, setShowModalPost] = useState(false);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.log('Không lấy được dữ liệu', error));
    }, []);
    // console.log(dataUser);
    
    return (
        <Fragment>
            <div className={cx('wrapper')} >
                <div className={cx('wr_startus')}>
                    <div className={cx('img_startus')}>
                        <img alt="" src="" />
                    </div>
                    <div className={cx('des_startus')}>
                        <input placeholder="Có gì hot?" />
                    </div>
                    <div className={cx('btn_upl_stt')}>
                        <button onClick={() => setShowModalPost(!showModalPost)} className={cx('btn_upload')}>
                            Đăng
                        </button>
                    </div>

                    {/* Xử lí render info post */}
                    {showModalPost && <ModalPost closeModal={() => setShowModalPost(false)} />}
                </div>

                
                {/* Render component Post ra màn hình */}

                <PostUser data={posts}/>

            </div>
        </Fragment>
    );
}

export default Home;
