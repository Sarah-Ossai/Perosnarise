import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Girl1 from "./Components/Assets/Images/girl1.png";
import Girl2 from "./Components/Assets/Images/girl2.png";
import Girl3 from "./Components/Assets/Images/girl3.png";
import Girl4 from "./Components/Assets/Images/girl4.png";
import Star from "./Components/Assets/Images/star.png";
import Nostar from "./Components/Assets/Images/nostar.png";
import Truefi from "./Components/Assets/Images/truefi.png";
import Compound from "./Components/Assets/Images/compound.png";
import Paxos from "./Components/Assets/Images/paxos.png";
import Aave from "./Components/Assets/Images/aave.png";
import Synthetix from "./Components/Assets/Images/synthetix.png";
import Mutual from "./Components/Assets/Images/mutual.png";
import Ens from "./Components/Assets/Images/ens.png";
import Connect from "./Components/Assets/Images/connect.png";
import Social from "./Components/Assets/Images/social.png";
import Creative from "./Components/Assets/Images/Creative.png";
import Arrow from "./Components/Assets/Images/arrow.png";
import Person from "./Components/Assets/Images/person.png";
import Numbers from "./Components/Assets/Images/numbers.png";
import Footer from './Components/Footer/Footer';
import Circle from "./Components/Assets/Images/circle.png";
import Quote from "./Components/Assets/Images/quote.png";







