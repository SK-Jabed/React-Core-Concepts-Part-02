import './App.css'

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
      {/* <button onclick="handleClick()">Click Here</button> */}
      <button onClick={handleClick}>Click Here</button>  <br></br>   <br></br>
      <button onClick={handleClick2}>Click Me</button> <br></br> <br></br>    
      <button onClick={() => {alert("Third Button Clicked")}}>Third Button</button>  <br></br> <br></br> 
      <button onClick={() => addToFive(5)}>Forth Button</button>  
    </>
  )
}

export default App
