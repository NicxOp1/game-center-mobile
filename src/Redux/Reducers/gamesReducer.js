import {createReducer} from '@reduxjs/toolkit'
import gameActions from '../Actions/gamesActions'

const {getGame,filterGame,filterGameInput}=gameActions
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
        return {
            ...state,
            bestGame:action.payload.splice(0,4)
        }
    })
    .addCase(filterGameInput.fulfilled, (state, action) => {
        return{ 
            ...state,
            ...action.payload
        }
    })
})
export default gamesReducer