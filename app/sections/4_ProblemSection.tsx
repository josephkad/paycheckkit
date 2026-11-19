import ContentCards from '@/components/custom/ContentCards'
import Heading from '@/components/custom/Heading'
import SubHeader from '@/components/custom/SubHeader'
import SupportingText from '@/components/custom/SupportingText'
import TonedPage from '@/components/custom/TonedPage'
import { Calendar, PieChart, Wallet } from 'lucide-react'
import React from 'react'

const ProblemSection = () => {
  return (
    <TonedPage className=''>
      <Heading>Managing Your Money Shouldn't Feel Complicated.</Heading>
      <SubHeader>Problem and solution</SubHeader>
      <SupportingText className='text-center'>
        Between bills, groceries, subscriptions, and everyday expenses, it's easy to lose track of where your paycheck goes.
        <br/>You shouldn't have to guess how much money you have left or wonder whether you can afford something.
        <br/>The Paycheck Budget Kit gives you one organized place to plan your income, manage expenses, and stay on top of your financial goals.
      </SupportingText>
      <ContentCards items={[
        {icon: <Wallet />, header: 'Know your income', description: 'See how much money you have available.'},
        {icon: <Calendar />, header: 'Stay on top of bills', description: 'Keep track of upcoming expenses.'},
        {icon: <PieChart />, header: 'Track your spending', description: 'Understand where your money goes.'},
      ]} />
    </TonedPage>
  )
}

export default ProblemSection