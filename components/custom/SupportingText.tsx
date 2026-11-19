import React, { ReactNode } from 'react'

const SupportingText = ({children, className=''}: {children?: ReactNode, className?: string}) => {
  return (
    <p className={`text-muted-foreground lg:text-md text-xs ${className}`}>{children}</p>
  )
}

export default SupportingText