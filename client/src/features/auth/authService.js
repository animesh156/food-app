import axios from 'axios'

const registerRoute = "https://food-app-backend-eight.vercel.app/user/register"

const loginRoute = "https://food-app-backend-eight.vercel.app/user/login"

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
