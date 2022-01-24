import React , {useContext} from 'react'
import { NameContext ,AgeContext } from "./App"

function UseContextHook1() {
    const Name = useContext(NameContext)
    const Age = useContext(AgeContext)
    return (
        <div>
            Name is : {Name} Age : {Age}
        </div>
    )
}

export default UseContextHook1


