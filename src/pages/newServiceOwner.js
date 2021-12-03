import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { check_auth_status } from '../actions/auth';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Camera from '@material-ui/icons/Camera'
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import Layout from '../hocs/Layout';
import { useRouter } from 'next/router'
import FormData from 'form-data'
import axios from 'axios'
import LoadingButton from '@mui/lab/LoadingButton';
import Save from '@material-ui/icons/Save';
import {
    REMOVE_AUTH_LOADING,
    SET_AUTH_LOADING
} from '../actions/types'

const Input = styled('input')({
    display: 'none',
});

const ServiceOwnerSignUp = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const loading = useSelector(state => state.auth.loading);

    useEffect(() => {
        dispatch(check_auth_status())
        console.log(isAuthenticated)
        if (typeof window !== 'undefined' && !isAuthenticated) {
            console.log(isAuthenticated)
            router.push('/login');
        }
    }, [dispatch]);


    const [formData, setFormData] = useState({
        name: '',
        description: '',
        phone: '',
        email: ''
    })

    const { name, description, phone, email } = formData;
    const [photo, setPhoto] = useState("")
    const upDatePhoto = async (e) => {
        const base64 = await convertBase64(e.target.files[0])
        setPhoto(base64);
    }

    const onChange = (e) => (e.target.type == "file" ?
        upDatePhoto(e) :
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    )

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch({
            type: SET_AUTH_LOADING
        });
        const body = new FormData()
        body.append('name', name)
        body.append('photo', photo)
        body.append('email', email)
        body.append('phone', phone)
        body.append('description', description)
        try {
            await axios({
                method: "post",
                url: "/api/ServiceOwner/register",
                data: body,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
                },
            })
                .then(function (response) {
                    dispatch({
                        type: REMOVE_AUTH_LOADING
                    });
                })
                .catch(function (response) {
                    dispatch({
                        type: REMOVE_AUTH_LOADING
                    });
                });
        } catch (err) {
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
    };

    return (
        <Layout
            title='Dz Fêtes | Sign Up For Service Owner'
            content='sign up page for service owner'
        >
            <div className='sign-service-owner'>
                <Grid className='login__container' container justifyContent="center">
                    <Grid item xs={10} className="login__container__card" sx={{ p: 5, mt: 3 }} justifyContent="center" display='flex' flexDirection='column'>
                        <Typography sx={{ textAlign: 'center' }} component="h1">Sign Up</Typography>
                        <Typography sx={{ textAlign: 'center' }} component="p">Create your Account</Typography>
                        <Typography component="form" sx={{ my: 5 }} onSubmit={e => onSubmit(e)}>
                            <Grid container>
                                <Grid item={true} md={6}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        color='secondary'
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
                                        color='secondary'
                                        type='email'
                                        placeholder='Example@example.com'
                                        name='email' value={email}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        color='secondary'
                                        type='tel'
                                        pattern="[0][5-7]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                                        placeholder='09 99 99 99 99'
                                        name='phone'
                                        value={phone}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Description"
                                        variant="outlined"
                                        color='secondary'
                                        placeholder='Description...'
                                        name='description'
                                        value={description}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        multiline
                                        rows={4}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item={true} md={6} className="cader__img">
                                    <label htmlFor="icon-button-file">
                                        <Input
                                            accept="image/*"
                                            id="icon-button-file"
                                            type="file"
                                            onChange={e => upDatePhoto(e)}
                                        />
                                        <Button
                                            disabled={loading}
                                            variant="contained"
                                            color='secondary'
                                            sx={{ px: 5, py: 2 }}
                                            endIcon={<Camera />}
                                            component="span"
                                        >
                                            upload
                                        </Button>
                                    </label>
                                    <div >
                                        <Image src={(photo != "" ? photo : "/default-user.png")} alt="" width='200' height='200' />
                                    </div>
                                </Grid>
                            </Grid>
                            {
                                loading ? (
                                    <LoadingButton
                                        loading
                                        color='secondary'
                                        loadingPosition="start"
                                        startIcon={<Save />}
                                        variant="outlined"
                                    >
                                        Save
                                    </LoadingButton>
                                ) : (
                                    <Button type='submit' variant="outlined" color='secondary'>
                                        Register
                                    </Button>
                                )
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default ServiceOwnerSignUp
