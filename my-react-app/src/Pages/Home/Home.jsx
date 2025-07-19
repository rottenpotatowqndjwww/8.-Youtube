
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import './Home.css'

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="home-container">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className="main-content">
        <div className="feed-container">
          <Feed category={category}/>
        </div>
      </div>
    </div>
  )
}

export default Home