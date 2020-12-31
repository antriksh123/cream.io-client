import React from 'react'

function ErrorAlert({ text }) {
    return (
        <div className="bg-red-600 dark:bg-red-500">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-red-700 text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </span>
                    <p className="ml-3 font-medium text-white">
                        <span>
                            {text}
                        </span>
                    </p>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button type="button" className="-mr-1 flex p-2 rounded-md hover:ring-red focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorAlert
