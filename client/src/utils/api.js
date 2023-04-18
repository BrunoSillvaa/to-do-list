async function basicFetch() {
  const response = await fetch(`http://localhost:5000/getNotes`)
  const data = await response.json()
  return data
}

async function basicPost(note) {
  const response = await fetch(`http://localhost:5000/createNote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })

  if (response.status === 204) {
    console.log('Nota adicionada com sucesso!')
  } else {
    throw new Error('Erro ao criar a nota')
  }
}

async function basicDelete(id) {
  const response = await fetch(`http://localhost:5000/deleteNote/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  })

  if (response.status === 204) {
    console.log('Nota removida com sucesso!')
  } else {
    throw new Error('Erro ao excluir a nota')
  }
}

export default {
  getNotes: async () => {
    const data = await basicFetch()
    return data
  },
  createNote: async (note) => {
    await basicPost(note)
  },
  deleteNote: async (id) => {
    await basicDelete(id)
  }
}