import HeaderOpcoes from "../HeaderOpcoes";
import HeaderIcon from "../HeaderIcon";
import HeaderLogo from "../HeaderLogo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {

    return (
        <>
            <HeaderContainer>
                <Link to="/">
                    <HeaderLogo />
                </Link>
                <HeaderOpcoes />
                <HeaderIcon />
            </HeaderContainer>
        </>

    )
}
export default Header;