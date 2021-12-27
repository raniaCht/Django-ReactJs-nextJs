import { Button } from "@mui/material";
import Link from "next/link";
import { API_URL } from "../config";

const CardService = ({ item }) => {
    return (
        <Link href={`/service/${item.slug}`}>
            <div className="container-product">
                <div className="product">
                    <div className="product-img">
                        <img src={(item.photo_main.includes(API_URL) ? item.photo_main : `${API_URL}${item.photo_main}`)} />
                    </div>
                    <div className="product-body">
                        <h4>{item.title}</h4>
                        <span>{item.wilaya}</span>
                        <h5>{item.description}</h5>
                    </div>
                    <div className="product-foot">
                        <p>{item.price}</p>
                        <Button variant="outlined" fullWidth color='secondary'>Detail</Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardService;