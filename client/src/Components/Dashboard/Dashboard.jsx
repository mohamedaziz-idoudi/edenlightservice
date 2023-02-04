import React, { useState, useEffect } from 'react'
import './dashboard.css'
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Axios from 'axios';
import axios from 'axios';
import logo from '../../assets/logo.png'
import Table from 'react-bootstrap/Table';



const Dashboard = ({ setAuth }) => {
  const [vmessage, setVmessage] = useState(false);
  const [vblog, setVblog] = useState(false);
  const [view, setView] = useState('');
  const [customerList, setCustomerList] = useState({});
  const [businessList, setBusinessList] = useState({});
  const [text, setText] = useState('');
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [vAfter, setVafter] = useState(false);
  const [image, setImage] = useState();
  const uploadImage = (e) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "eden_upload_image");

    Axios.post("https://api.cloudinary.com/v1_1/djrgpqres/image/upload", formData).then(async (response) => {
      console.log(response);
      await e.preventDefault();
      await e.stopPropagation();
      setVblog(false);
      setVafter(true);
      axios.post("http://localhost:3001/api/post", { title: title, paragraph: text, image: response.data.secure_url, video: video });
    })
  }

  const refreshCustomer = () => {
    Axios.get("http://localhost:3001/api/get_cus").then((data) => {
      setCustomerList(data.data);
    })
  }
  const refreshBusiness = () => {
    Axios.get("http://localhost:3001/api/get_bus").then((data) => {
      setBusinessList(data.data);

    })
  }
  useEffect((e) => {
    setAuth(true);
    Axios.get("http://localhost:3001/api/get_cus").then((data) => {
      setCustomerList(data.data);
    });
    Axios.get("http://localhost:3001/api/get_bus").then((data) => {
      setBusinessList(data.data);
    })
    if (e && e.preventDefault()) { e.preventDefault() }
  }, [setAuth])
  return (
    <div className='eden__dashboard'>
      <div className="eden__dashboard-sidebar">
        <img src={logo} alt="LOGO" />
        <ul className='nav-menu-items'>
          <li>
            <div onClick={() => {
              setVmessage(true);
              setVblog(false);
              setVafter(false);
              setView('');
            }} className="nav_line">
              <FiIcons.FiMessageSquare />
              <h5>Messages</h5>
            </div>
          </li>
          <li>
            <div className="nav_line" onClick={() => {
              setVblog(true);
              setVmessage(false);
              setVafter(false);
            }}>
              <FaIcons.FaBloggerB />
              <h5>Create a blog</h5>
            </div>
          </li>
        </ul>
      </div>
      {vmessage && (
        <div className="eden__dashboard-content">
          <div className="eden__dashboard-content_select">
            <label>Select the message category</label>
            <select name="messages_type" id='messages_type' onClick={(e) => {
              setView(e.target.value);

            }}>
              <option value="">---Please Select---</option>
              <option value="customer">Customer</option>
              <option value="business">Business</option>
            </select>
          </div>
          {view === 'customer' && (
            <>
              <div className='eden__dashboard-content_customer'>
                <Table responsive="sm" striped bordered hover size="sm" maxheight='300px'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Type</th>
                      <th>Stars</th>
                      <th>Resort</th>
                      <th>Nb Rooms</th>
                      <th>Nb Persons</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Array.from(customerList).map((val, key) => {
                        return (
                          <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                            <td>{val.type_lodging}</td>
                            <td>{val.nb_stars}</td>
                            <td>{val.resort}</td>
                            <td>{val.nb_rooms}</td>
                            <td>{val.nb_persons}</td>
                            <td>{val.message}</td>
                          </tr>
                        )
                      }
                      )
                    }
                  </tbody>

                </Table>

              </div>
              <div className='form__button'>
                <button onClick={refreshCustomer}>Refresh</button>
              </div>
            </>
          )}
          {view === 'business' && (
            <>
              <div className='eden__dashboard-content_customer'>
                <Table striped bordered hover size="sm" maxheight='300px'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Personal Name</th>
                      <th>Personal Email</th>
                      <th>Personal Phone</th>
                      <th>Business Name</th>
                      <th>Business Email</th>
                      <th>Business Phone</th>
                      <th>Business Description</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    Array.from(businessList).map((val, key) => {
                      return (
                          <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.personal_name}</td>
                            <td>{val.personal_email}</td>
                            <td>{val.personal_phone}</td>
                            <td>{val.business_name}</td>
                            <td>{val.business_email}</td>
                            <td>{val.business_phone}</td>
                            <td>{val.business_desc}</td>
                            <td>{val.message}</td>
                          </tr>
                      )
                    }
                    )
                  }
                  </tbody>

                </Table>
              </div>
              <div className='form__button'>
                <button onClick={refreshBusiness}>Refresh</button>
              </div>
            </>
          )}
        </div>
      )}
      {vblog && (
        <div className="eden__dashboard-content">
          <label>Insert an image</label>
          <input type="file" name='file' onChange={(e) => {
            setImage(e.target.files[0]);
          }} />
          <label >Insert link to your video (Optional)</label>
          <input type="link" onChange={(e) => {
            setVideo(e.target.value);
          }} />
          <label>Title: </label>
          <input type="text" onChange={(e) => {
            setTitle(e.target.value);
          }} />
          <label>BLOG: </label>
          <ReactQuill theme="snow" value={text} onChange={setText} className='blog_area' />
          <div className='form__button'>
            <button onClick={uploadImage}>Submit</button>
          </div>
        </div>
      )}
      {vAfter && (
        <div className="eden__dashboard-content">
          <h1>You have submitted the blog successfuly! </h1>
        </div>
      )}
    </div>
  )
}

export default Dashboard
