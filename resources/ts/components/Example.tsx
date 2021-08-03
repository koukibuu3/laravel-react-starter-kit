import React from 'react'
import ReactDOM from 'react-dom'

const Example = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl">Example Component</h1>
      <p className="text-base">I&apos;m an example component!</p>
    </div>
  )
}

export default Example

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'))
}
