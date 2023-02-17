import Border from '../Border'

export const ProfileInfo = () => {
  const info = [
    { question: 'Full name:', answer: 'José David Prado Garrido' },
    { question: 'Birthday:', answer: '18 Feb, 1993' },
    { question: 'Github:', answer: 'davitpra' },
    { question: 'Mobile:', answer: '(+593) 99-836-6616' },
    { question: 'Email:', answer: 'david1716@gmail.com' },
    { question: 'Location:', answer: 'Quito, EC.' },
    { question: 'Languages:', answer: 'English, Spanish' },
    { question: 'LinkedIn:', answer: 'davitprado' }
  ]
  return (
    <Border>
      <h4 className='text-xl text-primary font-bold'>Personal Info</h4>
      <ul className='mt-2 text-secondary dark:text-white'>
        {info.map(data =>
          <li className='flex border-y py-2' key={data.question}>
            <span className='font-bold w-28'>{data.question}</span>
            <span className=''>{data.answer}</span>
          </li>
        )}
      </ul>
    </Border>

  )
}
