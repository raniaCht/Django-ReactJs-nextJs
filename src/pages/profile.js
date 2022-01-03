import Layout from "../hocs/Layout";
import { useRouter } from "next/router"
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UpdateProfile } from '../components/update-profile'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Divider } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e, id) => {
        window.scrollTo(0, 0)
        setAnchorEl(null);
        if (e.target.id == 'modify-poste') {
            setTypeOfMethod('modify')
        } else {
            setTypeOfMethod("delete")
        }
        showModal(e, id)
    };
    const router = useRouter()
    const [user, setUser] = useState({})
    const [postes, setPostes] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openUpdateProfile, setOpenUpdateProfile] = useState(false)
    const [thisPoste, setThisPoste] = useState({})
    const [typeOfMethod, setTypeOfMethod] = useState('')
    const deletePoste = async (id) => {
        try {
            console.log(id)
            const data = await fetch("/api/service/my", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "DELETE",
                body: JSON.stringify({ id })
            })
            const json = await data.json()
            console.log(json);
        } catch (error) {
            console.log(error);
        }
        hideModal()
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [openModal, openUpdateProfile])
    const showModal = (e, id) => {
        document.body.classList.add('modal-open')
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
                .then(res => setUser(res.data))
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

    useEffect(async () => {
        try {
            await axios.post('/api/service/my',
                {
                    withCredentials: true,
                }
            )
                .then(res => setPostes(res.data))
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
                                <img src={user.photo} alt="" />
                                <div className="btn-change">
                                    <label for="file-input">
                                        <PhotoCameraIcon />
                                        <span>change image</span>
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
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
                                <div className="post">
                                    <div >
                                        <IconButton
                                            className="post__edit"
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? 'long-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            }}
                                        >
                                            <MenuItem key="Modify" id="modify-poste" onClick={(e) => handleClose(e, poste.id)} >
                                                Modify
                                            </MenuItem>
                                            <MenuItem key="Delete" id="detele-poste" onClick={(e) => handleClose(e, poste.id)}>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                    <h1 className="post__title">{poste.title}</h1>
                                    <span className="post__desciption">
                                        {poste.description}
                                    </span>
                                    <div className="post__image">
                                        <img src={`${API_URL}${poste.photo_main}`} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </main>
            </div>
            {openModal && <Modal type={typeOfMethod} poste={thisPoste} concelMethod={hideModal} confirmMethod={deletePoste} />}
            {openUpdateProfile && <UpdateProfile owner={user} concelMethod={hideUpdateProfile} />}
        </Layout>
    )
}

export default Profile;