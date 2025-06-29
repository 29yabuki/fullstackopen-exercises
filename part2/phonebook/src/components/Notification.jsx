const Notification = ({ add, error }) => {
  if (!add && !error) {
    return null
  }

  const notifType = error ? 'error' : 'add'
  const message = add || error

  return (
    <div className={notifType}>
      {message}
    </div>
  )
}

export default Notification