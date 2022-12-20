import RangeInput from './RangeInput'
import TextInput from './TextInput'

const Inputs = ({
  retirementAge,
  totalAge,
  monthlyIncome,
  startAge,
  handleRetirementAgeChange,
  handleTotalAgeChange,
  handleMonthlyIncomeChange,
  handleStartAgeChange,
}) => {
  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-4">
      <TextInput
        placeholder={retirementAge}
        handleRetirementAgeChange={handleRetirementAgeChange}
        isRetirementAge
      />
      <TextInput
        placeholder={totalAge}
        handleTotalAgeChange={handleTotalAgeChange}
      />
      <RangeInput handleMonthlyIncomeChange={handleMonthlyIncomeChange} />
      <RangeInput
        isAgeRange
        retirementAge={retirementAge}
        monthlyIncome={monthlyIncome}
        startAge={startAge}
        handleStartAgeChange={handleStartAgeChange}
      />
    </div>
  )
}

export default Inputs
