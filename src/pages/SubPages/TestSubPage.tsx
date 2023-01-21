import React from 'react'
import { useNavigate } from 'react-router-dom'

function TestSubPage() {
  let navigate = useNavigate()
  return (
    <div>TestSubPage

      <button onClick={() => navigate('/')}>go to new page</button>
    </div>
  )
}

export default TestSubPage