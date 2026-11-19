import React, { ReactNode } from 'react'

const SubHeader = ({children}: {children?: ReactNode}) => {
  return (
    <p className='text-4xl font-semibold text-tprimary'>{children}</p>
  )
}

export default SubHeader