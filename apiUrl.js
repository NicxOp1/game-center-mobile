let apiUrl = 'https://game-center.onrender.com/'

if (process.env.NODE_ENV === 'production') {
    apiUrl =process.env.BASE_URL_HOST
}


module.exports = apiUrl