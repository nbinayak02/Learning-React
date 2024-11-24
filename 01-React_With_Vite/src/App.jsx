import Hello from './Hello'
function App() {
  

  return (
    // we cannot return multiple elements like this 
  //  <h1>Hello World! React</h1>
  //   <Hello />

  // we can return by surrounding with div 
  // <div>
  //   <h1>Hello World! -React</h1>
  //   <Hello/>
  // </div>

  // to make it simple we can just do like this 
  <>
  <h1>Hello World! -React</h1>
  <Hello/> 
  {/* this is the function call to function Hello */}
  </>
  )
}

export default App
