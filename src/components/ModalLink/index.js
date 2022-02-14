import './modal-link.css'
import {FiX, FiCopy} from 'react-icons/fi'
import Clipboard from 'react-clipboard.js'
import { useState, useEffect } from 'react'

export default function ModalLink( {closeModal, content} ) {

    const [messageSucess, setMessageSucess] = useState(false)

    function handleMessage() {
        setMessageSucess(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setMessageSucess(false)
        }, 1500)
    }, [messageSucess])

    return <div className="modal-container">
                <div className="modal-top">
                <h3 className="title-3">Shorten link:</h3>
                <button onClick={closeModal} className="btn-close">
                    <FiX size={25} color='#172742'/>
                </button>
                </div>

                <span className="full-link">{content.long_url}</span>

                <Clipboard onClick={handleMessage} className="short-link-box" data-clipboard-text={content.link}>
                    {content.link}
                    <FiCopy size={24} color='#fff'/>
                    { messageSucess && (
                        <div className="copy-text">
                            <p>Link copied</p>
                        </div>
                    )}
                </Clipboard>

            </div>
}