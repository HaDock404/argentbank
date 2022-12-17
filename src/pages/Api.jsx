import axios from "axios"

export let DataUser = {}
export const userData = {
    token: localStorage.getItem('Token')
}

export function Token(response) {
    localStorage.setItem('Token', response.data.body.token)
    return userData.token = response.data.body.token
    
}

function PostToken(token) {
    
    const user = {};
    const headers = {
        accept: "application/json",
        Authorization: "Bearer " + token
      }

    return axios.post("http://localhost:3001/api/v1/user/profile", user,
            {
                headers
            })
            .then(function(response) {
                return DataUser = response
            })
            .catch((err) => console.log(err));
    
}

export default PostToken