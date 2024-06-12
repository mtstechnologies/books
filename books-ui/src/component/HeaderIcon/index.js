import "./styles.css"

import perfil from "../../assets/img/perfil.svg";
import sacola from "../../assets/img/sacola.svg";


function HeaderIcon() {
    
    const icones = [perfil, sacola];
    return (
        <ul className="icones">
            {icones.map((icone) => (
                <li className="lista-icone"><img src={icone}></img></li>
            ))}
        </ul>


    )
}
export default HeaderIcon;
