import './ImageTours.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Apis, { endpoints } from '../../configs/Apis';
import { useEffect, useState } from 'react';

const ImageTours = () => {
    const { toursId } = useParams();
    const [image, setImage] = useState(null);
    let url = `/tours/${toursId}`;

    useEffect(() => {
        const loadImage = async () => {
            let { data } = await Apis.get(endpoints['imagetours'](toursId));
            setImage(data);
        }
        loadImage();
    }, [toursId]);
    console.log(image)
    console.log(toursId)
    return (
        <>
            <h1>Hình ảnh Tours</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
                {image && image.map((p, index) => (
                    <Carousel.Item key={index}>
                        <img width="100%" height="630px" src={p.imageUrl} alt={`Hình ảnh Tours ${index}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Link to={url} style={{textDecoration:"none"}}><p className='text text-center text-primary mt-3' >Quay lại</p></Link>
        </>
    )
}

export default ImageTours;