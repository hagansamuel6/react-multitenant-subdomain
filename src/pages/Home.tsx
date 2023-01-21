import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  let navigate = useNavigate()

  return (
    <div>Home is home

      <button onClick={() => navigate('/yui')}>go to new page</button>
    </div>
  )
}

export default Home