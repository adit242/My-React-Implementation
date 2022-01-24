const redux = require('redux')
const ReduxThunk = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware



const fetch_user_request = "fetch_user_request"
const  fetch_user_success = 'fetch_user_success' 
const  fetch_error = 'fetch_error'

// actions
const fetchUserReq = () =>{
    return {
        type : fetch_user_request   // types are required to identify the switch statement when it is dispatch(action creator)
    }
}

const fetchUserSucc = (users) =>{
    return {
        type : fetch_user_success ,
        payload : users
    }
}

const fetchError = (error) =>{
    return {
        type : fetch_error,
        payload : error
    }
}

const initialState = {
    loading : true,
    users : [],
    error : ''
}

// reducer 
const reducer = (state = initialState , action) => {
    switch(action.type){
        case fetch_user_request : return {
            ...state ,
            loading : true 
        }
        
        case fetch_user_success : return{
            ...state ,
            loading : false , 
            users : action.payload,
            error : ''
        }

        case fetch_error : return {
            ...state ,
            loading : false ,
            users : [] ,
            error : action.payload
        }
    }
}

// action creator 

const FetchUsers = () =>{
    return function(dispatch){
        // get users from API
        dispatch(fetchUserReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response => { 
            // if response is came then assign the users from api to users array
            const users = Response.data.map(user => user.id)
            dispatch(fetchUserSucc(users))
        })
        .catch(error => {
            // If error occured 
            dispatch(fetchError(error.message))
        })
    }
}

const store = createStore(reducer , applyMiddleware(ReduxThunk))
store.subscribe(()=>{console.log("Current State : ",store.getState())})
store.dispatch(FetchUsers())