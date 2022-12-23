/* primero preciso extraer los juegos con mas valoracion :  http://localhost:8080/games/ */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import BASE_URL from '../../url'

const getGame = createAsyncThunk('getGame',async()=>{
    try{
        const response = await axios.get('https://game-center.onrender.com/games/')
        return response.data.res
    }catch(err){
        return{payload:"Error getting all games"}
    }
})
const filterGame = createAsyncThunk('filterGame',async(value)=>{
    let {rate} = value
    try{
        const response = await axios.get(`https://game-center.onrender.com/games/?rate=`+rate)
            return response.data.res
    }catch(err){
        return{
            payload:"error"
        }
    }
})
const filterGameInput = createAsyncThunk('filterGameInput', async ({ category, value, order }) => {
    
    try {
        const response = await axios.get(`https://game-center.onrender.com/games?${category}${value}${order}`)
        return { game: response.data.res }
    } catch (err) {
        return {
            payload: "error"
        }
    }
})
const gameActions={
    getGame,
    filterGame,
    filterGameInput
}
export default gameActions