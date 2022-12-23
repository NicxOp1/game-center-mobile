import {createReducer} from '@reduxjs/toolkit'
import gameActions from '../Actions/gamesActions'

const {getGame,filterGame,filterGameInput,getGameDetails}=gameActions
const initialState = {
    game:[],
    bestGame:[],
    gameDetails:{}
};

const gamesReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(getGame.fulfilled,(state,action)=>{
        return{
            ...state,
            game:action.payload
        }
    })
    .addCase(getGameDetails.fulfilled,(state,action)=>{
        return{
            ...state,
            gameDetails:action.payload
        }
    })
    .addCase(filterGame.fulfilled,(state,action)=>{
        // console.log(action.payload);
        return {
            ...state,
            // bestGame:action.payload.splice(0,4)
        }
    })
    .addCase(filterGameInput.fulfilled, (state, action) => {
        return{ 
            ...state,
            game:action.payload
        }
    })

})
export default gamesReducer