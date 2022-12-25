import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import './singlePost.css'

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path)
      console.log(res.data)
      setPost(res.data)
    }
    getPost();
  }, [])

  return (

    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        )}
        
        <h1 className="singlePostTitle">
        {post.title}
        <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
        </div>
      </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: 
            <Link to={`/?username=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='singlePostDesc'>
          {post.desc}
        </p>
      </div>
    
    </div>
  )
}

export default SinglePost