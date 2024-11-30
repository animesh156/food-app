import axios from 'axios'

const registerRoute = "https://food-app-backend-eight.vercel.app/user/register"

const loginRoute = "https://food-app-backend-eight.vercel.app/user/login"

const register = async (userData) => {
    const response = await axios.post(registerRoute, userData)

    return response.data
}


const login = async (userData) => {
    const response = await axios.post(loginRoute,userData)

    return response.data

}



const logout = () => {
    return {};
}



const authService = {
    register,
    login,
    logout
}

export default authService
