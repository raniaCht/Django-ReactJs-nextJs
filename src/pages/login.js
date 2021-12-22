import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { login, reset_register_success } from '../actions/auth';
import Layout from '../hocs/Layout';
import LoadingButton from '@mui/lab/LoadingButton';
import Save from '@material-ui/icons/Save';
import Link from 'next/link'

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {
        email,
        password,
    } = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(email, password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');

    return (
        <Layout
            title='DZ Fêtes | Login'
            content='login page'
        >
            <div className='auth'>
                <Grid className='login__container' container justifyContent="center">
                    <Grid item md={6} className="login__container__card" sx={{ p: 5, mt: 3 }} justifyContent="center" display='flex' flexDirection='column'>
                        <Typography sx={{ textAlign: 'center' }} component="h1">Sign In</Typography>
                        <Typography sx={{ textAlign: 'center' }} component="p">Sign into your Account</Typography>
                        <Typography component="form" sx={{ my: 2 }} onSubmit={e => onSubmit(e)}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                color='secondary'
                                type='email'
                                placeholder='Example@example.com'
                                name='email'
                                onChange={onChange}
                                value={email}
                                className='login__container__card__input'
                                required
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                color='secondary'
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={onChange}
                                value={password}
                                minLength='8'
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
                                        Login
                                    </LoadingButton>
                                ) : (
                                    <Button type='submit' variant="outlined" color='secondary'>
                                        Login
                                    </Button>
                                )
                            }
                        </Typography>
                        <Typography component='p'>
                            Don't have an account?
                            <Link href='/register'>
                                <a className="login__container__card__link"> Sign Up</a>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
};

export default LoginPage;