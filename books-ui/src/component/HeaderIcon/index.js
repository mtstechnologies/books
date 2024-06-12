import perfil from "../../assets/img/perfil.svg";
import sacola from "../../assets/img/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
        display: flex;
        align-items: center;
`
const Icone = styled.li`
        margin-right: 40px;
        width: 25px;
`

function HeaderIcon() {

    const icones = [perfil, sacola];
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>


    )
}
export default HeaderIcon;
