import Layout from "../hocs/Layout";
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Modal } from "../components/modal";
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UpdateProfile } from '../components/update-profile'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { convertBase64 } from "../functions";
import { SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from "../actions/types";
import CircularProgress from '@mui/material/CircularProgress';
import { Poste } from "../components/poste";


const Profile = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)

    const handleClose = (e, setAnchorEl, id) => {
        window.scrollTo(0, 0)
        setAnchorEl(null);
        if (e.target.id == 'modify-poste') {
            setTypeOfMethod('PUT')
        } else {
            setTypeOfMethod("DELETE")
        }
        showModal(e, id)
    };
    const router = useRouter()
    const [user, setUser] = useState({})
    const [userPhoto, setUserPhoto] = useState("")
    const [postes, setPostes] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openUpdateProfile, setOpenUpdateProfile] = useState(false)
    const [thisPoste, setThisPoste] = useState({})
    const [typeOfMethod, setTypeOfMethod] = useState('')
    const [msgError, setMsgError] = useState('')
    const methodToApply = async (id, newData) => {
        try {
            dispatch({
                type: SET_AUTH_LOADING,
            });
            const { title, wilaya, description, price, category, unit_price } = newData
            const data = await fetch("/api/service/my", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: (typeOfMethod === "PUT" ? "PUT" : "DELETE"),
                body: JSON.stringify({ id, title, wilaya, description, price, category, unit_price })
            })
            const json = await data.json()
            if (data.status === 200) {
                dispatch({
                    type: REMOVE_AUTH_LOADING,
                });
                hideModal()
            } else {
                dispatch({
                    type: REMOVE_AUTH_LOADING,
                });
                setMsgError(json.error)
            }
        } catch (error) {
            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
            console.log(error);
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [openModal, openUpdateProfile])
    const showModal = (e, id) => {
        setMsgError('')
        document.body.classList.add('modal-open')
        console.log(id);
        for (let index = 0; index < postes.length; index++) {
            if (postes[index].id === id) {
                setThisPoste(postes[index])
                break
            }
        }
        setOpenModal(true)
    }
    const showUpdateProfile = (e) => {
        document.body.classList.add('modal-open')
        setOpenUpdateProfile(true)
    }
    const hideModal = () => {
        document.body.classList.remove('modal-open')
        setOpenModal(false)
    }
    const hideUpdateProfile = () => {
        document.body.classList.remove('modal-open')
        setOpenUpdateProfile(false)
    }
    useEffect(async () => {
        try {
            await axios.post('/api/ServiceOwner/me',
                {
                    withCredentials: true,
                }
            )
                .then(res => {
                    setUser(res.data)
                    setUserPhoto(res.data.photo)
                })
                .catch(error => {
                    if (error.response.status === 403 || error.response.status === 401) {
                        router.push("/login");
                    }
                })
                .catch(console.log)
        } catch (error) {
            console.log(error);
        }
    }, [])

    const changePhoto = async (e) => {
        try {
            dispatch({
                type: SET_AUTH_LOADING,
            });
            const body = new FormData()
            await convertBase64(e.target.files[0])
                .then(async (base64) => {
                    body.append('photo', base64)
                    debugger
                    await fetch('/api/ServiceOwner/update-photo', {
                        method: "PUT",
                        body: body
                    }).then(res => {
                        dispatch({
                            type: REMOVE_AUTH_LOADING,
                        })
                        if (res.status === 200) {
                            router.reload(window.location.pathname)
                        } else {
                            throw new Error('Something went wrong');
                        }
                    }).catch(err => dispatch({
                        type: REMOVE_AUTH_LOADING,
                    }))
                })
        } catch (err) {
            dispatch({
                type: REMOVE_AUTH_LOADING,
            })
        }
    }

    useEffect(async () => {
        try {
            await axios.post('/api/service/my',
                {
                    withCredentials: true,
                }
            )
                .then(res => {
                    setPostes(res.data)
                })
                .catch(error => {
                    if (error.response.status === 403 || error.response.status === 401) {
                        router.push("/login");
                    }
                })
                .catch(console.log)
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <Layout
            title='Dz Fêtes | Profile'
            content='Resiger page for this auth tutorial on httpOnly cookies'
        >
            <div className="profile">
                <header className="profile__header">
                    <div className="profile__header__cover"></div>
                    <div className="profile__header__info">
                        <div className="cader-image">
                            <div className="user-img">
                                <img src={(userPhoto.includes(API_URL) ? userPhoto : `${API_URL}${userPhoto}`)} alt="" />
                                {
                                    loading ? (
                                        <CircularProgress color="secondary" className="user-img-load" />
                                    ) : (
                                        <div className="btn-change">
                                            <label htmlFor="file-input">
                                                <PhotoCameraIcon />
                                                <span>change image</span>
                                            </label>
                                            <input id="file-input" onChange={changePhoto} type="file" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="user-info">
                            <h3 className="user-info_name">
                                {user.name}
                                <IconButton
                                    className="post__edit"
                                    aria-label="more"
                                    id="update-profile"
                                    onClick={showUpdateProfile}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </h3>
                            <h4 className='user-info_desc'>{user.description}</h4>
                            <div className="user-info_links">
                                <a className="link" href="www.facebook.com" target="_blank">
                                    <FacebookIcon />
                                    <span>Rania Cht</span>
                                </a>
                                <a className="link" href="www.facebook.com" target="_blank">
                                    <InstagramIcon />
                                    <span>Rania Cht</span>
                                </a>
                                <a className="link" href="www.facebook.com" target="_blank">
                                    <YouTubeIcon />
                                    <span>Rania Cht</span>
                                </a>
                                <a className="link" href="www.facebook.com" target="_blank">
                                    <PinterestIcon />
                                    <span>Rania Cht</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="profile__content">
                    <div className="profile__content__sidebar">
                        <div className="info-contact">
                            <div className="link">
                                <PhoneIcon />
                                <span>{user.phone}</span>
                            </div>
                            <div className="link">
                                <EmailIcon />
                                <span>{user.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile__content__posts">
                        {
                            postes.map(poste =>
                                <Poste poste={poste} handleClose={handleClose} key={poste.id} />
                            )
                        }
                    </div>
                </main >
            </div >
            {openModal && <Modal type={typeOfMethod} poste={thisPoste} concelMethod={hideModal} confirmMethod={methodToApply} msgError={msgError} />}
            {openUpdateProfile && <UpdateProfile owner={user} concelMethod={hideUpdateProfile} />}
        </Layout >
    )
}

export default Profile;