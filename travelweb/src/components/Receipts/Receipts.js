import { useParams } from "react-router-dom";


const Receipts = () => {
    const { toursId } = useParams();
    return (
       <h1>Thanh toán</h1>
    )
}

export default Receipts;