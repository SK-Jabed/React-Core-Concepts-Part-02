import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert("Button Clicked")
  }

  const handleClick2 = () => {
    alert("Second Button Clicked")
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Users></Users>

      <Friends></Friends>

      <Counter></Counter>

      <Team></Team>

      {/* <button onclick="handleClick()">Click Here</button> */}

      <button onClick={handleClick}>Click Here</button>
      <br/> <br/>
      <button onClick={handleClick2}>Click Me</button> <br/> <br/>    
      <button onClick={() => {alert("Third Button Clicked")}}>Third Button</button> <br/> <br/>
      <button onClick={() => addToFive(5)}>Forth Button</button>  
    </>
  )
}


export default App
