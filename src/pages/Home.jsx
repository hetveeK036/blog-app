import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import  axios  from 'axios';
// import Graps from "../asset/graps.jpg"
// import Mengo from "../asset/mengoo.jpg"
// import Orange from "../asset/orange.jpg"
// import Strawberry from "../asset/strawberry.jpg"
// import Kivi from "../asset/kivi.jpg"
// import Dadam from "../asset/dadam.jpg"
const Home = () => {

    const [posts, setPosts] = useState([])

    const cat = useLocation().search
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`./posts ${cat}`)
                setPosts(res.data)
            }
            catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat])
    // const posts = [
    //     {
    //         id: 1,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Graps,
    //     },
    //     {
    //         id: 2,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Orange,
    //     },
    //     {
    //         id: 3,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Mengo
    //     },
    //     {
    //         id: 4,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Strawberry,
    //     },
    //     {
    //         id: 5,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Kivi,
    //     }, 
    //     {
    //         id: 6,
    //         title:" Lorem ipsum dolor sit, amet consectetur ",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //         img:Dadam,
    //     },
        
    // ];

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
  return (
    <div className='home'>
        <div className="posts">
{posts.map(post => (
    <div className="post" key= {post.id}>
        <div className="img">
            <img src={`./upload/${post.img}`} alt="" />
        </div>
        <div className="content">
            <Link className= "link" to= {`/post/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
            <p>{getText(post.description)}</p>
            <button>Read More</button>
        </div>
    </div>
))}
        </div>
    </div>
  )
}

export default Home
