import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { noteListContext } from '../../context/noteListContext'
import './Note.css'

export default ({id, text}) => {
  const {deleteNote} = useContext(noteListContext)
  const [selected, setSelected] = useState(false)

  function markOnSquare() {
    setSelected(true)
  }
  function markOffSquare() {
    setSelected(false)
  }

  return (
    <section className="note" id={id}>
      <div className="icons">
        {selected ? 
          <FontAwesomeIcon className='icon' icon={faSquareCheck} onClick={markOffSquare}/> : 
          <FontAwesomeIcon className='icon' icon={faSquare} onClick={markOnSquare}/>
        }
        <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => {
          const deleteID = id
          deleteNote(deleteID)
        }}/>
      </div>
      <p className='text'
         style={selected ?
          {textDecoration: "line-through",
           color: "rgba(0, 0, 0, 0.5)"} :
          {textDecoration: "none"}}>{text}
      </p>
    </section>
  )
}