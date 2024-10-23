import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className="home_page" to="/">
                    Trang chủ
                </Link>
                <span>Dành cho bạn</span>
                <span>Đăng Xuất</span>
            </div>
        </header>
    );
}

export default Header;
