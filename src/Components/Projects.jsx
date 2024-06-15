import React from 'react'
import recipeheavenimg from '../assets/Screenshot 2024-06-14 185148.png'
import saregamaimg from '../assets/Screenshot 2024-05-28 102029.png'
import filmvaultimg from '../assets/Screenshot 2024-06-14 192834.png'

function Projects() {
  return (
    <div className='sm:px-20 sm:my-20 sm:mx-10 font-poppins mx-5 mb-5'>
      <p className='text-2xl pb-10'>Projects:</p>
      <div>
        <div>
            <p className='sm:text-2xl pb-3'>Recipe Heaven</p>
            <p className='mb-2'>Recipe Haven is a dynamic and user-friendly recipe website designed to help users discover a wide variety of dish recipes. Whether you're a seasoned chef or a kitchen novice, Recipe Haven provides an extensive database of recipes to suit all tastes and skill levels. This platform is built using the <b><u>MERN stack</u></b>(MongoDB, Express.js, React.js, and Node.js) and styled with <b><u>Tailwind CSS</u></b>, ensuring a seamless and visually appealing user experience.</p>
            <img className='sm:w-[70vw] sm:h-[70vh] mt-3 mb-3' src={recipeheavenimg} alt="RecipeHeavenimg" />
            <a className='sm:text-xl underline ml-10' target="_blank" href="https://recipe-heaven-frontend-app.vercel.app/">Link to the Website : recipe-heaven-frontend-app.vercel.app/</a>
        </div>
        <div className='mt-10'>
            <p className='sm:text-2xl pb-3'>Saregama</p>
            <p className='mb-2'>Sargama is a web music player designed to provide users with a convenient way to listen to music online. With a library of up to 300 songs, Sargama offers a variety of music to suit different tastes and preferences. The project is built using <b><u>HTML, CSS, and Vanilla JavaScript</u></b> for the frontend, while <b><u>PHP and PhpMyAdmin</u></b> are used for the backend and database management. <b><u>XAAMP</u></b> serves as the local server environment to ensure efficient operation.</p>
            <img className='sm:w-[70vw] sm:h-[70vh] mt-3 mb-3' src={saregamaimg} alt="Saregamaimg" />
            <a target='_blank' className='sm:text-xl underline' href='https://github.com/sjilani443/Saregama_new'>Link to Github Repository</a>
        </div>

      <div className='mt-10'>
            <p className='sm:text-2xl pb-3'>Film-Vault</p>
            <p className='mb-2'>Film-Vault is an innovative web application that keeps users updated with the latest movies and allows them to curate a personalized watchlist. This app is built using <b><u>React</u></b> for the frontend and styled with <b><u>Tailwind CSS</u></b>, ensuring a modern and responsive design. Film-Vault utilizes the <b><u>TMDB (The Movie Database) API</u></b> to fetch the latest movie data, providing users with comprehensive details and options to add movies to their watchlist for future viewing.</p>
            <img className='sm:w-[70vw] sm:h-[70vh] mt-3 mb-3' src={filmvaultimg} alt="Film-vault img" />
            <a target='_blank' className='sm:text-xl underline' href='https://github.com/sjilani443/Film_vault'>Link to Github Repository</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
