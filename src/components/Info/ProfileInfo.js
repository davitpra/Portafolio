import Border from '../Border'

const info = [
  { question: 'Full name:', answer: 'José David Prado Garrido' },
  { question: 'Github:', answer: 'davitpra' },
  { question: 'Mobile:', answer: '(+1) 519-872-5274' },
  { question: 'Email:', answer: 'davitprado@outlook.com' },
  { question: 'Address:', answer: 'London, ON, Canada.' },
  { question: 'Languages:', answer: 'English, Spanish' },
  { question: 'LinkedIn:', answer: 'davitprado' },
  { question: 'Birthday:', answer: '18 Feb, 1993' }
]
export const ProfileInfo = () => {
  return (
    <Border>
      <h4 className='text-xl text-primary font-bold'>Personal Info</h4>
      <ul className='mt-2 text-secondary dark:text-white'>
        {info.map(data =>
          <li className='flex border-b-[1px] py-2 border-black dark:border-white' key={data.question}>
            <span className='font-bold w-28'>{data.question}</span>
            <span className=''>{data.answer}</span>
          </li>
        )}
      </ul>
    </Border>

  )
}
