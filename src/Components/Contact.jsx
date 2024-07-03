import React from 'react'

function Contact() {
  return (
    <div className="sm:px-20 sm:mx-10 sm:my-20 font-poppins mb-[25vh] sm:mb-5 mx-5 my-32 py-10">
      <p className='sm:text-3xl text-2xl underline sm:mb-3 mb-8'>Contact me:-</p>
      <div className='flex flex-col sm:text-3xl text-xl md:gap-3 gap-3 justify-center items-center'>
        <a target='_blank' href='https://www.linkedin.com/in/jeelani-shaik-82b79a23b/'>Linkedin <i class="fa-brands fa-linkedin"></i></a>
        <a target='_blank' href='https://github.com/sjilani443'>Github <i class="fa-brands fa-github"></i></a>
        <a target='_blank' href='https://github.com/sjilani443'>Leetcode <i class="fa-solid fa-square-terminal"></i></a>
        <a target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=sjilani443@gmail.com&su=Subject%20Here&body=Body%20text%20here">Gmail <i class="fa-solid fa-at"></i></a>
        <a target='_blank' href="https://www.instagram.com/sk__jeelani/">Instagram <i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' href="https://www.instagram.com/sk__jeelani/">Twitter <i class="fa-brands fa-square-x-twitter"></i></a>
        <p className='pt-3'>Thank You For Visiting <i class="fa-solid fa-heart"></i></p>
      </div>

    </div>
  )
}

export default Contact
