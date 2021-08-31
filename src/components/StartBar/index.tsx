import "./index.css"
import startbutton from './start.png';
import sound from './soundicon.png';
import second from './secondicon.png';
import virus from './virusicon.png';


const StartBar: React.FC = () => {
    const today = new Date()
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return (
    <div className="StartBar">
        <div className="items item-left">
        <div className="button">
            <img src={startbutton} alt="start"/>
            </div>
        </div>
        <div className="items item-right">
        <img className="icon" src={sound} alt="sound"/>
        <img className="icon"  src={second} alt="second"/>
        <img className="icon"  src={virus} alt="virus"/>
         
            <div className="time">
               {time}
            </div>
        </div>
    </div>
    )
}

export default StartBar;
