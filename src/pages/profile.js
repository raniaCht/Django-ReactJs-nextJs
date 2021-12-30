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
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const Profile = () => {
    const router = useRouter()
    const [user, setUser] = useState({})
    const [postes, setPostes] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [thisPoste, setThisPoste] = useState({})
    const showModal = (e, id) => {
        console.log(id);
        document.body.classList.add('modal-open')
        for (let index = 0; index < postes.length; index++) {
            if (postes[index].id === id) {
                setThisPoste(postes[index])
                break
            }
        }
        setOpenModal(true)
    }
    const hideModal = (e) => {
        document.body.classList.remove('modal-open')
        setOpenModal(false)
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
            title='Dz Fêtes | Register'
            content='Resiger page for this auth tutorial on httpOnly cookies'
        >
            <div className="profile">
                <header className="profile__header">
                    <div className="profile__header__info">
                        <div className="cader-image">
                            <div className="user-img">
                                <img src={user.photo} alt="" />
                            </div>
                        </div>
                        <div className="user-info">
                            <h3 className="user-info_name">{user.name}</h3>
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
                                    <button className="post__edit" onClick={(e) => showModal(e, poste.id)}>
                                        <ModeEditOutlineOutlinedIcon />
                                    </button>
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
            {openModal && <Modal poste={thisPoste} />}
        </Layout>
    )
}

export default Profile;