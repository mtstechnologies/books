import styled from "styled-components";

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
    const textoOpcao = ['CATEGORY', 'FAVORITES', 'MY BOOKSHELF'];
    return (
        <>
            <Options>
                {textoOpcao.map((texto) => (
                    <OptionsCategory><p>{texto}</p></OptionsCategory>
                ))}
            </Options>
        </>
    )
}
export default HeaderOpcoes;