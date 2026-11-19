import React, { ReactNode } from 'react'

const Heading = ({children}: {children?: ReactNode}) => {
  return (
    <p className='text-taccent font-semibold text-md'>{children}</p>
  )
}

export default Heading