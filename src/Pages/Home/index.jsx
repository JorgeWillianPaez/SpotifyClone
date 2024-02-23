import "./style.scss";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

const Home = () => {
    return (
        <div className="homeContent">
            <nav className="nav">
                <div className="navOne">Nav One</div>
                <div className="navTwo">Nav Two</div>
            </nav>
            <div className="main">Main</div>
            <aside className="aside">Aside</aside>
            <Footer />
        </div>
    )
}

export default Home;