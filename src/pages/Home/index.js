import logo from "../../assets/Logo.svg"
import { BiLink } from 'react-icons/bi'
import './home.css'
import Menu from "../../components/Menu/Menu";
import React from "react";
import ModalLink from "../../components/ModalLink";
import api from '../../services/api'
import ModalError from "../../components/ModalError";
import { saveLink } from '../../services/storeLinks'

export default function Home() {

    const [link, setLink] = React.useState('')
    const [showModal, setShowmodal] = React.useState(false)
    const [errorModal, setErrorModal] = React.useState(false)
    const [data, setData] = React.useState({})
    const [invalidLink, setInvalidLink] = React.useState(false)

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            saveLink('@shortLink', response.data)
            setShowmodal(true);
            setLink('')

        } catch {
            setErrorModal(true)
            setLink('')
        }
    }

    function validateLink(event) {
        let linkValue = event.target.value.toLowerCase()
        if(linkValue !== '' && linkValue.substr(0,4) !== 'http') {
            setInvalidLink(true)
        } else {
            setInvalidLink(false)
        }
    }

    function clearInput() {
        setInvalidLink(false)
        setLink('')
    }

    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Minha Logo" />
            </div>
            <h1 className="title">My Shorten Link</h1>
            <p className="description">Paste your link here 👇</p>

            <div className="link-box">
                <div className="input-area">
                    <BiLink size={24} color="#FFF"></BiLink>
                    <input
                    type="text"
                    placeholder={errorModal ? "Please type or put any valid link here" : "Type or paste your link here..."}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    onClick={clearInput}
                    onBlur={validateLink}
                    disabled={errorModal}
                    />
                </div>
                <div className={invalidLink ? "link-error" : "link-error hide"}><span>{link} </span>is not a valid link. </div>
                <button disabled={invalidLink} onClick={handleShortLink} className={!invalidLink ? "btn-link" : "btn-link disabled"}>Generate shorten link</button>
            </div>

            <Menu/>
            { showModal && <ModalLink 
            closeModal={ () => setShowmodal(false) }
            content={data}
            /> }

            { errorModal && <ModalError
            closeModalError = { () => setErrorModal(false)}
            title="Ooops, your link is blank!"
            text="Ok, I'll try again."
            />}
        </div>
    )
}