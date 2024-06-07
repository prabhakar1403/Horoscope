import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import Navbar from './Navbar'

const Profile = () => {
    const {user} = useContext(UserContext);
    const num = Math.ceil(Math.random()*10);
    if(!user.name || !user.age || !user.birthMonth)
        return( 
            <>
                <Navbar />
                <div className='flex flex-col bg-slate-200 h-screen w-screen 
                items-center justify-center'> 
                <h1 className='font-bold text-3xl mb-20 hover:scale-110 
                hover:text-purple-600 hover:underline text-center m-2'>Please Provide All the Details</h1>
                </div>
            </>
        );
    return(
        <>
            <Navbar />
            <div className='flex flex-col bg-slate-200 h-screen items-center 
            justify-center'>
                <h2 className='font-bold text-3xl mb-20 hover:scale-110 hover:text-purple-600 hover:underline text-center'>
                    {user.name}'s Horoscope Result</h2>
                {num==1 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hi {user.name}</strong>, we took a deep dive into your cosmic alignments with the information you shared. The stars reveal a fantastic year ahead! With your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong>, you are destined to experience tremendous growth and success in all your endeavors. Stay positive, as your journey will be filled with joy and prosperity!
                </p>)}
                {num==2 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hello {user.name}</strong>, the celestial patterns have been analyzed, and the results are exhilarating! Your birth month: <strong>{user.birthMonth}</strong> combined with your Age: <strong>{user.age}</strong> indicates that you will attract an abundance of happiness and opportunities. Prepare for a series of fortunate events that will bring you immense satisfaction and achievements.
                </p>)}
                {num==3 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Greetings {user.name}</strong>, after reviewing your astrological chart with the details you provided, the forecast is simply incredible. This year, your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> are aligning perfectly to bring you luck and fortune. Anticipate a period of harmony and success, where all your hard work will be handsomely rewarded.
                </p>)}
                {num==4 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hi {user.name}</strong>, our celestial review of your provided details shows an exciting and prosperous future. The combination of your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> signifies a year full of breakthroughs and positive changes. Embrace the upcoming waves of good news and watch your dreams unfold beautifully.
                </p>)}
                {num==5 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hello {user.name}</strong>, the stars have been meticulously examined, and the insights are overwhelmingly positive! Your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> highlight a period of great luck and well-being. Expect to receive wonderful news and opportunities that will elevate your life to new heights of happiness and success.
                </p>)}
                {num==6 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Greeings {user.name}</strong>, we delved into the cosmic influences based on your provided information, and the outcome is extraordinary! The synergy between your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> promises a year filled with joy, love, and prosperity. Brace yourself for a fantastic journey ahead, where every moment will be a testament to your good fortune.
                </p>)}
                {num==7 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hello {user.name}</strong>, after an in-depth look at your astrological details, the predictions are fantastic! Your birth month: <strong>{user.birthMonth}</strong> coupled with your Age: <strong>{user.age}</strong> suggests a time of immense positive energy and growth. Get ready for exciting opportunities and abundant happiness to come your way!
                </p>)}
                {num==8 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hi {user.name}</strong>, the stars have been thoroughly examined using the details you shared, and the outlook is phenomenal. With your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong>, you're set to experience an extraordinary year. Expect to be surrounded by positivity and to achieve milestones that will bring you immense satisfaction and happiness.
                </p>)}
                {num==9 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Greetings {user.name}</strong>, our analysis of your celestial data reveals a spectacular year ahead. The unique combination of your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> indicates that you are on the brink of receiving many blessings. Anticipate a series of events that will bring you great joy and fulfillment in every aspect of your life.
                </p>)}
                {num==10 && (<p 
                    className='max-w-[calc(100%-60px)] text-center text-lg'>
                    <strong>Hello {user.name}</strong>, our detailed star reading shows that you have an amazing year ahead! The alignment of your birth month: <strong>{user.birthMonth}</strong> and your Age: <strong>{user.age}</strong> is incredibly auspicious, indicating a period of great luck and success. Embrace the positive changes coming your way, as you are about to embark on a journey filled with wonderful surprises and achievements.
                </p>)}
            </div>
        </>
    )
}

export default Profile 