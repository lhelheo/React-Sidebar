import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";

export const Sidebar = () => {
    // Lembrar de mudar o cursor ao passar por algum elemento que poderá ser clicado
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState(true);
    const [isWidthReduced, setIsWidthReduced] = useState(false);
    const [selectedMode, setSelectedMode] = useState('light');
    const [divVisible, setDivVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('bg-white'); // Novo estado
    const [fontColor, setFontColor] = useState('text-[#868b90]');
    const [iconColor, setIconColor] = useState('text-blue-500');
    const [isTextVisible, setIsTextVisible] = useState(true);
    const [divContainerClass, setDivContainerClass] = useState('ml-10');
    // const [buttonVisibility, setButtonVisibility] = useState(true);

    // Lembrar de importar o useState, nesse caso não está sendo importado essa biblioteca, por isso não se pude utilizar useState() sem o 
    // Configurar os componentes de uma forma melhor em um novo projeto (organização)
    // Resolver display da lista que está carregando em ordem na vertical
    const handleDisplay = () => {
        setDisplay(!display);
        setIsWidthReduced(prevState => !prevState);
        setDivVisible(prevState => !prevState);
        setIsTextVisible(prevState => !prevState); // Alternar entre visível e invisível
        setDivContainerClass(prevState => prevState === ' flex-col justify-center w-16 ml-2' ? ' flex-row ml-10' : ' flex-col justify-center w-16 ml-2');
    }

    const handleDarkMode = () => {
        setBackgroundColor(prevState => prevState === 'bg-white' ? 'bg-gray-950' : 'bg-white');
        setFontColor(prevState => prevState === 'text-white' ? 'text-[#868b90]' : 'text-white'); // Altera a cor do texto   
        setIconColor(prevState => prevState === 'text-white' ? 'text-blue-500' : 'text-white'); 
    }

    const toggleMode = () => {
        setSelectedMode(prevState => prevState === 'light' ? 'dark' : 'light');
    };
    
    const ulClassName = isWidthReduced
        ? 'w-20 transition-width duration-300 ease-in-out'
        : 'w-72 transition-width duration-300 ease-in-out';
    
    const divClass = divVisible
        ? 'w-5/6 h-56 border-dashed border-2 border-gray-300 mx-auto rounded-md flex flex-col text-white justify-center items-center'
        : 'w-5/6 h-20 mx-auto flex flex-col mt-36 items-center text-white';

    const darkButtonClass = `flex px-4 rounded-lg hover:font-bold cursor-pointer ${
        selectedMode === 'dark' ? '' : ''
    }`;
    const lightButtonClass = `flex px-4 rounded-lg hover:font-bold cursor-pointer ${
        selectedMode === 'light' ? '' : ''
    }`;

    
    return(
        
        <aside className="flex bg-[#E6E6E6]">
            
            <ul className={`relative h-screen ${backgroundColor} ${ulClassName}`}>
                
                <IoMdEye className="w-10 h-10 rounded-lg p-1 ml-5 mt-10 bg-gray-900 text-white" />
 
                <button onClick={handleDisplay}>
                <IoIosArrowForward className="absolute -right-3 bg-white shadow-xl rounded-full top-12 w-6 h-6 p-1 text-gray-800 dark:text-black"/>
                </button>

                <ul className="flex bg-slate-200 hover:bg-gray-300 rounded-lg pl-4 m-3 py-2 cursor-pointer">
                    <FaHouse className="w-6 h-6 text-gray-800 dark:text-[#2C2F32]"/>
                    {display && ( 
                        <li className={`font-bold flex items-center mx-2`}>Dashboard</li>
                    )}
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300  pl-4 m-3 py-2 cursor-pointer">
                    <CgProfile className="w-6 h-6 text-gray-800 dark:text-[#868b90]"/>
                    {display && (
                    <li className={`font-bold ${fontColor} flex mx-2`}>Audience</li>
                    )}
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300 pl-4 m-3 py-2">
                    <IoMdMail className="w-6 h-6 text-gray-800 dark:text-[#868b90]"/>
                    <div className="flex cursor-pointer">
                        {display && (
                        <li className={`font-bold ${fontColor} flex items-center mx-2`}>Posts</li>
                        )}
                        {display && (
                        <p className="ml-32 bg-blue-300 rounded-lg px-2 font-bold">8</p>
                        )}
                    </div>
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300 pl-4 m-3 py-2">
                
                    <FaCalendarAlt className="w-6 h-6 text-gray-800 dark:text-[#868b90]" />
                    <div className="flex cursor-pointer">
                        {display && (
                        <li className={`font-bold ${fontColor} flex items-center mx-2`}>Schedules</li>
                        )}
                        {display && (
                        <div className="flex ml-16">
                            <svg className="rounded-full bg-gray-300 w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                            <p className="ml-2 bg-red-300 rounded-lg px-2 font-bold">3</p>    
                        </div>
                        )}
                    </div>
                    
                </ul>

                <ul 
                className="flex items-stretch rounded-lg pl-4 m-3 py-2 cursor-pointer">
                    <li className="relative flex flex-col" onClick={() => setShow(!show)}>
                      
                        <div className="flex">
                        <MdOutlineIncompleteCircle className="w-6 h-6 text-gray-800 dark:text-[#868b90]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" />
                        <a href="#" className={`flex rounded-lg pl-2 font-bold ${fontColor}`}>
                        {display && (
                        <p className={`${fontColor} hover:bg-gray-300`}>Incoming</p>
                        )}
                        {display && (                    
                            <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90] ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{transform: show ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease"}}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                            </svg>
                        )}
                        </a>
                        </div>
                    

                        {show && (
                            <ul className={` border-l-4 border-solid border-gray-300 mt-3 rounded-lg" ${backgroundColor} ${fontColor}`}>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Earnings</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Refunds</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Decline</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Payouts</a></li>
                            </ul>
                        )}
                    </li>
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300 pl-4 m-3 py-2">
                    <BiSolidOffer className="w-6 h-6 text-gray-800 dark:text-gray-500"/>


                    <div className="flex cursor-pointer">
                        {display && (
                        <p className={`${fontColor} font-bold flex items-center mx-2`}>Promote</p>
                        )}

                        {display && (
                        <div className="flex">          
                            <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                            </svg>    
                        </div>
                        )}
                    </div>
                    
                </ul>
                
                <div className="flex flex-col">

                    <div className={`${divClass} shadow-2xl rounded-md`}>
                        <FaPlusCircle className={`w-12 h-12 mb-8 text-gray-800 rounded-full ${iconColor} align-middle`} />
                        
                        {isTextVisible && (
                        <>
                            <p className={`flex rounded-lg pl-2 font-bold ${fontColor}`}>Upload new image</p>
                            <p className={`pl-2 ${fontColor}`}>Drag and drop</p>
                        </>
                        )}
                    </div>

                    <div className={`${divContainerClass} flex gap-5 mt-10`}>
                        <div
                            className={`${lightButtonClass} flex justify-center rounded-lg border-b-2 border-gray-700 bg-white`}
                            onClick={() => {
                                toggleMode();
                                handleDarkMode();
                            }}
                        >  
                            <CiLight className="w-6 h-6 text-gray-800 dark:text-black"/>
                            {isTextVisible && <p>Light</p>}
                        </div>
                        
                        <div 
                            className={`flex justify-center rounded-lg border-b-2 border-gray-700 bg-white ${darkButtonClass}`}
                            onClick={() => {
                                toggleMode();
                                handleDarkMode();
                            }}
                        >  
                            <MdDarkMode className="w-6 h-6 text-gray-800 dark:text-black"/>
                            {isTextVisible && <p>Dark</p>}
                        </div>
                    </div>
                </div>
            </ul>
        </aside>)}