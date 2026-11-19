import Container from '@/components/custom/Container'
import React from 'react'

const AnnouncemmentBar = () => {
  return (
    <div className='bg-tprimary'>
        <Container className='text-white p-1' noPadding={true}>
            <p className='text-center lg:text-sm font-semibold text-xs'>Take control of your money, one paycheck at a time.</p>
        </Container>
    </div>
  )
}

export default AnnouncemmentBar