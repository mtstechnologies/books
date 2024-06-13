import HeaderOpcoes from "../HeaderOpcoes";
import HeaderIcon from "../HeaderIcon";
import HeaderLogo from "../HeaderLogo";
import styled from "styled-components";
 
const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {

    return (
        <>
            <HeaderContainer>
                <HeaderLogo />
                <HeaderOpcoes />
                <HeaderIcon />
            </HeaderContainer>
        </>

    )
}
export default Header;