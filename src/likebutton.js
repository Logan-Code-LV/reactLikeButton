import React, { useState } from "react"

function Foo() {
  const [count, setCount] = useState(0)
  var name = "Likes"

  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)
  }

  if (count === 1) {
    name = "Like"
  }

  return (
    <button onClick={updateCount}>
      {count} - {name}
    </button>
  )
}

export default Foo
