import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import blogData from "../../utils/mockdata";
import { useEffect, useState } from "react";

function Dedecateblog() {
  const[blogid,setblogid]=useState(1);
  const [blog,setblog]=useState("");
  let bolgdisplay=blogData.filter(blog=>blog.id==blogid)[0]
  const { id }=useParams();
    useEffect(()=>{
        if(id){
            setblogid(id)
        }
    },[])

  return (
    <>
      <Banner/>
      <h1>{bolgdisplay.title}</h1>
      <h6>{bolgdisplay.category}</h6>
      <p>{bolgdisplay.content}</p>
    </>
  );
}

export default Dedecateblog;
