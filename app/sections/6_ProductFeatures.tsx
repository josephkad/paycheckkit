import ContentCards from '@/components/custom/ContentCards'
import Heading from '@/components/custom/Heading'
import SubHeader from '@/components/custom/SubHeader'
import SupportingText from '@/components/custom/SupportingText'
import TonedPage from '@/components/custom/TonedPage'

const ProductFeatures = () => {
  return (
    <TonedPage noTone={false}>
      <SubHeader>What's Included</SubHeader>
      <Heading>Everything You Need to Organize Your Paycheck.</Heading>
      <SupportingText>One simple spreadsheet with the tools to help you plan, track, and manage your money.</SupportingText>
      <ContentCards items={[
        {header: 'Paycheck Planner', description: 'Organize your income and assign money to bills, expenses, savings, and spending.'},
        {header: 'Bill Tracker', description: 'Keep your recurring bills and payment due dates organized in one place.'},
        {header: 'Expense Tracker', description: 'Record your spending and monitor how much you\'re using throughout the month.'},
        {header: 'Savings Tracker', description: 'Set savings targets and track your progress toward reaching them.'},
        {header: 'Budget Dashboard', description: 'See your income, expenses, savings, and remaining balance in one organized overview.'},
      ]} type={2} />
    </TonedPage>
  )
}

export default ProductFeatures