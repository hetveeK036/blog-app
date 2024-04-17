import React, { useEffect, useState } from 'react'
import axios  from 'axios';

// import Graps from "../asset/graps.jpg"
// import Mengo from "../asset/mengoo.jpg"
// import Orange from "../asset/orange.jpg"
// import Strawberry from "../asset/strawberry.jpg"
// import Kivi from "../asset/kivi.jpg"
// import Dadam from "../asset/dadam.jpg"

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([])

      useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`./posts/?cat=${cat}`)
                setPosts(res.data)
            }
            catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);
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
    //     // {
    //     //     id: 5,
    //     //     title:" Lorem ipsum dolor sit, amet consectetur ",
    //     //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //     //     img:Kivi,
    //     // }, 
    //     // {
    //     //     id: 6,
    //     //     title:" Lorem ipsum dolor sit, amet consectetur ",
    //     //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, excepturi fuga magnam error ratione repellat ea totam voluptatem dicta ullam.",
    //     //     img:Dadam,
    //     // },
        
    // ];
  return (
    <div className='menu'>
        <h1>Other post you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img  src={`../upload/${posts?.img}`}  alt="" />
                <h2>{post.title}</h2>
                <button> Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
