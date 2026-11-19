import React, { ReactNode } from 'react'
import SubHeader from './SubHeader'
import Heading from './Heading'
import SupportingText from './SupportingText'
import { Badge } from '../ui/badge'

type itemType = {
  icon?: ReactNode,
  header: string,
  description: string,
}

const ContentCards = ({items, type=1}: {items: itemType[], type?: number}) => {
  return (
    <span className='flex lg:flex-row flex-col gap-10 my-10'>
        {items.map((obj, index) => {
          if (type === 2) return(
            <div key={index} className='bg-taccent/20 flex flex-col gap-2 shadow-sm p-4 rounded-2xl w-50 hoverEffect hover:scale-102 select-none'>
              <Badge>{obj.header}</Badge>
              <p>{obj.description}</p>
            </div>
          )

          return(
          <div className='flex bg-tprimary/80 w-60 shadow-sm gap-4 p-4 rounded-2xl text-white hoverEffect hover:scale-104 select-none' key={index}>
            {obj.icon}
            <span className='flex flex-col'>
              <Heading>{obj.header}</Heading>
              <p className=''>{obj.description}</p>
            </span>
          </div>
        )})}
    </span>
  )
}

export default ContentCards