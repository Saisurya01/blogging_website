import react from "react"
import Banner from "../../components/Banner/Banner";
import TreandingBlog from "../../components/trendingblog/treandingblog";
import blogData from "../../utils/mockdata";
import { Link } from "react-router-dom";
import "./Home.css"
function Home(){
    return(
        <>
         <Banner />
         <div className="my-2">
            <h1>Read Blogs From</h1>
            <div className=" d-flex justify-content-evenly row-gap-2 flex-wrap">
                <Link to={"/blogging_website/Blogs/Food"}>
                <div className="card" style={{width: "18rem", height:"300px"}}>
               <img src="./src/images/food.jpg" className="card-img-top" alt="Food" />
                <div className="card-body">
                    <h5 className="card-title">Food</h5>
                </div>
                </div>
                </Link>
                <Link to={"/blogging_website/Blogs/Fitness"}>
                <div className="card" style={{width: "18rem", height:"300px"}}>
                <img src="./src/images/fitness.jpg" className="card-img-top" alt="Fitness" />
                
                <div className="card-body">
                    <h5 className="card-title">Fitness</h5>
                </div>
                </div>
                </Link>
                <Link to={"/blogging_website/Blogs/Technology"}>
                <div className="card" style={{width: "18rem", height:"300px"}}>
              <img src="./src/images/Technology.webp" className="card-img-top" alt="Technology" />
                <div className="card-body">
                    <h5 className="card-title">Technology</h5>
                </div>
                </div>
                </Link>
                <Link to={"/blogging_website/Blogs//Design"}>
                <div className="card" style={{width: "18rem", height:"300px"}}>
               <img src="./src/images/Design.webp" className="card-img-top" alt="Design" />
                <div className="card-body">
                    <h5 className="card-title">Design</h5>
                </div>
                </div>
                </Link>
            </div>
         </div>
        <br />
        <div className="trending-blogs " >
            <h1>Trending Blogs</h1>
            <div className="alltreanding-blogs d-flex justify-content-evenly row-gap-2 flex-wrap">
                {
                    blogData.map(blog=>
                      <TreandingBlog blog={blog}/>
                    )
                }
            </div>
        </div>
         
     </>
    )
}
export default Home;