import react from "react"
import "./login.css"
function Login(){
    return(
        <div className="login-con d-flex flex-column row-gap-3 justify-content-center" >
            <form action="" className="login-form">
                 <h1>Login</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <a href="" className="f-pass">forget password?</a>
                <button className="btn btn-success w-100 ">Login</button>
                <p>don't have an account yet? <a className="register" href="">register</a></p>
            </form>
        </div>
    )
}
export default Login;