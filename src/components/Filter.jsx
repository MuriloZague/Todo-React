function Filter({filter, setFilter}) {
  return (
    <div className="w-full mb-3 pb-5 border-b border-gray-500 mt-3">
        <h2 className="text-2xl mb-3">Filtrar:</h2>
        <div>
            <div>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filter