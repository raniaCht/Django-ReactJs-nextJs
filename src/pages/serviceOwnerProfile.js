import Layout from "../hocs/Layout";
import Image from 'next/image'
import { useRouter } from "next/router"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Profile = () => {
    const router = useRouter()
    const profileInfo = router.query
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
                                <img src={profileInfo.photo} alt="" />
                            </div>
                        </div>
                        <div className="user-info">
                            <h3 className="user-info_name">{profileInfo.name}</h3>
                            <h4 className='user-info_desc'>{profileInfo.description}</h4>
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
                                <span>{profileInfo.phone}</span>
                            </div>
                            <div className="link">
                                <EmailIcon />
                                <span>{profileInfo.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile__content__posts">
                        <div className="post">
                            <span className="post__desciption">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially
                                unchanged.
                            </span>
                            <div className="post__image">
                                <Image
                                    src="/images/post1.jpg"
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                        </div>
                        <div className="post">
                            <span className="post__desciption">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially
                                unchanged.
                            </span>
                            <div className="post__image">
                                <img src="http://127.0.0.1:8000/media/service_owner/132b5c8c5c2c41f9942fc17bed01fbaa.jpeg" />
                            </div>
                        </div>
                        <div className="post">
                            <span className="post__desciption">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially
                                unchanged.
                            </span>
                            <div className="post__image">
                                <Image
                                    src="/images/post1.jpg"
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default Profile;