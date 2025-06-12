const Header = (course) => {
  return (
  <>
    <h1>{course.name}</h1>
  </>
  )
}

const Part = (part) => {
  <p>
    {part.name} {part.exercises}
  </p>
}

const Content = ({ first, second, third }) => {
  return (
    <>
      <Part part={first} />
      <Part part={second} />
      <Part part={third} />
    </>
  )
}

const Footer = ({ first, second, third }) => {
  return (
    <>
      <p>Number of exercises {first.exercises + second.exercises + third.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content first={parts[0]} second={parts[1]} third={parts[2]} />
      <Footer first={parts[0]} second={parts[1]} third={parts[2]} />
    </div>
  )
}

export default App