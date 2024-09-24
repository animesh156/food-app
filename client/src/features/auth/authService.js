import axios from 'axios'

const registerRoute = "http://localhost:5000/user/register"

const loginRoute = "http://localhost:5000/user/login"

const register = async (userData) => {
    const response = await axios.post(registerRoute, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


const login = async (userData) => {
    const response = await axios.post(loginRoute,userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}



const logout = () => {
    localStorage.removeItem('user')
}



const authService = {
    register,
    login,
    logout
}

export default authService
