import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { BiUnlink } from 'react-icons/bi'
import { BsPlusCircleFill } from 'react-icons/bs'
import './links.css'
import { getSavedLinks, deleteLink } from '../../services/storeLinks'
import ModalLink from "../../components/ModalLink";


function Links() {

  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    async function getLinks() {
      const result = await getSavedLinks('@shortLink')

      if(result.length === 0) {
        setEmptyList(true)
      }

      setMyLinks(result)
    }
    getLinks()
  }, [emptyList])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id)
    if(result.length === 0) {
      setEmptyList(true)
    }
    setMyLinks(result)
  }

  return <div className="container-links">
    <div className="top">
    <Link to="/">
      <FiArrowLeft size={71} color="#FFF"/>
    </Link>
    <h1 className="title-2">My saved links</h1>
    </div>
    { emptyList && (
      <div className="empty-list">
        <BiUnlink size={48} color="#fff" />
        <span className="empty-text"> You have no saved links!</span>
        <Link to="/">
          <button className="empty-btn">Click here to add <BsPlusCircleFill size={18} color="#172742" /></button>
        </Link>
      </div>
    ) }
    { myLinks.map( link => (
        <div key={link.id} className="my-link">
        <button className="active-link" onClick={ () => handleOpenLink(link) }>
          <FiLink size={24} color="#fff"/>
          {link.long_url}
        </button>
        <button onClick={() => handleDelete(link.id)} className="delete-link">
        <FiTrash  title="Delete Link" size={24} stroke="#fff"/>
        </button>
    </div>
    ) )}

    {showModal && (
      <ModalLink
        closeModal={ () => setShowModal(false) }
        content={data}
      />
    ) }

  </div>
}

export default Links;
