import Border from '../Border'
import { Whatsapp } from '../LayOut/Whatsapp'
import { jsPDF as JSPDF } from 'jspdf'

export const ProfileHero = () => {
  const downloadCV = () => {
    const doc = new JSPDF('portrait', 'px', 'a4', false)
    doc.addImage('./resume/Web Developer - David Prado.png', 'PNG', 0, 0, 460, 652)
    doc.save('Web Developer - David Prado.pdf')
  }
  return (
    <Border height='h-[60%] bottom-0' className='my-4'>
      <div className='flex flex-col items-center '>
        {/* imagen */}
        <img src='./img/foto.png' className='w-40 border-4 z-10 border-tertiary rounded-full' />
        {/* nombre y check */}
        <div className='flex items-center space-x-2 mt-2'>
          <h1 className='title'>David Prado</h1>
          <span className='bg-primary rounded-full p-1 my-3' title='Verified'>
            <svg xmlns='http://www.w3.org/2000/svg' className='text-gray-100 h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M5 13l4 4L19 7' /></svg>
          </span>
        </div>
        {/* Titulo y Lugar */}
        <p className='text-2xl text-secondary dark:text-tertiary'>Full Stack Web Developer</p>
        <p className='text-xl'>London, Ontario</p>
      </div>
      {/* Bottones */}
      <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
        <button className='primary_button md:w-44' onClick={() => downloadCV()}>
          Curriculum
        </button>
        <Whatsapp
          className='secondary_button md:w-44'
        >
          WhatsApp
        </Whatsapp>
      </div>
    </Border>
  )
}
