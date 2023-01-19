
import { useState, useEffect } from "react";
import Logo from "../Assets/Images/logo.png"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [changeBg, setChangeBg] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    useEffect(() =>{
      let backgroundTransparacyVar = clientWindowHeight / 10;
      if (backgroundTransparacyVar < 1) {
          setChangeBg(true)
      }
      else{
        setChangeBg(false)
      }
    }, [clientWindowHeight])

    return (
        <nav className= {changeBg ? `w-full   bg-transperent fixed z-50 `: `w-full bg-neutral-200 fixed z-50` }>
            <div className="justify-between   md:items-center md:flex md:pt-3 md:pb-5 relative">
                <div>
                    <div className="flex items-center justify-between  md:py-0 md:block pt-5 px-5 md:pt-0 md:px-0">    
                    <div className="flex space-x-5 pb-4 md:relative md:left-24">
                            <img src={Logo}  alt='Logo' className=" w-[35px] h-[52px]"/>   
                            <h1 className="text-[32px] font-bold font-sans">Personarise</h1>                
                            </div>
                        <div className="md:hidden">
                            <button
                                className="p-2  text-black rounded-md outline-none focus:border-white focus:border -mt-4"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 text-white h-7"
                                        viewBox="0 0 20 20"
                                        fill="blue"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 text-white h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                        strokeWidth={3}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-32  md:block md:pb-0 md:mt-0 bg-zinc-200 p-5  pt-20 md:pt-6 md:bg-transparent  md:text-black ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="-mt-4 items-center justify-center space-y-8 md:flex md:justify-between md:space-x-80 md:space-y-0 font-inter sp:space-x-60">
                             <div className="items-center justify-center space-y-8 md:flex md:justify-between md:space-x-12 md:space-y-0 md:mb-4 font-medium">
                            <li className=" hover:text-blue ">
                                Who we are
                            </li>
                            <li className="hover:text-blue ">
                                What we do
                            </li>                              
                        
                            <li className="hover:text-blue ">
                                Contact
                            </li>
                            </div>
                            <div className="flex gap-4 md:relative md:right-24">
                           <div className="bg-lightBlue text-blue text-lg px-6 py-4 rounded-md flex space-x-2 align-items-center hover:bg-blue hover:text-white">
                           <PlayCircleOutlineIcon/>
                           <button>
                            Watch a demo
                            </button>
                           </div>

                           <button className="bg-blue rounded-md px-6 py-4 text-white border-none hover:bg-lightBlue hover:text-blue">
                            Sign up
                           </button>
                           </div>

                        </ul> 
                    </div>
                </div>
            </div>
        </nav>



    );
}