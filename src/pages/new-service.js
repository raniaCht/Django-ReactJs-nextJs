import Layout from "../hocs/Layout"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import FormData from 'form-data'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Camera from '@material-ui/icons/Camera'
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import Save from '@material-ui/icons/Save';
import Image from 'next/image'
import {
    REMOVE_AUTH_LOADING,
    SET_AUTH_LOADING
} from '../actions/types'
import { useState } from "react";
import axios from "axios";

const Input = styled('input')({
    display: 'none',
});

const PageAddNewService = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        category: '',
        unit_price: ''
    })
    const [photo, setPhoto] = useState("")
    const [files, setFiles] = useState()
    const upDateListFile = async (e) => {
        let i = 0, m, list = []
        while (i < 20 && e.target.files.length > i) {
            m = {}
            m[`photo_${i + 1}`] = await convertBase64(e.target.files[i])
            list.push(m)
            i++
        }
        setFiles(list)
    }
    const upDatePhoto = async (e) => {
        const base64 = await convertBase64(e.target.files[0])
        setPhoto(base64);
    }
    const { title, description, price, category, unit_price } = formData;

    const onChange = (e) => (
        e.target.type == "file" ?
            (
                e.target.multiple ? upDateListFile(e) : upDatePhoto(e)
            ) :
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
        body.append('title', title)
        body.append('photo_main', photo)
        body.append('category', category)
        body.append('price', price)
        body.append('unit_price', unit_price)
        body.append('description', description)
        if (files.length > 0) {
            console.log('length of files : ' + files.length)
            files.forEach((item) =>
                body.append(Object.entries(item)[0][0], Object.entries(item)[0][1]))
        }
        for (let key of body.entries())
            console.log(key)
        try {
            await axios({
                method: "POST",
                url: "/api/service/saveService",
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
            title='Dz Fêtes | Add New Service'
            content='Add new service page'
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
                                        label="Title"
                                        variant="outlined"
                                        color='secondary'
                                        type='text'
                                        placeholder='Title'
                                        name='title'
                                        value={title}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Category"
                                        variant="outlined"
                                        color='secondary'
                                        type='text'
                                        placeholder='Category'
                                        name='category' value={category}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Price"
                                        variant="outlined"
                                        color='secondary'
                                        type='number'
                                        placeholder='0'
                                        name='price'
                                        value={price}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        InputProps={{ inputProps: { min: 0, } }}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Unity Of rice"
                                        variant="outlined"
                                        color='secondary'
                                        type='text'
                                        placeholder='1Kg or 1Day or any unity used'
                                        name='unit_price'
                                        value={unit_price}
                                        onChange={e => onChange(e)}
                                        className='login__container__card__input'
                                        min='0'
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
                                            onChange={e => onChange(e)}
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
                                        {/* <Image src={(photo != "" ? photo : "/default-user.png")} alt="" width='200' height='200' /> */}
                                    </div>
                                </Grid>
                                <Grid item={true} md={12} className="cader__img">
                                    <label htmlFor="icon-button-files">
                                        <Input
                                            accept="image/*"
                                            id="icon-button-files"
                                            type="file"
                                            multiple={true}
                                            onChange={e => onChange(e)}
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
                                        {/* <Image src={(photo != "" ? photo : "/default-user.png")} alt="" width='200' height='200' /> */}
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
                                        Create
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

export default PageAddNewService;