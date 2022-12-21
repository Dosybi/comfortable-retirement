import { useState } from 'react'

const content = {
  title: 'Расчёты',
  text: [
    'Калькулятор допускает, что ежегодная инфляция будет съедать 8% ваших накоплений.',
    'При этом, он считает, что вы будете хранить деньги на депозите, и процент по вкладу опередит инфляцию на 6%.',
  ],
}

const MethodInfo = () => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <>
      <div
        className="mb-2 cursor-pointer text-blue-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-blue-800 hover:decoration-blue-800"
        onClick={() => setIsToggled(!isToggled)}
      >
        {content.title}
      </div>
      <div className={`${!isToggled ? 'hidden' : 'block'}`}>
        {content.text.map((paragraph) => {
          return (
            <p className="mb-3 last-of-type:mb-8" key={paragraph}>
              {paragraph}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default MethodInfo
