const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
        name: <input name='name' value={props.name} onChange={props.change}/>
      </div>
      <div>
        number: <input name='number' value={props.number} onChange={props.change}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm