import './Pix.css'
import {BiSolidCopyAlt} from 'react-icons/bi'

const Pix = ({copiar, toast}) => {
    return ( 
        <div className="pix">
            <p>Chave Pix:</p>
            <span>papoparalelo@gmail.com </span>
            <BiSolidCopyAlt onClick={copiar} color='yellow'/>
            {toast}
        </div>
     );
}
 
export default Pix;