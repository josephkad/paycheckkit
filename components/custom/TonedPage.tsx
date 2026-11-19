import React, { ReactNode } from 'react'
import Container from './Container'

const TonedPage = ({children, className, noTone=false}: {children?: ReactNode, className?: string, noTone?: boolean}) => {
  return (
    <div className={`${!noTone && 'bg-tbackground'} py-20`}>
        <Container className={`flex items-center flex-col gap-2 ${className}`}>
            {children}
        </Container>
    </div>
  )
}

export default TonedPage