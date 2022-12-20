import Head from 'next/head'
import { useState, useEffect } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'

export default function Home() {
  const [retirementAge, setRetirementAge] = useState(60)
  const [totalAge, setTotalAge] = useState(80)
  const [monthlyIncome, setMonthlyIncome] = useState(1000000)
  const [startAge, setStartAge] = useState(18)
  const [result, setResult] = useState()

  useEffect(() => {
    setRetirementAge(60)
    setTotalAge(80)
    setResult(
      Math.round(
        (monthlyIncome * (totalAge - retirementAge)) /
          ((retirementAge - startAge) * 12)
      )
    )
  }, [])

  const handleRetirementAgeChange = (age) => {
    if (age > startAge) {
      setRetirementAge(age)
      setResult(
        Math.round(
          (monthlyIncome * (totalAge - retirementAge)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }
  const handleTotalAgeChange = (age) => {
    if (age > retirementAge) {
      setTotalAge(age)
      setResult(
        Math.round(
          (monthlyIncome * (totalAge - retirementAge)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }
  const handleMonthlyIncomeChange = (income) => {
    setMonthlyIncome(income)
    setResult(
      Math.round(
        (monthlyIncome * (totalAge - retirementAge)) /
          ((retirementAge - startAge) * 12)
      )
    )
  }
  const handleStartAgeChange = (age) => {
    if (age < retirementAge) {
      setStartAge(age)
      setResult(
        Math.round(
          (monthlyIncome * (totalAge - retirementAge)) /
            ((retirementAge - startAge) * 12)
        )
      )
    } else setResult('')
  }

  return (
    <>
      <Head>
        <title>Сколько откладывать на безбедную старость</title>
        <meta
          name="description"
          content="Сколько откладывать на безбедную старость"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white p-4">
        <Description />
        <Inputs
          retirementAge={retirementAge}
          totalAge={totalAge}
          monthlyIncome={monthlyIncome}
          startAge={startAge}
          handleRetirementAgeChange={handleRetirementAgeChange}
          handleTotalAgeChange={handleTotalAgeChange}
          handleMonthlyIncomeChange={handleMonthlyIncomeChange}
          handleStartAgeChange={handleStartAgeChange}
        />
        <Result age={retirementAge} income={monthlyIncome} result={result} />
      </main>
    </>
  )
}
