import React from 'react'

function Heading({children, className}) {
  return (
    <h3 className={`text-2xl font-serif italic border-b mb-3 pb-3 ${className}`}>
        {children}
    </h3>
  )
}

export default Heading