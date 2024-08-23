import { useContext, useState } from "react"

import UserContext from "../context/UserContext"


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    function SubmitHandler(e) {
        e.preventDefault()
        setUser({username,password})        //sending 
    }

    function userHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }


    return (
        <div>
            <h2>login</h2>
            <input
                type="text"
                placeholder="name"
                value={username}
                onChange={userHandler} />

            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={passwordHandler}

            />

            <button onClick={SubmitHandler}>Sbmit</button>

        </div>
    )
}

export default Login