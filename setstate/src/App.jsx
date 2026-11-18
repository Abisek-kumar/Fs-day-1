import  { useState } from 'react';
function App() {

  const[count,setCount]= useState(0)

  return(
    <>
    <div>
      <button className="btn" onClick={() => setCount((count) => count+1)}>Increase</button>
      <button className="btn" onClick={() => setCount((count) => count-1)}>Decrease</button>
      <button className="btn" onClick={() => setCount((count) => count=0)}>reset</button>
      <h3>{count}</h3>
    </div>
    </>
  )
}

export default App;