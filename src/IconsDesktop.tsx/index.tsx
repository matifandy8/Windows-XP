import "./index.css"
import internet from './internet.png';


const IconsDesktop: React.FC = () => {
    return (
        <div className="IconsDesktop">
            <div className="icon__desktop">
            <img src={internet} alt="internet"/>
            <span className="icon__text">Internet Exporer</span>
            </div>
            <div className="icon__desktop">
            <img src={internet} alt="internet"/>
            <span className="icon__text">Internet Exporer</span>
            </div>
            <div className="icon__desktop">
            <img src={internet} alt="internet"/>
            <span className="icon__text">Internet Exporer</span>
            </div>
        </div>
    )
}

export default IconsDesktop;
