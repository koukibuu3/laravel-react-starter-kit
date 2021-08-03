import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl">Example</h1>
      <p className="text-base">I&apos;m an example!</p>
    </div>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'))
}
