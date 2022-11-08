import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initPayment } from '../../api/apiOrder';
import { userInfo } from '../../utils/auth';

const Payment = () => {
    const [sessionSucces, setSessionSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [redirectURL, setRedirectURL] = useState('');

    useEffect(() => {
        initPayment(userInfo().token)
            .then(response => {
                if (response.data.status === 'SUCCESS') {
                    setSessionSuccess(true);
                    setRedirectURL(response.data.GatewayPageURL)
                    setFailed(false);
                }
            })
            .catch(err => {
                setFailed(true);
                setSessionSuccess(false);
            })
    }, [])

    return (
        <div>
            {sessionSucces ? window.location = redirectURL : "Payment is processing..."}
            {failed ? (<><p>Failed to start payemnt session...</p><Link to="/cart">Go to Cart</Link></>) : ""}
        </div>
    )
}

export default Payment;