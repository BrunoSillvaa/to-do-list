import React, { useContext, useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { noteListContext } from '../../context/noteListContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Note from '../Note/Note';
import './ToDoList.css'

export default () => {
  const {noteList, createNote} = useContext(noteListContext)

  return (
    <main>
      <h1 className='title'>To Do List</h1>

      <div className="textarea-container">
        <textarea rows={3} type="text" placeholder="Type your text here..."/>
        <FontAwesomeIcon icon={faPlus} className="icon" onClick={createNote}/>
      </div>

      <hr className='line'/>

      <div className="notes-container">
        <TransitionGroup>
          {noteList.map((note, index) => {
            return (
            <CSSTransition
             key={index}
             timeout={500}
             classNames={"note"}
            >
              <Note id={note.id} text={note.text}/>
            </CSSTransition> )
          })}
        </TransitionGroup>
      </div>
    </main>
  )
}