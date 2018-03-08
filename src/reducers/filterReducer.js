const initialFilter = ''

const initialState = {
  filter: initialFilter
}

export const handleFilterChange = (filter) => {
  return {
    type: 'FILTER',
    filter: filter
  }
}

const filterReducer = (store = initialState, action) => {
  if (action.type==='FILTER') {
    return  { filter: action.filter }
  }
     
  return store
}

export default filterReducer