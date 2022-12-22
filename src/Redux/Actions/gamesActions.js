/* primero preciso extraer los juegos con mas valoracion :  http://localhost:8080/games/ */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import BASE_URL from '../../url'

const getGame = createAsyncThunk('getGame',async()=>{
    try{
        const response = await axios.get(`${BASE_URL}/games/`)
        return response.data.res
    }catch(err){
        return{payload:"Error"}
    }
})
const filterGame = createAsyncThunk('filterGame',async(value)=>{
    let {rate} = value
    try{
        const response = await axios.get(`${BASE_URL}/games/?rate=`+rate)
            return response.data.res
    }catch(err){
        return{
            payload:"error"
        }
    }
})
const gameActions={
    getGame,
    filterGame
}
export default gameActions