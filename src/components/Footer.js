import './Footer.css';
import ig from '../res/instagram.png'; // gives image path
import fb from '../res/facebook.png';
import gh from '../res/github.png';
import tw from '../res/twitter-sign.png';
const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='box'>
                <img className='footer-img' src={ig} />
                <img className='footer-img' src={fb} />
                <img className='footer-img' src={gh} />
                <img className='footer-img' src={tw} />
            </div>
        </div>
    )
}
export default Footer;