import QRCode from '../QRCode/QRCode';
import './Card.css';

const Card = () => {
    return (
        <div className='card'>
            <QRCode pathToQRCodeImage='src/assets/image-qr-code.png' />
            <p>Improve your front-end skills by building projets</p>
            <p className={'description'}>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
            </p>
        </div>
    );
};

export default Card;
