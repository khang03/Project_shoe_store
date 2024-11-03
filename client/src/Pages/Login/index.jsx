import classNames from 'classnames/bind';
import style from './Login.module.scss';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/users/login`, { username, password });
            setUserId(response.data.id);
            console.log('Logged in successfully:', response.data);

            // Có thể lưu token vào localStorage nếu sử dụng JWT
            // localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Failed to login:', error.response.data);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography className={cx('title_login')} variant="h5">
                        Đăng Nhập
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nhập tài khoản"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mật Khẩu"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Đăng Nhập
                        </Button>

                        {userId && <p>UserID: {userId}</p>}
                        <Link className={cx('register')} to="/Register">
                            Đăng ký
                        </Link>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}

export default Login;
