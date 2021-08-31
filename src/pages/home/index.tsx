import StartBar from "../../components/StartBar"
import IconsDesktop from "../../IconsDesktop.tsx"
import "./index.css"

const Home: React.FC = () => {
    return (
        <div className="home">
            <IconsDesktop/>
            <StartBar/>
        </div>
    )
}

export default Home
