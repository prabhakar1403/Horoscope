import React, { useContext } from 'react'
import ButtonContext from '../context/ButtonContext'

const Navbar = () => {
    const {clicked, setClicked} = useContext(ButtonContext)
    const handleClick = (e) => {
        e.preventDefault();
        setClicked((prev) => !prev);
    }
        return(
            <>
                <nav className='bg-slate-300 fixed top-0 w-screen flex justify-between'>
                    <h1 className='py-3 px-4 font-serif text-xl font-bold 
                        hover:text-slate-500 cursor-pointer'>
                        Sunclave's Horoscope
                    </h1>
                    {!clicked && (<button 
                        className='p-1 px-3 m-2 bg-slate-400 
                        hover:scale-110 mr-7 font-bold hover:text-white'
                        onClick={handleClick}>
                        Back
                    </button>)}
                </nav>
                <footer className='fixed bottom-0 w-screen bg-slate-200 pb-2 pt-1'>
                    <h3 className='ml-2 font-serif text-xs cursor-pointer'>1999. PrabhakarSingh All rights reserved</h3>
                </footer>
            </>
    );
}

export default Navbar