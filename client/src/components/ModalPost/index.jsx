// Reactjs
import { BiImageAdd, BiXCircle } from 'react-icons/bi';
import style from './ModalPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function ModalPost({ closeModal }) {
    // Khai báo State và Ref (khai báo biến ở đây)
    const [txtDesPost, setTxtDesPost] = useState('');
    console.log('123');
    //Render image khi nhập từ input
    const [imageRender, setImageRender] = useState();

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];

        //Lấy link ảnh bằng cách đặt một thuộc tính
        file.preview = URL.createObjectURL(file);
        setImageRender(file);
        console.log(URL.createObjectURL(file));
    };
    console.log(imageRender);
    

    return (
        <div className={cx('wr_position_up_post')}>
            <div className={cx('relative_wr')}>
                <div className={cx('position_wr_add_post')}>
                    <div className={cx('wr_startus')}>
                        <div className={cx('img_startus')}>
                            <img alt="" src="" />
                        </div>
                        <div className={cx('des_startus')}>
                            <div className={cx('my_user_id')}>user_id</div>
                            <form>
                                <input
                                    placeholder="Có gì hot?"
                                    type="text"
                                    name="descPost"
                                    value={txtDesPost}
                                    onChange={(e) => setTxtDesPost(e.target.value)}
                                />

                                <div className={cx('wr_inp_img')}>
                                    <input type="file" className={cx('inp_img')} />
                                    <label>
                                        <BiImageAdd className={cx('img_icon')} />
                                    </label>
                                </div>
                            </form>
                        </div>

                        {/* click vào button này sẽ tắt màn hình render */}
                        <div className={cx('btn_upl_stt')}>
                            <button className={cx('btn_turn_off_post')} onClick={closeModal}>
                                <BiXCircle />
                            </button>
                        </div>
                    </div>
                    <div className={cx('info_render')}>
                        <div className={cx('img_render')}>
                            {imageRender && (
                                <img
                                    src={imageRender.preview}
                                    alt=""
                                    style={{ width: 'auto', height: 100, borderRadius: '15px' }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPost;
