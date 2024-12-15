"use client"
import React , {useEffect , useState} from 'react'
// import { useRouter } from 'next/navigation'
import './post.css'

interface PostItem {
  _id: string;
  title: string;
}

const Posts = () => {
  // const router = useRouter()
  const [items , setItems] = useState<PostItem[]>([]) 
  
  const getItemsData = async() =>{
    try {
      const data = await fetch(`/api/postitems`)
      const res = await data.json()
      // console.log(res[0])
      //res returns an array of object..but if u use typeof res it returns an object because it itself is an object
      setItems(res)
    } 
    
    catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    getItemsData()
  }, [])
  console.log(items)
  return (
    <section id='posts' className='posts'> 
      <div className="container" data-aos="fade-up">
        {items && items.length > 0 && items.map((item : PostItem)=>(
          <div key={item._id}>
            <p>Title : {item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Posts