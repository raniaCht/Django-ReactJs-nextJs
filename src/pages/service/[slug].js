import Layout from "../../hocs/Layout";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function columns(containerWidth) {
    console.log('containerWidth' + containerWidth);
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    console.log('columns' + columns);
    return columns;
}

const Service = ({ params }) => {
    const [photos, setPhotos] = useState([])
    const fillArray = (data) => {
        let list = []
        for (let i = 0; i < 20; i++) {
            let element = data[`photo_${i + 1}`];
            if (element != null) {
                setPhotos(state => [
                    ...state,
                    {
                        src: element,
                        width: 1,
                        height: 1
                    }
                ])
            }
        }
    }
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const [service, setService] = useState({})
    const router = useRouter();
    const { slug } = params
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const api = await fetch(`/api/service/${slug}`, {
                    method: "GET",
                })
                const data = await api.json()
                setService(data)
                fillArray(data)
                if (api.status === 403) {
                    router.push("/login");
                }
                if (api.status === 404) {
                    router.push("/404");
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyAPI()
    }, []);
    const title = service?.title ? `${service.title}` : "Service";

    return (
        <Layout
            title={`Dz Fêtes | ${title}`}
            content=""
        >
            <div className="service-detail">
                <div className="service-detail__header">
                    <div className="image-border">
                        <img src={service.photo_main} />
                    </div>
                </div>
                <div className="service-detail__body">
                    <h2>{title}</h2>
                    <h3>{service.price}DA <span>/{service.unit_price}</span></h3>
                    <p>{service.description}</p>
                    <div className="gallery" >
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}

export default Service;