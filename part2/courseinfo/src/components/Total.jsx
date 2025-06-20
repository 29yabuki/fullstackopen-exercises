const Total = ({ parts }) => {
  let totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <div>
      <b>total of {totalAmount} exercises</b>
    </div>
  )
}

export default Total