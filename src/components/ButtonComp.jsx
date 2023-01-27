import React from 'react'

export default function ButtonComp({children, className,}) {
  return (
    <div className={`${className ? className : 'btn btn-secondary'}`}> {children} </div>
  )
}
