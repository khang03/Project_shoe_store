import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import style from './Register.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Register() {
    
  
    return (
        <div className={cx('wrapper')}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5">Đăng Ký</Typography>
                    <form >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="name"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="avatar"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mật Khẩu"
                            type="password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Xác Nhận Mật Khẩu"
                            type="password"
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Đăng Ký
                        </Button>
                        <Link className={cx('register')} to='/Login' >Đăng nhập</Link>

                    </form>
                </Paper>
            </Container>    
        </div>
    );
}

export default Register;
