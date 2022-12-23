/* primero preciso extraer los juegos con mas valoracion :  http://localhost:8080/games/ */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import BASE_URL from '../../url'
import apiUrl from "../../../apiUrl";

const getGame = createAsyncThunk('getGame',async()=>{
    try{
        const response = await axios.get(`${apiUrl}/games/`)
        return response.data.res
    }catch(err){
        return{payload:err.message}
    }
})
const filterGame = createAsyncThunk('filterGame',async(value)=>{
    let {rate} = value
    try{
        const response = await axios.get(`${apiUrl}/games/?rate=${rate}`)
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