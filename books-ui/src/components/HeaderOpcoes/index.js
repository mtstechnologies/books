import styled from "styled-components";
import { Link } from "react-router-dom";
const Options = styled.ul`
        display: flex;
`
const OptionsCategory = styled.li`
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
        min-width: 120px;
`

function HeaderOpcoes() {
    const textoOpcao = ['CATEGORY', 'FAVORITES', 'BOOKSHELF'];
    return (
        <>
            <Options>
                {textoOpcao.map((texto) => (
                    <Link to={`/${texto.toLowerCase()}`}><OptionsCategory><p>{texto}</p></OptionsCategory></Link>
                ))}
            </Options>
        </>
    )
}
export default HeaderOpcoes;