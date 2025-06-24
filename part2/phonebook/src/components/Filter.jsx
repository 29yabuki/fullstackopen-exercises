const Filter = ( {search, event }) => {
  return (
    <div>
      filter shown with
      <input name='search' search={search} onChange={event} />
    </div>
  )
}

export default Filter