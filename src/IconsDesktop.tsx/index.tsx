import "./index.css"
import internet from './internet.png';
import computer from './computer.png';
import notepad from './notepad.png';



const IconsDesktop: React.FC = () => {

    return (
        <div className="IconsDesktop">
            <div className="icon__desktop" tabIndex={1}>
            <img className="icon__img" tabIndex={1}  src={internet} alt="internet"/>
            <span className="icon__text" tabIndex={1}  >Internet Exporer</span>
            </div>
            <div className="icon__desktop" tabIndex={1}>
            <img className="icon__img" tabIndex={1} src={computer} alt="computer"/>
            <span className="icon__text" tabIndex={1}>My Computer</span>
            </div>
            <div className="icon__desktop" tabIndex={1}>
            <img className="icon__img" tabIndex={1} src={notepad} alt="notepad"/>
            <span className="icon__text" tabIndex={1} >Notepad</span>
            </div>
        </div>
    )
}

export default IconsDesktop;
