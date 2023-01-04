import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './blogs.css';
const Blogs = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get("http://api.edenlightservice.com/api/getposts").then((data) => {
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
              <img src={require(`../../assets/uploads/${val.image}`)} alt="placeholder" />
              <div className="blogs__container-post_caption">
                <h4>{new Date(val.date).toDateString()}</h4>
                <h2>{val.title}</h2>
                <p dangerouslySetInnerHTML={{__html: val.paragraph.length > 118 ? val.paragraph.substring(0,118) + "..." : val.paragraph}} />
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
