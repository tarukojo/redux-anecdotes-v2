import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, { content })
  return response.data
}

const vote = async (id) => {
  const response = await axios.put(url, { id }) 
  return response.status
}

export default {
  getAll, createNew, vote
}