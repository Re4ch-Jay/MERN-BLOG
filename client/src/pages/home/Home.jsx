import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function Home() {
  const [posts, setPosts] = useState([])
  const location = useLocation()
  console.log(location.search)
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/post"+location.search)
      setPosts(res.data)
    }
    fetchPost()
  }, [location.search])
  return (
    <div>
      <Header  />
      <div className='home'>
          <Posts posts={posts}/>
          <Sidebar />
      </div>
    </div>
  )
}

export default Home