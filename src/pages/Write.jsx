import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate} from 'react-router-dom';

import axios from "axios"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';
const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.description || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat ||'');
const navigate = useNavigate()

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      // console.log(res.data)
      return res.date
    } catch(err){
      console.log(err)
    }
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
   const imgUrl = await upload()

   try{
    state ? await axios.put(`/posts/ ${state.id}`, {title,description:value,cat,img:file ? imgUrl : ""}) :
    await axios.put(`/posts/ ${state.id}`, {title,description:value,cat,img:file ? imgUrl : "",date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')});
  navigate("/")
  }
   catch(err){
    console.log(err)
   }
  }
  console.log(value)
  return (
    <div className='write_add'>
      <div className="content">
        <input type="text" placeholder='text' value={title} onChange={e => setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} /></div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input type="file" name="" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file"> Upload  Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="category">
            <input type="radio" checked={cat === 'art'} name="cat" id="art"  onChange={e => setCat(e.target.value)} value="art" />
            <label htmlFor="art"> Art</label>
          </div>

          <div className="category">
            <input type="radio" checked={cat === 'science'} name="cat" id="Science"  onChange={e => setCat(e.target.value)} value="Science" />
            <label htmlFor="Science"> Science</label>
          </div>

          <div className="category">
            <input type="radio" checked={cat === 'technology'} name="cat" id="technology"  onChange={e => setCat(e.target.value)} value="technology" />
            <label htmlFor="technology"> Technology</label>
          </div>

          <div className="category">
            <input type="radio" checked={cat === 'cinema'} name="cat" id="cinema"  onChange={e => setCat(e.target.value)} value="cinema" />
            <label htmlFor="cinema"> Cinema</label>
          </div>

          <div className="category">
            <input type="radio" checked={cat === 'design'} name="cat" id="design"  onChange={e => setCat(e.target.value)} value="design" />
            <label htmlFor="design"> Design</label>
          </div>

          <div className="category">
            <input type="radio" checked={cat === 'food'} name="cat" id="food"  onChange={e => setCat(e.target.values)} value="food" />
            <label htmlFor="food"> Food</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Write
