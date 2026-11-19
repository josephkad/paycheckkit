import ContentCards from '@/components/custom/ContentCards'
import Heading from '@/components/custom/Heading'
import SubHeader from '@/components/custom/SubHeader'
import SupportingText from '@/components/custom/SupportingText'
import TonedPage from '@/components/custom/TonedPage'
import React from 'react'

const HowItWorks = () => {
  return (
    <TonedPage noTone={true}>
      <SubHeader>How it works</SubHeader>
      <Heading>Your Budget, Simplified in Three Steps.</Heading>
      <SupportingText>No complicated software. No confusing setup. Just a straightforward way to organize your finances.</SupportingText>
      <ContentCards items={[
        {icon: <p>01</p>, header: 'Get Your Template', description: 'Purchase the Paycheck Budget Kit and receive access to your digital spreadsheet.'},
        {icon: <p>02</p>, header: 'Enter Your Numbers', description: 'Add your paychecks, bills, expenses, and savings goals to organize your budget.'},
        {icon: <p>03</p>, header: 'Take Control', description: 'Use your budget dashboard to understand your available money and keep track of your financial progress.'},
      ]} />
    </TonedPage>
  )
}

export default HowItWorks