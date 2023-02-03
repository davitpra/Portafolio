import React from 'react'

export const ProjectCard = () => {
  return (
    <div class='p-4 md:w-1/2 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto shrink-0'>
      {/* Photograph */}
      <div class='h-56 w-full rounded-lg shadow-md bg-cover bg-center' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80}' }} />
      {/* card */}
      <div class=' w-70 bg-darkPrimary -mt-10 shadow-lg rounded-lg overflow-hidden p-5'>

        <div class='header-content inline-flex '>
          <div class='category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100'>
            <div class='h-2 w-2 rounded-full m-1 bg-purple-500 ' />
          </div>
          <div class='category-title flex-1 text-sm'> PHP</div>
        </div>
        <div class='title-post font-medium'>Mon titre</div>

        <div class='summary-post text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
          <button class='bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm '><span class=''>Lire plus</span></button>
        </div>

      </div>
    </div>
  )
}
