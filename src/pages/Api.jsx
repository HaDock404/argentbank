import axios from "axios"

export let DataUser = {}
export let nameUser = '';
export const userData = {
    token: ""
}

export function Token(response) {
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
                return nameUser = response.data.body.firstName
            })
            .catch((err) => console.log(err));
    
}

export default PostToken