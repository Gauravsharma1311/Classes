import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate();

const handleBack=(e:any)=>{
  e.preventDefault();
  history('/')
}
  return (
    <div>
      <div>
        <h2 className='bg-warning'>🙏Welcome User🙏</h2>
      </div>
      <div>
        <Button onClick={handleBack}>Back</Button>
      </div>
    </div>
  )
}

export default Home
