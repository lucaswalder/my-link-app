import './modal-error.css'
import {BiError} from 'react-icons/bi'

export default function ModalError({closeModalError, text, title}) {
    return (
        <div className="modal-error-container">
            <button className='error-message'>
                <BiError size={32}/>
                {title}
            </button>

            <button onClick={closeModalError} className='refresh-btn'>{text}</button>
        </div>
    )
}