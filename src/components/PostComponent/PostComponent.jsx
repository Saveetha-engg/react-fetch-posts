import React from 'react'
import './PostComponent.css'

const PostComponent = () => {
  return (
    <React.Fragment>
        <section className='post-container'>
            <p className='post-title'>"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"</p>
            <p className='post-data'>qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo</p>
        </section>
        <div className='button-container'>
            <button className='get-post-button'>Get Post!</button>
        </div>
        </React.Fragment>
  )
}

export default PostComponent