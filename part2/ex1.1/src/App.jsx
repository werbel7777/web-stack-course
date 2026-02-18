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
      <Header 
      ziemniak = {course}
      />
      <Content
      parts = {parts}
      />
      <Total
      exercises1 = {parts[0].exercises}
      exercises2 = {parts[1].exercises}
      exercises3 = {parts[2].exercises}
      />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.ziemniak}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part 
        part ={props.parts[0].name}
        exercises = {props.parts[0].exercises}
      />
      <Part 
        part ={props.parts[1].name}
        exercises = {props.parts[1].exercises}
      />
       <Part 
        part ={props.parts[2].name}
        exercises = {props.parts[2].exercises}
      />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
export default App
