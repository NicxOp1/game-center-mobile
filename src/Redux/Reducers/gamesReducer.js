import {createReducer} from '@reduxjs/toolkit'
import gameActions from '../Actions/gamesActions'

const {getGame,filterGame}=gameActions
const initialState = {
    game:[],
    bestGame:[]
};

const gamesReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(getGame.fulfilled,(state,action)=>{
        return{
            ...state,
            game:action.payload
        }
    })
    .addCase(filterGame.fulfilled,(state,action)=>{
        console.log(action.payload);
        return {
            ...state,
            bestGame:action.payload.splice(0,4)
        }
    })
})
export default gamesReducer