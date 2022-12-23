import {createReducer} from '@reduxjs/toolkit'
import cartActions from '../Actions/cartActions';

const {addGame,plus,remove,deleteProduct} = cartActions
const initialState = {
    products: [
        {
        name: "assasin",
        price:40,
        _id:1,
        photo:["https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305"]
    },{
        name: "Pokemon",
        price:30,
        _id:2,
        photo:["https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305"]

    },{
        name: "killl",
        price:20,
        _id:3,
        photo:["https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305"]

    }
],
    newProducts: []
};


const cartReducer = createReducer(initialState,(builder) =>{
    builder
        .addCase(addGame,(state,action)=>{

            let newProduct = state.products.concat(action.payload)
            let sortedProducts = newProduct.sort(
                (p1, p2) => (p1.name < p2.name) ? 1 : (p1.name > p2.name) ? -1 : 0)

            return {
                ...state,
                products: sortedProducts
            }
        })
        .addCase(plus,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)
            let arrayProducts = state.products.filter(e => e.name === action.payload.name)
            
            if (arrayProducts.length > 0) {
                
                arrayProducts[0] = {...arrayProducts[0],
                    unity: arrayProducts[0].unity + 1
                }

                arrayState = arrayState.concat(arrayProducts[0])
                let sortedProducts = arrayState.sort(
                    (p1, p2) => (p1.name < p2.name) ? 1 : (p1.name > p2.name) ? -1 : 0)

                return{
                    ...state,
                    products:sortedProducts
                }
            }else{
                console.log("no anda");
            }
            
        })
        .addCase(remove,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)
            let arrayProducts = state.products.filter(e => e.name === action.payload.name)
            
            if (arrayProducts.length > 0) {
                
                arrayProducts[0] = {...arrayProducts[0],
                    unity: arrayProducts[0].unity - 1
                }
                if (arrayProducts[0].unity === 0) {
                    return{
                        ...state,
                        products:arrayState
                    }
                }
                arrayState = arrayState.concat(arrayProducts[0])
                let sortedProducts = arrayState.sort(
                    (p1, p2) => (p1.name < p2.name) ? 1 : (p1.name > p2.name) ? -1 : 0)

                return{
                    ...state,
                    products:sortedProducts
                }
            }else{
                console.log("no anda");
            }
        })
        .addCase(deleteProduct,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)

            return{
                ...state,
                products: arrayState
            }
        })
})

export default cartReducer