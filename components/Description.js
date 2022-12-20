const content = {
  title: 'Сколько откладывать на безбедную старость',
  text: [
    'Если вы не верите в пенсию, придётся копить на достойную старость самостоятельно.',
    'Прикиньте сумму, которая позволит вам комфортно отдохнуть на пенсии, а калькулятор посчитает, сколько для этого нужно откладывать каждый месяц, учитывая инфляцию и проценты на вкладе.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="first-of-type:mb-2" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default Description
