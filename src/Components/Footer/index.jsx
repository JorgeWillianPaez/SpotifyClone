import "./style.scss";
import Pulse from "../../Assets/Pulse.jpg";
import Heart from "../../Assets/Heart.svg";

const Footer = () => {
    return (
        <div className="footerContent">
            <div className="contentOne">
                <img src={Pulse} width={56} height={56} />
                <div>
                    <p className="song">Comfortably Numb - Live</p>
                    <p className="artist">Pink Floyd</p>
                </div>
                <button className="heartButton">
                    <img src={Heart} width={16} height={16} />
                </button>
            </div>
            <div className="contentTwo"></div>
            <div className="contentThree"></div>
        </div>
    )
}

export default Footer;