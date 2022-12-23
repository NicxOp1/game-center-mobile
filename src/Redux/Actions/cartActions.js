import {createAction} from '@reduxjs/toolkit'


const addGame = createAction('addGame',(game)=>{
    return {
        payload: game
    }

})

const remove = createAction('removeGame',(game)=>{
    
    return{
        payload:game
    }
})
const plus = createAction('plusGame',(game)=>{
    return {
        payload:game
    }
})
const deleteProduct = createAction('deleteGame',(game)=>{
    return {
        payload:game
    }
})



const cartActions = {
    addGame,
    remove,
    plus,
    deleteProduct

}


export default cartActions