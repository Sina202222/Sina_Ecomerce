import React from 'react'

interface Container {
    children : React.ReactNode
}

function Container({children} : Container) {

    
  return (
    <div  className='  mt-6 mx-10  ' >
        {children}
    </div>
  )
}

export default Container