import React, { useState } from 'react'
import './PostComponent.css'

const PostComponent = () => {
    const [counter, setCounter] = useState(1)
    const [postTitle, setPostTitle] = useState("")
    const [postData, setPostData] = useState("")
    const fetchData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
        const data =  await response.json()
        setCounter (counter+1)
        console.log(`The post id is ${counter}`);
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