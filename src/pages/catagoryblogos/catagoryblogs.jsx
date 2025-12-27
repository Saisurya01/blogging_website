import react, { useState,useEffect } from "react"
import Banner from "../../components/Banner/Banner";
import TreandingBlog from "../../components/trendingblog/treandingblog";
import blogData from "../../utils/mockdata";
import "./catagoryblogs.css"
import { useParams } from "react-router-dom";

function Catagoryblogs(){
    const [currentcatogory,setcurrentcatogory]=useState("Technology")
    const {category}=useParams();
    useEffect(() => {
        if (category) {
            setcurrentcatogory(category);
        }
        }, []);

    return(
        <>
         <Banner />
        <div className="trending-blogs " >
            <h1>{currentcatogory}</h1>
            <div className="alltreanding-blogs d-flex justify-content-evenly row-gap-2 flex-wrap">
                {
                    blogData.map(blog=> blog. category== currentcatogory&&
                      <TreandingBlog blog={blog}/>
                    )
                }
            </div>
        </div>
         
     </>
    )
}
export default Catagoryblogs;