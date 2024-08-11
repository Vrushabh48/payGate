import { useState } from "react";
import Heading from "../Components/Heading";
import Inputbox from "../Components/Inputbox";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import axios from "axios"

export default function Signin(){
    const [username,setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    return(
        <div>
            <Heading label={"Sign up"}/>
            <Inputbox label={"Username"} placeholder={"name"} onChange={(e) => {
                setusername(e.target.value)
            }}/>
            <Inputbox label={"Password"} placeholder={"name"} onChange={(e) => {
                setpassword(e.target.value);
            }}/>
            <Button onclick={async () => {
           axios.post('http://localhost:3000/api/v1/user/signin', {
            username: username,
            password: password
          })
          .then(function (response) {
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
          })
          .catch(function (error) {
            console.log(error);
          });
          }} label={"Sign in"} />
        </div>
    )
}