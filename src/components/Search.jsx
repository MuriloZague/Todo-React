const Search = ({search, setSearch}) => {
  return (
    <div className='w-full pt-4 border-t border-gray-500 mt-3'>
        <h1 className='text-2xl mb-3'>Pesquisar:</h1>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          type="text" 
          placeholder='Digite para pesquisar...' 
          className='w-full border rounded-md border-gray-300 inputa'/>
      </div>
  )
}

export default Search