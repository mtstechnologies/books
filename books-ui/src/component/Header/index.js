import HeaderOpcoes from "../HeaderOpcoes";
import HeaderIcon from "../HeaderIcon";
import HeaderLogo from "../HeaderLogo";
import "./styles.css";
function Header() {

    return (
        <>
            <header className="App-header">
                <HeaderLogo />
                <HeaderOpcoes />
                <HeaderIcon />
            </header>
        </>

    )
}
export default Header;