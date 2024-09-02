import React from 'react'

export default function Button({children,onClick,className}) {
  return (
    <button onClick={onClick} className={`border rounded-3xl p-3  bg-blue-500 text-white ${className}`}>
        {children}
    </button>
  )
}
