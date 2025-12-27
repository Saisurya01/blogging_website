import react from "react"
import "./Banner.css"
function Banner(){
    return(
        <div className="banerdiv">
            <div className="overlay">
                <h1 className="banner-title">welcome to Our Blogs Website</h1>
            </div>
        <img src="./src/images/banner.png" alt=""  />
        </div>
    )
}
export default Banner;