import { createContext, useEffect, useState } from "react";
import api from '../utils/api'

export const noteListContext = createContext()

export default function noteListProvider({children}) {
  const [noteList, setNoteList] = useState([])

  useEffect(() => {
    async function loadAll() {
      const notes = await api.getNotes()
      setNoteList(notes)
    }

    loadAll()
  }, [])
  
  function createNote() {
    const newNote = {text: document.querySelector('textarea').value}

    api.createNote(newNote)
  }

  function deleteNote(deleteID) {
    api.deleteNote(deleteID)
  }

  return (
    <noteListContext.Provider value={{noteList, setNoteList, createNote, deleteNote}}>
      {children}
    </noteListContext.Provider>
  )
}