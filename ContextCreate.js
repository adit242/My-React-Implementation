import React from 'react';

let Context = React.createContext()

let ContextProvider = Context.Provider
let ContextConsumer = Context.Consumer

export {ContextProvider , ContextConsumer }
export default Context