import logo from "../../assets/img/logo.svg";
import "./styles.css"
function HeaderLogo() {
    return(
        <div className="logo">
            <img src={logo} alt="logo" className="logo-img"/>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}
export default HeaderLogo;