import React, { useState } from 'react'
import './PostComponent.css'

const PostComponent = () => {
    const [postTitle, setPostTitle] = useState("")
    const [postData, setPostData] = useState("")
    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data =  await response.json()
        setPostTitle(data.title)
        setPostData(data.body)
    }
  return (
    <React.Fragment>
        <section className='post-container'>
            <p className='post-title'>{postTitle}</p>
            <p className='post-data'>{postData}</p>
        </section>
        <div className='button-container'>
            <button className='get-post-button' onClick={fetchData}>Get Post!</button>
        </div>
        </React.Fragment>
  )
}

export default PostComponent