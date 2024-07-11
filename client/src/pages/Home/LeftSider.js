import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
      <div className='flex flex-col items-center'>
      <div className='flex flex-col gap-4 sm:flex-row '>

      <a href='https://web.facebook.com/profile.php?id=100073905847454'>
      <i class="ri-facebook-circle-line text-gray-400 text-xl"></i>
      </a>

      <a href='https://github.com/ushandissanayaka'>
      <i class="ri-github-fill text-gray-400 text-xl"></i>
      </a>

      <a href='https://www.linkedin.com/in/ushan-dissanayaka-a8b092266/'>
      <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
      </a>

      <i class="ri-mail-line text-gray-400 text-xl"></i>
      <i class="ri-instagram-line text-gray-400 text-xl"></i>
      </div>
      <div className="w-[1px] h-32 bg-[#125f63] sm:hidden">
           
      </div>

      </div>
    </div>
  )
}

export default LeftSider
