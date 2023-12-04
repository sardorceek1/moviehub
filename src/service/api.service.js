import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '20',
    },
    headers: {
        'X-RapidAPI-Key': '0465e6eee9mshf1dcc763d7b09e3p155f24jsnac503a90450e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
}
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}