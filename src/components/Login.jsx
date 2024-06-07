import React, { useContext } from 'react'
import { useState } from 'react';
import UserContext from '../context/UserContext';
import Navbar from './Navbar';
import ButtonContext from '../context/ButtonContext';

const Login = () => {
    const [name, setName] =useState();
    const {setClicked} = useContext(ButtonContext)
    const [age, setAge] = useState();
    const [birthMonth, setBirthMonth] = useState();
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name, age, birthMonth})
        setClicked((prev) => !prev);
    }
  return (
    <>
    <Navbar />
       <h2 className='text-center text-2xl font-bold font-serif'>Please Enter your Details to know your Horoscope</h2>
        <div className='flex flex-col items-center w-screen'>
            <input type="text"
            placeholder='Enter your Name' 
            className='mt-8 mb-1 p-2 text-center bg-slate-300 text-black font-bold rounded-lg
            hover:bg-slate-100'
            value={name}
            onChange={(e) =>
                setName(e.target.value)
            }
            />
            <input type="text"
            placeholder='Enter your Age'
            className='mb-1 p-2 text-center bg-slate-300 text-black font-bold rounded-lg
            hover:bg-slate-100'
            value={age}
            onChange={(e) =>
                setAge(e.target.value)
            }
            />
            <input type="text"
            placeholder='Enter your Birth Month'
            className='mb-5 p-2 text-center bg-slate-300 text-black font-bold rounded-lg
            hover:bg-slate-100'
            value={birthMonth}
            onChange={(e) =>
                setBirthMonth(e.target.value)
            }
            />
            <button 
            className='p-1 px-5 bg-slate-400 hover:scale-110 text-black font-bold font-serif'
            onClick={handleSubmit}>Submit</button>
        </div>
    </>
  )
}

export default Login