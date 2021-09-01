import StartBar from "../../components/StartBar"
import IconsDesktop from "../../IconsDesktop.tsx"
import ModalInternet from "../../Modals/internet"
import "./index.css"

const Home: React.FC = () => {
    return (
        <div className="home">
            <IconsDesktop/>
            <ModalInternet/>
            <StartBar/>
        </div>
    )
}

export default Home
