import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { register } from '../actions/auth';
import Layout from '../hocs/Layout';
// import Loader from 'react-loader-spinner';
import Link from 'next/link'

const RegisterPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const register_success = useSelector(state => state.auth.register_success);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '',
    });

    const {
        name,
        email,
        password,
        re_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        console.log(1)
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(register(name, email, password, re_password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');
    if (register_success)
        router.push('/login');

    return (
        <Layout
            title='Dz Fêtes | Register'
            content='Resiger page for Dz fetes'
        >
            <div className='auth'>
                <Grid className='login__container' container justifyContent="center">
                    <Grid item md={6} className="login__container__card" sx={{ p: 5, mt: 3 }} justifyContent="center" display='flex' flexDirection='column'>
                        <Typography sx={{ textAlign: 'center' }} component="h1">Sign Up</Typography>
                        <Typography sx={{ textAlign: 'center' }} component="p">Create your Account</Typography>
                        <Typography component="form" sx={{ my: 2 }} onSubmit={e => onSubmit(e)}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                className='login__container__card__input'
                                required
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                type='email'
                                placeholder='Example@example.com'
                                name='email' value={email}
                                onChange={e => onChange(e)}
                                className='login__container__card__input'
                                required
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                className='login__container__card__input'
                                fullWidth
                                required
                            />
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                type='password'
                                placeholder='Confirm Password'
                                name='re_password'
                                value={re_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                className='login__container__card__input'
                                fullWidth
                                required
                            />
                            {
                                loading ? (
                                    <LoadingButton
                                        loading
                                        color='secondary'
                                        loadingPosition="start"
                                        startIcon={<Save />}
                                        variant="outlined"
                                    >
                                        Register
                                    </LoadingButton>
                                ) : (
                                    <Button type='submit' variant="outlined" color='secondary'>
                                        Register
                                    </Button>
                                )
                            }
                        </Typography>
                        <Typography component='p'>
                            Already have an account?
                            <Link href='/login'>
                                <a className="login__container__card__link">Sign In</a>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );

};

export default RegisterPage