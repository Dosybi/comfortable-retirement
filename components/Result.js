const Result = ({ age, income, result }) => {
  const readableResult = String(result)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')
  const readableIncome = String(income)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')

  return (
    <div className="mb-8 rounded-xl bg-gray-100 p-4">
      {result ? (
        <div>
          Чтобы уйти на пенсию в {age} лет и тратить {readableIncome} ₸/мес,
          откладывайте
        </div>
      ) : (
        <div>
          Кажется, вы собираетесь начать откладывать на пенсию слишком поздно.
        </div>
      )}
      {result && (
        <div className="mt-1.5 text-4xl font-bold">{readableResult} ₸/мес</div>
      )}
    </div>
  )
}

export default Result
