import classNames from 'classnames/bind';
import style from './ChangPass.module.scss';
function Changpass() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title_changepass')}>
                <span>Đổi mật khẩu</span>
            </div>
            <div className={cx('wr_input')}>
                <div className={cx('wrapper')}>
                    <form>
                        <div className={cx('wr_edit_item')}>
                            <div className={cx('my_id')}>
                                <span>Mật khẩu cũ</span>
                                <br></br>
                                <input type="text" placeholder="Nhập mật khẩu cũ" />
                            </div>
                        </div>
                        <div className={cx('wr_edit_item')}>
                            <div className={cx('my_id')}>
                                <p>Mật khẩu mới</p>
                                <input
                                    type="text"
                                    placeholder="Nhập mật khẩu mới..."
                                />
                            </div>
                        </div>

                        <div className={cx('wr_edit_item')}>
                            <div className={cx('my_id')}>
                                <p>Mật khẩu mới</p>
                                <input
                                    type="text"
                                    placeholder="Xác nhận mật khẩu mới..."
                                />
                            </div>
                        </div>
                        
                        <div className={cx('btn_confirm')}>
                            <button type="submit">Xong</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Changpass;
