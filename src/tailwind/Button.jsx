import React from 'react'
import { useHistory } from 'react-router-dom'

function Button({ text, bgColor, textColor, routeTo, ringColor, widthFull, classes }) {
    const history = useHistory()
    const route = to => history.push(to)

    return <button onClick={e => route(routeTo)} className={`group relative ${widthFull} flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${bgColor}-500 hover:bg-${bgColor}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${ringColor}-500 dark:bg-${bgColor}-400 ${classes}`}>{ text }</button>
}

export default Button
