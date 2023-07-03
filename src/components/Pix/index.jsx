import './Pix.css'
import {BiSolidCopyAlt} from 'react-icons/bi'

const Pix = ({copiar, toast}) => {
    return ( 
        <div className="pix">
            <p>Chave Pix:</p>
            <span>papoparalelo@gmail.com </span>
            <BiSolidCopyAlt className='click' onClick={copiar} color='#DEFF1C' size='1.5rem'/>
            {toast}
        </div>
     );
}
 
export default Pix;