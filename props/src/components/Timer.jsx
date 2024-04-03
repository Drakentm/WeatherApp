import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000)

        return () => clearInterval(timer);
    },);

    const restart=()=>{
        setSeconds(0);
        setMinutes(0);
    }
    const stop=()=>{
        clearInterval(timer);
    }

    


    return (
        <div className=' flex justify-center items-center bg-blue-300 w-screen h-screen'>
            <div className=' flex flex-col items-center justify-center px-20 py-8 bg-slate-100 rounded-md shadow-lg' >
                <h1 className=' font-bold'>Timer</h1>
                <h1>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
                <div className='flex items-center flex-row mt-6'>
                    <button onClick={restart} className=' mr-6 bg-blue-300 px-5 py-2 rounded-lg text-white'>Restart</button>
                    
                    <button onClick={stop} className='  bg-blue-300 px-5 py-2 rounded-lg text-white'>Stop</button>
                </div>
            </div>

        </div>
    )
}
