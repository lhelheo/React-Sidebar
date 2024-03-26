import { useState } from "react";

export const Sidebar = () => {
    // Lembrar de mudar o cursor ao passar por algum elemento que poderá ser clicado
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState(true);
    const [isWidthReduced, setIsWidthReduced] = useState(false);
    const [selectedMode, setSelectedMode] = useState('light');
    const [divVisible, setDivVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('bg-white'); // Novo estado
    const [fontColor, setFontColor] = useState('text-[#868b90]');
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
        setDivContainerClass(prevState => prevState === ' flex-col w-16' ? ' flex-row ml-10 mt-5' : ' flex-col w-16');
    }

    const handleDarkMode = () => {
        setBackgroundColor(prevState => prevState === 'bg-white' ? 'bg-gray-950' : 'bg-white');
        setFontColor(prevState => prevState === 'text-white' ? 'text-[#868b90]' : 'text-white'); // Altera a cor do texto   
    }

    const toggleMode = () => {
        setSelectedMode(prevState => prevState === 'light' ? 'dark' : 'light');
    };
    
    const ulClassName = isWidthReduced
        ? 'w-20 transition-width duration-300 ease-in-out'
        : 'w-72 transition-width duration-300 ease-in-out';
    
    const divClass = divVisible
        ? 'w-5/6 h-56 border-dashed border-2 border-gray-300 mx-auto rounded-md flex flex-col mt-56 justify-center items-center'
        : 'w-5/6 h-20 mx-auto flex flex-col mt-64 items-center';

    const darkButtonClass = `flex px-4 rounded-lg hover:font-bold cursor-pointer ${
        selectedMode === 'dark' ? '' : ''
    }`;
    const lightButtonClass = `flex px-4 rounded-lg hover:font-bold cursor-pointer ${
        selectedMode === 'light' ? '' : ''
    }`;

    
    return(
        
        <aside className="flex bg-[#E6E6E6]">
            
            <ul className={`relative h-screen ${backgroundColor} ${ulClassName}`}> 
                <button onClick={handleDisplay}>
                <svg className="absolute -right-3 bg-white shadow-xl rounded-full top-12 w-6 h-6 p-1 text-gray-800 dark:text-black" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                fill="none" 
                viewBox="0 0 24 24"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                </svg>
                </button>
                
                <svg className="w-10 h-10 text-gray-800 dark:text-white bg-[#2c2f32] rounded-lg m-5 mb-7 px-2" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                </svg>

                <ul className="flex bg-slate-200 hover:bg-gray-300 rounded-lg pl-4 m-3 py-2 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-800 dark:text-[#2C2F32]" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                    </svg>
                    {display && ( 
                        <li className={`font-bold flex items-center mx-2`}>Dashboard</li>
                    )}
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300  pl-4 m-3 py-2 cursor-pointer">
                    <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90]" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    {display && (
                    <li className={`font-bold ${fontColor} flex mx-2`}>Audience</li>
                    )}
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300 pl-4 m-3 py-2">
                    <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90]" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                    </svg>
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
                    <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90]" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                    </svg>
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
                className="flex items-stretch hover:bg-gray-300 rounded-lg pl-4 m-3 py-2 cursor-pointer">
                    <li className="relative flex" onClick={() => setShow(!show)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
                        </svg>
                        <a href="#" className={`flex rounded-lg pl-2 font-bold ${fontColor}`}>
                        {display && (
                        <p className={`${fontColor}`}>Incoming</p>
                        )}
                        {display && (                    
                            <svg className="w-6 h-6 text-gray-800 dark:text-[#868b90] ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{transform: show ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease"}}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                            </svg>
                        )}
                        </a>

                        {show && (
                            <ul className={`absolute border-l-4 border-solid border-gray-300 mt-8 rounded-lg" ${backgroundColor} ${fontColor}`}>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Earnings</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Refunds</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Decline</a></li>
                                <li className="block p-1 pl-6 pr-24 font-bold"><a href="#" className="hover:bg-gray-300 p-2">Payouts</a></li>
                            </ul>
                        )}
                    </li>
                </ul>

                <ul className="flex rounded-lg hover:bg-gray-300 pl-4 m-3 py-2">
                    <svg className="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"/>
                    </svg>

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
                
            <div className="">
                <div className={`${divClass} py-0.5 mx-auto shadow-2xl rounded-md`}>
                    <svg className="w-12 h-12 mb-8 text-gray-800 dark:text-white bg-blue-500 rounded-full align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                    {isTextVisible && (
                    <>
                        <p className={`flex rounded-lg pl-2 font-bold ${fontColor}`}>Upload new image</p>
                        <p className={`pl-2 ${fontColor}`}>Drag and drop</p>
                    </>
                    )}
                </div>

                <div className={`${divContainerClass} flex justify-stretch gap-5 mt-10`}>
                    <div
                        className={`${lightButtonClass}  rounded-lg border-b-2 border-gray-700 bg-white`}
                        onClick={() => {
                            toggleMode();
                            handleDarkMode();
                        }}
                    >

                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                            />
                        </svg>
                        {isTextVisible && <p>Light</p>}
                    </div>
                    <div 
                        className={` rounded-lg border-b-2 border-gray-700 bg-white ${darkButtonClass}`}
                        onClick={() => {
                            toggleMode();
                            handleDarkMode();
                        }}
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                            />
                        </svg>
                        {isTextVisible && <p>Dark</p>}
                    </div>
                </div>
            </div>
            </ul>
        </aside>)}