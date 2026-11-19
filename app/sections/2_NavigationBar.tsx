'use client'
import Container from '@/components/custom/Container'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const NavigationBar = () => {
  const submit = async () => {
    if (!localStorage.getItem('sent')) {
      try {
        const res = await fetch('/api/notify', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({}),
        })
        
        if (!res.ok) throw new Error(`Request Failed: ${res.status}`)
          localStorage.setItem('sent', 'true')
      }catch(err) {
        console.error(err)
      }
    }
  }
  return (
    <div className='bg-tbackground shadow-sm'>
      <Container className='flex items-center justify-between'>
        <span>
          <button className='lg:text-4xl text-xl font-semibold text-taccent'>Paycheck<span className='text-tprimary'>Kit</span></button>
        </span>

        <span className='lg:flex hidden gap-2 '>
          {[
            {text: 'How It Works'},
            {text: 'What\'s Included'},
            {text: 'FAQ'},
          ].map((item, index) => (
            <Button key={index} variant={'link'}>{item.text} <ChevronDown /></Button>
          ))}
        </span>

        <span>
          <Button onClick={submit} variant={'default'}>Get Your Budget Kit — $9.99</Button>
        </span>
      </Container>
    </div>
  )
}

export default NavigationBar