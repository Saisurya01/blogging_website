import react from "react"
import "./trendhingblog.css"
import { Link } from "react-router-dom";

function TreandingBlog({blog}){
    let img="";
    switch(blog.category){
        case "Technology":
            img="Technology.webp"
            break
        case "Programming":
            img="programming.jpg"
            break
        case "Design":
            img="Design.webp"
            break
        case "Career":
            img="Career.jpg"
            break
        case "bussiness":
            img="bussiness.png"
            break
        case "fitness":
            img="fitness.jpg"
            break
        case "food":
            img="food"
            break
        case "Lifestyle":
            img="Lifestyle.webp"
            break
        default:
            img="banner.png"
            break
    }


    return(
        <Link to={`/blogging_website/Blog/${blog.id}`} >
        <div className="card" style={{width: "18rem"}}>
        <img src={`./src/images/${img}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text text-muted">{blog.category}</p>
            <p className="card-text">{blog.previewDescription}</p> 
        </div>
        </div>
        </Link>
    )
}
export default TreandingBlog;