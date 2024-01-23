import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogInfo: {}}

  componentDidMount() {
    this.getBlogInfo()
  }

  getBlogInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const latestData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogInfo: latestData, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogInfo} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogInfo

    return (
      <div className="blog-info-container">
        <h1 className="info-title">{title}</h1>
        <div className="author-info-container">
          <img src={avatarUrl} alt={title} className="info-avatar" />
          <p className="info-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="info-image" />
        <p className="info-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="spinner">
        {isLoading ? (
          <div data-testid="spinner">
            <Loader type="TailSpin" height={50} weight={50} color="#00bfff" />
          </div>
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
