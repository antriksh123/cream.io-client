import React from 'react'

function Input({ placeholder, ringColor, widthFull, id, name, type, required, roundedDirection, value, onChangeFunc }) {
    return <input value={value} onChange={onChangeFunc} required={required} type={type} id={id} name={name} type="text" placeholder={placeholder} className={`appearance-none rounded-none relative block ${widthFull} px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-${roundedDirection}-md focus:outline-none focus:ring-${ringColor}-500 focus:border-${ringColor}-500 focus:z-10 sm:text-sm dark:bg-black dark:border-gray-600 dark:text-gray-100`} />
}

export default Input
