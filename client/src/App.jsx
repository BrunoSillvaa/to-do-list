import NoteListProvider from './context/noteListContext'
import ToDoList from './components/ToDoList/ToDoList'
import './App.css'

function App() {

  return (
    <div className="container">
      <NoteListProvider>
        <ToDoList />
      </NoteListProvider>
    </div>
  )
}

export default App
