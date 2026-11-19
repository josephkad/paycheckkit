import React, { ReactNode } from 'react'

const Container = ({children, className='', noPadding}: {children?: ReactNode, className?: string, noPadding?: boolean}) => {
  return (
    <div className={`max-w-7xl mx-auto ${!noPadding && 'p-4'} ${className}`}>
        {children}
    </div>
  )
}

export default Container