'use client'
import Container from '@/components/custom/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const imgSrc = 'https://images.openai.com/static-rsc-4/uHT-gPIxvPitba5OUnAduBR6e5buuZRiDq65z2GEd-Gx_M0t3KWyicLR28aDNXADn90OlY3Jtp4CeW1cXJx-DLSApF1ts2rf1nO3NH3WJCiMNKQka0F0gEOgMUUJbxWqL8LNTcGXx-M4lOLnPRmzOS2TZljvrF72AFkJ0FQ4pI28dqF8J2KkTj1jLvYZlyHI?purpose=fullsize'
const imgSrc2 = 'https://tse2.mm.bing.net/th/id/OIP.NtXMkglBNgwBlOnA9l0_wQHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'

const HeroSection = () => {
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
    <Container className='flex justify-between items-center mb-80'>
      <span className='flex flex-col gap-4 p-6 h-screen'>
        <p className='text-4xl font-semibold text-tprimary'>A SIMPLER WAY TO MANAGE YOUR MONEY</p>
        <h1 className='text-xl text-muted-foreground'>Take control of your income, organize your bills, track your spending, and see exactly where your money is going with one simple budgeting spreadsheet.</h1>
        <span className='flex items-center gap-2 text-muted-foreground flex-col lg:flex-row'>
          <Button onClick={submit} className={''}>Get Started</Button>
          <p>—— Get the Paycheck Budget Kit — $9.99</p>
        </span>
        <p className='text-sm text-muted-foreground'>One-time payment · Digital download</p>

        <p className='text-sm text-muted-foreground'>Coming Soon!</p>
      </span>

      <span className='w-full h-100 lg:flex hidden relative'>
        <img className='absolute w-150 h-full scale-80 rounded-md shadow-lg p-1 rotate-4 top-0 z-1 bg-black/20' src={imgSrc} />
        <img className='absolute w-150 h-full scale-80 rounded-md shadow-sm p-1 rotate-2 top-20 z-0 right-20 bg-black/20' src={imgSrc2} />
      </span>
    </Container>
  )
}

export default HeroSection