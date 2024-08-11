import axios from "axios";
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState } from "react";

export default function Dashboard () {
    const [value,setvalue] = useState(0);

     axios.get("http://localhost:3000/api/v1/account/balance", {headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }})
  .then((response => {
    setvalue(response.data);
    console.log(response.data);
  }))
  .catch((error) => {
    console.log(error);
  });

    return <div>
        <div className="m-8">
            <Balance value={value} />
            <Users />
        </div>
    </div>
}