import './post.css'
function Post() {
  return (
    <div className='post'>
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1669817683129-869ca3c0bd3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor sit amet.</div>
        <hr />
        <span className="postDate">10th December 2022</span>
      </div>
      <p className='postDesc'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure asperiores. Itaque non inventore pariatur? Nobis, corrupti placeat veritatis natus tempora quasi voluptates neque ab? Provident beatae architecto exercitationem ipsam!
      </p>
    </div>
  )
}

export default Post