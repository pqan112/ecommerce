import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient
