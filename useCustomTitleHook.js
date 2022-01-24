import {useEffect} from 'react'

function CustomTitleHook(count) {
    useEffect(() => {
        document.title = `Clicked ${count} times.`
    }, [count])
}

export default CustomTitleHook
