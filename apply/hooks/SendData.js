import axios from "axios"

function SendData(params) {
    axios.post(`http://localhost:5000/create/user`, params)

}

export default SendData