import React, { FC, useState, useEffect} from 'react'

const View: FC = () => {
  const [count, setCount] = useState(10)

  function addCount() {
    return setCount(count + 4)
  }

  useEffect(() => {
    setCount(22)
  }, [])
  return (
    <div className="page-container" onClick={addCount}>
      demo
    </div>
  )
}

export default View
