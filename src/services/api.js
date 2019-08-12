import axios from 'axios'

const api = axios.create({
    baseURL: 'https://maquinista-back.herokuapp.com'
})

export default api