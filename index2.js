const redux = require('redux');
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE= 'BUY_CAKE' ;
const BUY_ICECREAM = "BUY_ICECREAM"

//action : 
function buyCake() {
    return {
        type : BUY_CAKE,
        info : "Buying Cake"
    }
}

function buyIceCream() {
    return {
        type : BUY_ICECREAM,
        info : "Buying Ice Cream"
    }
}

const initialState = {
    noOfCakes : 90,
    noOfIce : 20
}
//reducer 
const CakeReducer =(state = initialState , action) =>{
    switch(action.type){   // Here action type is checked and according to it the object is returned by reducer .
        case BUY_CAKE : return{
            ...state,
            noOfCakes : state.noOfCakes - 1
        }
        default : return state 
    }
} 
const IceReducer =(state = initialState , action) =>{
    switch(action.type){   // Here action type is checked and according to it the object is returned by reducer .
        case BUY_ICECREAM : return{
            ...state,
            noOfIce : state.noOfIce - 1
        }
        default : return state 
    }
} 

// root reducer  which combines the reducers 
const rootReducer = combineReducer({
    Cake : CakeReducer,
    IceCream : IceReducer
})

const store = createStore(rootReducer)
console.log("Current State : " , store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated State : ", store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake()); //Buy Cake is action here. Dispatch tells store to buy cake . 
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream()); 
unsubscribe()
// store.dispatch(buyIceCream()); after unsubscribing no instruction is carried by dispatch to store.