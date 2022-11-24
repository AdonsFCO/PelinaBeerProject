import Logo from "../../../assets/brand/pelina beer logo-03.png";
import "./Header.css";
const Header = () =>
{
    return(
        <header>
                <div className="logoContainer">
                    <img src={Logo} alt="PelinaLogo" className="Logo"/>
                </div>
                <div className="SearcherContainer">
                    <input type="input" placeholder="Search Movies"/>
                </div>

    </header>)


}

export default Header; 