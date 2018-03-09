import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const getId = () => (100000*Math.random()).toFixed(0)

const createNew = async (content) => {
  const response = await axios.post(url, { id: getId(), content: content, votes: 0 })
  return response.data
}

const vote = async (anecdote) => {
  const response = await axios.put(url+'/'+ anecdote.id, anecdote) 
  return response.status
}

export default {
  getAll, createNew, vote
}