import react from "react"
import "./Regitration.css"
function Regitration(){
    return(
        <div className="reg-con d-flex flex-column row-gap-2 justify-content-center" >
            <form action="" className="reg-form">
                 <h1>registration</h1>
                <div className="form-floating mb-3">
                    <input type="name" className="form-control" id="floatingInput" placeholder="name"/>
                    <label for="floatingInput">name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="phone number"/>
                    <label for="floatingInput">phone no</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success w-100 ">register</button>
                <p>already have an account? <a className="register" href="">Login</a></p>
            </form>
        </div>
    )
}
export default Regitration;