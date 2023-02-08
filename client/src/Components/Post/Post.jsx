import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './post.css';
import { Image } from 'cloudinary-react';

const Post = () => {
    const navigate = useNavigate()
    let { postID } = useParams();
    const [post, setPost] = useState({});
    const [postList, setPostList] = useState({});
    useEffect(() => {
        Axios.get(`https://api.edenlightservice.com/api/getPost/${postID}`).then((result) => {
            setPost({ title: result.data[0].title, paragraph: result.data[0].paragraph, image: result.data[0].image, video: result.data[0].video, date: result.data[0].date });
        })
        Axios.get("https://api.edenlightservice.com/api/getblogs").then((result) => {
            setPostList(result.data);
        })
    },[])
    return (
        <div className='single'>
            <div className='single__content section__padding'>
                <div className="post__header">
                    {post.image && <Image
                        cloudName="djrgpqres"
                        publicId={post?.image}
                        id="cloud_image" />}
                    <h4>{new Date(post.date).toDateString()}</h4>
                    <h1>{post.title}</h1>
                </div>
                <div className="post__content">
                    <p dangerouslySetInnerHTML={{ __html: post.paragraph }} />
                    <p className='single__video' dangerouslySetInnerHTML={{ __html: post.video }} />
                </div>
            </div>
            <div className="post__side">
                <h2>Other posts you may like</h2>
                {Array.from(postList).slice(0, 3).map((val, key) => {
                    return (
                        <div className='post__side-item' key={key} >
                            {val.image && <Image
                                cloudName="djrgpqres"
                                publicId={val.image}
                                id="cloud_image_side" />}
                            <h4>{val.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: val.paragraph.length > 118 ? val.paragraph.substring(0, 118) + "..." : val.paragraph }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Post