function App() {
  return (
    <React.Fragment>
        <Header/>

      <section className='text-center pt-48 flex flex-col space-y-5 md:space-y-8 md:bg-hero-pattern bg-no-repeat bg-[center_top_9.5rem] pb-20 bg-[length:1150px_800px] font-inter '>
        <h1 className='md:text-6xl text-2xl font-bold'>Choose a career in tech in </h1>
        <h1 className='md:text-6xl text-2xl font-bold'>minutes</h1>
        <div className='mx-6'>
          <p className='md:leading-10 text-sm md:text-lg'>Personarise is your tech talent development platform for eliminating time consuming 
          <br/>
            activities while making decision on a tech career you will succeed in — and so much 
            <br/>
            more.
</p>
        </div>
<div className='flex mx-auto -space-x-5'>
        <div className='flex relative'>
        <img src={Girl1} alt="avatar" width={40} height={40} className="z-30"/>
        <img src={Girl2} alt="avatar" width={40} height={40} className="z-20 relative right-4"/>
        <img src={Girl3} alt="avatar" width={40} height={40} className="z-10 relative right-8" />
        <img src={Girl4} alt="avatar" width={40} height={40} className="z-0 relative right-12"/>

        </div>
        <div>
          <p>3k+ users</p>
          <div className='flex'>
          <img src={Star} alt="star" width={8} height={8} />
          <img src={Star} alt="star" width={8} height={8} />
          <img src={Star} alt="star" width={8} height={8} />
          <img src={Star} alt="star" width={8} height={8} />
          <img src={Nostar} alt="nostar" width={8} height={8} />

          </div>
        </div>
</div>
        <div className='hidden md:flex justify-between  py-[4px] bg-white mx-auto px-1 md:gap-36 rounded-lg '>
          <input type="email" placeholder='Type your email address' className='bg-transparent  outline-none md:pl-4'/>
          <div>
            <button className='bg-blue  px-5 md:py-3 py-2 text-white rounded-md hover:bg-lightBlue hover:text-blue'>Get Started</button>
          </div>
        </div>

        <div className='md:hidden flex flex-col place-items-center space-y-3'>
          <input type="email" placeholder='Type your email address' className='bg-white border border-neutral-300 outline-none md:pl-4 py-2 px-7 gap-0 md:gap-36 rounded-md'/>
          <button className='bg-blue  px-5 md:py-3 py-2 text-white rounded-md'>Get Started</button>

          </div>
      </section>

      <section>
        <div className='md:flex justify-between md:mx-24 md:py-44 hidden'>
        <img src={Truefi} alt="star" width={110} height={60} />
        <img src={Compound} alt="star" width={110} height={60} />
        <img src={Paxos} alt="star" width={110} height={60} />
        <img src={Aave} alt="star" width={110} height={60} />
        <img src={Synthetix} alt="star" width={110} height={60} />
        <img src={Mutual} alt="star" width={110} height={60} />
        <img src={Ens} alt="star" width={110} height={60} />

        </div>
        <div className='md:hidden mx-7 flex flex-col py-20 space-y-9 py-9'>
        <div className='flex justify-between'>
        <img src={Truefi} alt="star" width={80} height={40} />
        <img src={Compound} alt="star" width={80} height={40} />
        <img src={Paxos} alt="star" width={80} height={40} />
        </div>
        <div className='flex justify-between'>
        <img src={Aave} alt="star" width={80} height={40} />
        <img src={Synthetix} alt="star" width={80} height={40} />
        <img src={Mutual} alt="star" width={80} height={40} />
        </div>
        <div className='grid place-items-center'>
        <img src={Ens} alt="star" width={80} height={40} />
        </div>
        </div>
      </section>

      <section className='md:ml-24 ml-7 flex flex-col flex-col-reverse gap-20 md:flex-row pb-56 bg-left-half bg-[length:100px_230px] bg-[right_bottom_2rem]  bg-no-repeat'>
        <div className='flex-1 flex flex-col space-y-5'>
          <p className=' text-[36px] md:text-[62px] font-bold'>Map your passion to a tech career in minutes</p>

          <p className='text-gray-500 text-lg leading-10 mr-7'>Identify a career in tech you are passionate about in minutes. Simply select the attributes that best define your person 
            - and watch the system recommend a career that is a close-fit to you and simplified details about that career.</p>
        </div>
        <div className='flex-1 grid place-items-center '>
          <img src={Connect} alt="connect" width={304} height={311}/>
        </div>
      </section>

      <section className='text-center md:mx-24 mx-7 flex md:flex-row flex-col pb-20 md:pb-40 gap-20 md:gap-10'>
        <div>
          <p className='text-blue'>SIGN UP/LOGIN</p>
          <br/>
          <p className='text-gray-500'>Explore the unique approach Personarise use to help you maximize your career by clicking - “Get started”.</p>
        </div>

        <div className=''>
          <p className='text-blue'>COMMUNICATE YOUR PASSION</p>
          <br/>
          <p className='text-gray-500'>Communicate your passion to Personarise in through an intuitive interface and get matched to a career in tech you will succeed in.</p>
        </div>

        <div>
          <p className='text-blue'>BECOME WORLD-CLASS</p>
          <br/>
          <p className='text-gray-500'>Be among the top 1% in your career and become a rock star in your tech career by identifying your skills gap and bridging them,</p>
        </div>
      </section>

      <section className='mx-7 text-center  pb-20'>
        <p className='text-2xl font-bold md:text-3xl'>Switch to a career in tech with ease</p>
        <br/>
        <p className='text-gray-500 md:text-lg font-medium'> Personarise make it easier for you to switch to a highly demanded tech career
           with <br className='hidden md:block'/>ease and become a world-class talent in any career of choice.</p>
      </section>

      <div className='text-gray-500 md:text-lg md:mx-24 mx-7 pb-20 font-medium'>
        <div className=' hidden md:flex justify-between'>
        <p className='text-blue'>Sales</p>
        <p>Marketing</p>
        <p>Customer Success</p>
        <p>Recruiting</p>
        <p>Information Technology</p>
        <p>Education</p>
        </div>
<div className='text-center flex flex-col space-y-5'>
        <div className='flex md:hidden justify-between'>
        <p className='text-blue'>Sales</p>
        <p>Marketing</p>
        <p>Customer Success</p>
        </div>
        <div className='flex md:hidden justify-between'>
        <p>Recruiting</p>
        <p>Information Technology</p>
        </div>
        <div className='md:hidden'>
        <p>Education</p>
        </div>
        </div>
        <br/>
        <div>
          <hr className='w-full border border-2 hidden md:block'/>
        </div>
      </div>

      <section className='md:ml-0 ml-7 flex md:flex-row md:gap-36 flex-col pb-56 md:bg-right-half bg-[length:100px_320px] bg-[left_bottom_1rem]  bg-no-repeat'>
        <div className='flex-1 flex flex-col gap-10 md:ml-40'>
        <div className='flex-1 md:hidden block'>
          <img src={Social} alt="social" width={320} height={356}/>
        </div>
        <div>
          <p className='text-blue'>LEARN ABOUT SALES</p>
          <br/>
          <p className='leading-10 text-gray-500'>Learn what sales is all about and how to start a career in sales in today world.</p>
        </div>

        <div>
          <p className='text-blue'>DISCOVER SKILLS</p>
          <br/>
          <p className='leading-10 text-gray-500'>Discover skills needed by employers from a sales person.</p>
        </div>
        </div>

        <div className='flex-1 hidden md:block'>
          <img src={Social} alt="social" />
        </div>

        <div className='flex-1 flex flex-col gap-10 md:mr-40'>
        <div>
          <p className='text-blue'>LEARN FROM EXPERTS</p>
          <br/>
          <p className='leading-10 text-gray-500'>Learn sales skills from sales expert and understand how they sell more with less.</p>
        </div>

        <div>
          <p className='text-blue'>CREATE PORTFOLIOS</p>
          <br/>
          <p className='leading-10 text-gray-500'>Create job winning portfolios and engage in world-class projects.</p>
        </div>
        </div>

      </section>

      <section className='md:mx-24 mx-7 pb-44 flex flex-col space-y-20'>
        <div className='flex md:flex-row flex-col gap-20 md:gap-0'>
          <div className='relative flex-1'>
            <img src={Creative} alt="creative" className='w-full'/>
          
            <img src={Person} alt="person" className='absolute bottom-3 left-20 w-[212px] md:w-[312px]'/>
          </div>

          <div className='flex-1 flex flex-col justify-center align-items-center md:mx-20 '>
            <p className='text-4xl font-bold'>Become a world-class individual in your field</p>
            <br/>
            <p className='text-lg leading-10'>Identify the skills that world-class individuals possesses in your field and what 
            they know. Learn the skills with any eLearning provider you prefer.
</p>
<br/>
<div className='flex gap-3'>
  <p className='text-blue'>Learn more</p>
  <div className='grid place-items-center'>
  <img src={Arrow} alt="arrow"/>
  </div>

</div>
          </div>
        </div>

        <div className='flex  md:flex-row flex-col flex-col-reverse gap-20 md:gap-0' >

        <div className='flex-1 flex flex-col justify-center align-items-center md:mx-20 '>
            <p className='text-4xl font-bold'>Hit your numbers</p>
            <br/>
            <p className='text-lg leading-10'>Track your career progress and hit your numbers - increase salary, more hand-on experience,
             develop skills with the 1st talent development platform.</p>
             <br/>
<div className='flex gap-3'>
  <p className='text-blue'>Learn more</p>
  <div className='grid place-items-center'>
  <img src={Arrow} alt="arrow"/>
  </div>
  </div>
          </div>

          <div className='flex-1'>
            <img src={Numbers} alt="creative" />
                    </div>


        </div>
      </section>

      <section className='pb-40'>
        <div className='text-center border-2 mx-7 md:mx-44 py-[100px] md:py-[158px] flex flex-col gap-10 px-5 md:px-0'>
          <p className='text-3xl md:text-4xl font-bold'>Switch to a career in tech with ease</p>
          <p className='text-gray-500'>Start your tech journey or take your career to the next level with Personarise today.</p>
          <div>
          <button className='bg-blue  px-6 md:py-3 py-2 text-white rounded-lg hover:bg-lightBlue hover:text-blue'>Get Started</button>
          </div>
        </div>
      </section>

      <section className='md:mx-24 mx-7 flex flex-col gap-20 pb-44'>
        <div className='text-center flex-col flex gap-10'>
        <p className='md:text-6xl text-3xl font-bold'>Testimonials</p>

        <p>These are the stories of some of our very early customers about their experience of using
          <br/> Personarise.</p>
          </div>
          <div className='flex flex-col gap-10'>
        <div className='flex md:flex-row flex-col gap-10'>
          <div className='bg-[#F4F1F1] rounded-md px-10 py-10 flex flex-col space-y-5'>
          <div>
              <img src={Quote} alt="quote" className='relative right-5'/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, 
              vehicula elit congue etiam purus. Amet eu risus, sed auctor et. Orci sed faucibus 
              cursus dictum tincidunt amet, leo. </p>
              
              <div className='flex gap-5 place-items-center'>
                <div><img src={Circle} alt="circle" /></div>
        
              <div>
              <p className='font-bold'>Joseph Umoh</p>
              <p>CEO Tera Culture, Lagos.</p>
             </div>
              </div>
          </div>
          <div className='bg-[#F4F1F1] rounded-md px-10 py-10 flex flex-col space-y-5'>
            <div>
              <img src={Quote} alt="quote" className='relative right-5'/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, 
              vehicula elit congue etiam purus. Amet eu risus, sed auctor et. Orci sed faucibus 
              cursus dictum tincidunt amet, leo. </p>
              
              <div className='flex gap-5 place-items-center'>
                <div><img src={Circle} alt="circle" /></div>
        
              <div>
              <p className='font-bold'>Joseph Umoh</p>
              <p>CEO Tera Culture, Lagos.</p>
             </div>
              </div>

          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-10'>
          <div className='bg-[#F4F1F1] rounded-md px-10 py-10 flex flex-col space-y-5'>
          <div>
              <img src={Quote} alt="quote" className='relative right-5'/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, 
              vehicula elit congue etiam purus. Amet eu risus, sed auctor et. Orci sed faucibus 
              cursus dictum tincidunt amet, leo. </p>
              
              <div className='flex gap-5 place-items-center'>
                <div><img src={Circle} alt="circle" /></div>
        
              <div>
              <p className='font-bold'>Joseph Umoh</p>
              <p>CEO Tera Culture, Lagos.</p>
             </div>
              </div>
          </div>
          <div className='bg-[#F4F1F1] rounded-md px-10 py-10 flex flex-col space-y-5'>
          <div>
              <img src={Quote} alt="quote" className='relative right-5'/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sapien ipsum, mi urna, 
              vehicula elit congue etiam purus. Amet eu risus, sed auctor et. Orci sed faucibus 
              cursus dictum tincidunt amet, leo. </p>
              
              <div className='flex gap-5 place-items-center'>
                <div><img src={Circle} alt="circle" /></div>
        
              <div>
              <p className='font-bold'>Joseph Umoh</p>
              <p>CEO Tera Culture, Lagos.</p>
             </div>
              </div>
          </div>
          </div>
          </div>
      </section>


      <section className='pb-40 '>
      <div className='bg-[#F4F1F1] rounded-md flex md:flex-row flex-col px-10  md:px-20 py-20 md:mx-24 mx-7 justify-between
      md:bg-leftbg bg-[length:130px_150px] bg-[left_top]  bg-no-repeat' >
        <div>
          <p className='md:text-5xl text-3xl font-bold leading-10'>Curious to try?</p>
          <br/>
          <p className='md:text-5xl text-3xl font-bold leading-40'>Get started now!</p>
          <br/>
          <p className='leading-10'>Join our early users and discover how Personarise is 
            <br/> helping you maximize career opportunities.</p>
        </div>

<div className='flex flex-col space-y-5'>
        <div className='rounded-md bg-white w-full md:w-[408px] h-[120px]'>
          <input type="email" name="email"  className='bg-transparent p-3 outline-none' placeholder="example@gmail.com"/>
        </div>
        <button className='bg-black text-white py-3 rounded-md'>Get Started</button>
        </div>
        </div>
      </section>
      <Footer/>
    </React.Fragment>
     
  );
}

export default App;
