import "./index.css"
import startbutton from './start.png';
import sound from './soundicon.png';
import second from './secondicon.png';
import virus from './virusicon.png';
import { useEffect, useState } from "react";


const StartBar: React.FC = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
  
     const UpdateTime = () => {
         time = new Date().toLocaleTimeString();
         setCtime(time)
     }
    setInterval(UpdateTime, 1000)
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
               {ctime}
            </div>
        </div>
    </div>
    )
}

export default StartBar;
