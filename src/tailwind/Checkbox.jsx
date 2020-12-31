import React from 'react'

function Checkbox({ text, id, name }) {
    return (
        <div class="flex items-center">
            <input id={id} name={name} type="checkbox" class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded dark:text-red-400" />
            <label for={id} class="ml-2 block text-sm text-gray-900 dark:text-gray-200">
            { text }
            </label>
        </div>
    )
}

export default Checkbox
