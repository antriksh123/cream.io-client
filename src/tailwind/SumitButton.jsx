import React from 'react'

function SubmitButton({ text, bgColor, textColor, ringColor, widthFull, disabled }) {
    return <button disabled={disabled} type="submit" className={`group relative ${widthFull} flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${bgColor}-500 hover:bg-${bgColor}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${ringColor}-500 dark:bg-${bgColor}-400`}>{ text }</button>
}

export default SubmitButton
