import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import Menu from '../component/Menu';

import axios from 'axios';
import moment from "moment";
import Edit from "../asset/edit.png"
import Delete from "../asset/delete.png"

// import Mengo from "../asset/mengoo.jpg"

const Single = () => {

  const [posts, setPosts] = useState({})
//1.47 change in database
const location = useLocation()
const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await axios.get(`./posts ${postId}`)
            setPosts(res.data)
        }
        catch(err){
            console.log(err)
        }
    };
    fetchData();
}, [postId]);

const handleDelete = async () =>{
  try{
  await axios.delete(`./posts ${postId}`);
  navigate("/")
}
catch(err){
    console.log(err)
}
}
const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}
  return (
    <div className='single'>
      <div className="content">  
      <img src={`../upload/${posts?.img}`} alt="" />
      <div className="user">
        {posts.userImg && <img src={posts.userImg} alt="" />}
        <div className="info">
            <span> {posts.username}</span>
            <p>Posted {moment(posts.date).fromNow()}</p>
        </div>
      { currentUser.username === posts.username && (<div className="edit">
            <Link to={`/write?edit = 2`} state={posts}>
            <img src={Edit} alt="" />
            </Link>
            <img onClick = {handleDelete} src={Delete} alt="" />
        </div>)}
      </div>
      <h1>{posts.title} </h1>
      {getText(posts.description)}
      </div>
       <Menu cat = {posts.cat}/>
    </div>
  )
}

export default Single
