import Hello from './Hello'
function App() {
  const date = new Date();
  const fullyear = date.getFullYear();

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

      <h1>Hello World! -React {fullyear}</h1>

      {/* to access variable we use {variableName} as above but we cannot write js code inside that braces, only evaulated expression is allowed meaning that only variable name is allowed and that variable should hold the output. Why js code not supported? because at the end jsx gets parsed into js object and js object doesn't support js code as its property, it can only support variable */}

      <Hello />

      {/* above is the function call to function Hello */}

    </>
  )
}

export default App
