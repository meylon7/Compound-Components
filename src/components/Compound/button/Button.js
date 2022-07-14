import React, {useState} from 'react'

export function Button({children}){
    const [active, setActive] = useState(false)
    const click = () => setActive(true)

    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {active, click})
    })
}

export function InitButton({active, click, children}){
    return !active ? (
        <button style={{ color: '#474747' }} onClick={click}>
            {children}
        </button>
    ): null;
}

export function ActiveButton({active, click, children}){
    return !active ? (
        <button style={{ color: '#ffffff', backgroundColor: '#000000' }} onClick={click}>
            {children}
        </button>
    ): null;
}