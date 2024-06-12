import "./styles.css"

function OpcoesHeader() {
    const textoOpcao = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
    return (
        <>
            <ul className="Options">
                {textoOpcao.map((texto) => (
                    <li className="Options-category"><p>{texto}</p></li>
                ))}
            </ul>
        </>

    )
}
export default OpcoesHeader;