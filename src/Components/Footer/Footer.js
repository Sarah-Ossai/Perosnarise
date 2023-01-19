import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer className='py-20 bg-blue text-white'>
    <div className='md:mx-24 mx-7 flex md:flex-row flex-col md:text-left space-y-6 md:space-y-0 text-center justify-between'>
        <div className='flex flex-col gap-2 text-gray-300'>
            <p>Who we are</p>
            <p>What we do</p>
            <p>Contact</p>
        </div>

        <div className='flex flex-col gap-2 text-gray-300'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
        </div>
        <div className='flex flex-col gap-2 text-gray-300'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>License</p>
        </div>
        <div className='flex flex-col gap-2 text-gray-300 place-items-center md:place-items-start'>
            <div className='flex gap-1'><LinkedInIcon/><p>LinkedIn</p></div>
            <div className='flex gap-1'><TwitterIcon/><p>Twitter</p></div>
            <div className='flex gap-1'><InstagramIcon/><p>Instagram</p></div>
        </div>
    </div>
    <br/>
    <div className='md:mx-24 mx-7'>
        <hr className='border-grey-100 border'/>
    </div>
    <br/>
    <div className='text-center'>
        <br/>
    <p className='text-gray-200'>© Personise 2022. All rights reserved.</p>
    </div>

    </footer>
  )
}

export default Footer