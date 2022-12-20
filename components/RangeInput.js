import { useState, useEffect } from 'react'

const RangeInput = ({
  monthlyIncome,
  startAge,
  retirementAge,
  isAgeRange = false,
  handleMonthlyIncomeChange,
  handleStartAgeChange,
}) => {
  const [inputValue, setInputValue] = useState(isAgeRange ? 18 : 1000000)
  const [inputReadableValue, setInputReadableValue] = useState()

  useEffect(() => {
    if (!isAgeRange) {
      setInputReadableValue(
        String(inputValue)
          .split('')
          .map((letter, i, arr) =>
            i === arr.length - 4 ? letter + ' ' : letter
          )
          .map((letter, i, arr) =>
            i === arr.length - 7 ? letter + ' ' : letter
          )
          .join('')
      )
      handleMonthlyIncomeChange(inputValue)
    } else {
      setInputReadableValue(
        String(inputValue).slice(-1) == 1 &&
          (String(inputValue) < 11 || String(inputValue) > 14)
          ? inputValue + ' год'
          : (String(inputValue).slice(-1) == 2 ||
              String(inputValue).slice(-1) == 3 ||
              String(inputValue).slice(-1) == 4) &&
            (String(inputValue) < 11 || String(inputValue) > 14)
          ? inputValue + ' года'
          : String(inputValue) >= 11 || String(inputValue) <= 14
          ? inputValue + ' лет'
          : inputValue + ' лет'
      )
      handleStartAgeChange(inputValue)
    }
  }, [inputValue])

  return (
    <div className="mb-4">
      <div className="flex">
        <label className="block text-sm font-medium text-gray-700">
          {isAgeRange ? 'Начну откладывать в' : 'Хватит'}
        </label>
        <div className="ml-1.5 block bg-white px-1.5 text-sm font-medium text-gray-700">
          {inputReadableValue} {isAgeRange ? '' : '₸/мес'}
        </div>
      </div>
      <input
        type="range"
        className="h-1 w-full appearance-none bg-green-500"
        min={isAgeRange ? '1' : '10000'}
        max={
          isAgeRange
            ? String(retirementAge).length === 2
              ? retirementAge
              : '60'
            : '10000000'
        }
        step={isAgeRange ? '1' : '10000'}
        defaultValue={isAgeRange ? startAge : monthlyIncome}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default RangeInput
