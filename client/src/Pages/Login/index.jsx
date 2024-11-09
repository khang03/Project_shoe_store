import classNames from 'classnames/bind';
import style from './Login.module.scss';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';

const cx = classNames.bind(style);

function Login() {
    
    return (
        <div className={cx('wrapper')}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography className={cx('title_login')} variant="h5">
                        Đăng Nhập
                    </Typography>
                    <form >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nhập tài khoản"
                            id="username"
                            name="username"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mật Khẩu"
                            type="password"
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Đăng Nhập
                        </Button>

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
