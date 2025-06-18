import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if ((good == 0) && (neutral == 0) && (bad == 0)) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}%</td>
        </tr>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const addFeedback = (feedback) => {
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    if (feedback === "good") {
      const updatedGood = good + 1
      setGood(updatedGood)
      setAverage((updatedGood-bad)/updatedTotal)
      setPositive((updatedGood/updatedTotal)*100)
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1)
      setAverage((good-bad) / updatedTotal);
      setPositive((good/updatedTotal)*100)
    } else if (feedback === "bad") {
      const updatedBad = bad + 1
      setBad(updatedBad)
      setAverage((good-updatedBad)/updatedTotal)
      setPositive((good/updatedTotal)*100)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => addFeedback("good")} text="good" />
      <Button onClick={() => addFeedback("neutral")} text="neutral" />
      <Button onClick={() => addFeedback("bad")} text="bad" />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App