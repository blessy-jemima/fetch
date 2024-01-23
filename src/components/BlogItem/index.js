import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <li>
      <Link to={`/blogs/${id}`} className="link">
        <div className="item-container">
          <img src={imageUrl} alt={title} className="blog-image" />
          <div className="item-details">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={title} className="avatar-image" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
