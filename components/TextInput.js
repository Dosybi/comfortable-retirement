import { useEffect, useState } from 'react'

const TextInput = ({
  placeholder,
  isRetirementAge = false,
  handleRetirementAgeChange,
  handleTotalAgeChange,
}) => {
  const [ageValue, setAgeValue] = useState()

  useEffect(() => {
    isRetirementAge === true
      ? handleRetirementAgeChange(ageValue)
      : handleTotalAgeChange(ageValue)
  }, [ageValue])

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {isRetirementAge ? 'Выйду на пенсию' : 'Хочу прожить'}
      </label>
      <input
        type="number"
        inputMode="numeric"
        className="mt-1 h-10 w-full appearance-none rounded-md border-gray-300 px-2 shadow-sm"
        placeholder={
          isRetirementAge ? `в ${placeholder} лет` : `${placeholder} лет`
        }
        onChange={(e) => setAgeValue(e.target.value)}
      />
    </div>
  )
}

export default TextInput
