import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import './blogs.css';
const Blogs = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/getposts").then((data) => {
      setPostList(data.data);
    })
  })
  return (
    <div className='blogs__container'>
      <div className="blogs__container-header">
        <h1>Our latest articles</h1>
      </div>
      <div className="blogs__container-content section__padding">
        {Array.from(postList).map((val, key) => {
          return (
            <div className='blogs__container-post' key={key}>
              <Image
              cloudName="djrgpqres"
              publicId={val.image}
              id="cloud_image" />
              <div className="blogs__container-post_caption">
                <h4>{new Date(val.date).toDateString()}</h4>
                <h2>{val.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: val.paragraph.length > 118 ? val.paragraph.substring(0, 118) + "..." : val.paragraph }} />
                <button onClick={() => {
                  navigate(`/post/${val.id}`)
                }}>Read more..</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs
