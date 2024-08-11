import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export default function SendMoney (){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return(
        <div>
            <div>
                <h2>Send Money</h2>
            </div>
            <div>
                {name}
            </div>
            <div>
                <label htmlFor="amount">Amount Rs.</label>
                <input type="number" id='amount' placeholder="Enter amount" onChange={(e) => {setAmount(e.target.value)}}/>
                <button onClick={() => {
                        axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }}>
                        Initiate Transfer
                    </button>
            </div>
        </div>
    )
}