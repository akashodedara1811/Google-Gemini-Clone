import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../../assets/assets'
import "./Main.css"
import {Context} from "../../context/Context"

function Main() {
    const {onSent,setinput,setloading,setresult,setprePrompt,setrecentPrompt,setresultData,input,recentPrompt,prevprompt,result,loading,resultData,setresponse,response,newchat} = useContext(Context);

     let checking = () =>{
   
    //CHECKING OFFLINE OR ONLINE
        if (!navigator.onLine) {
            setcheck((prev=>prev))
            alert("Pleae Check internet Connection....")
         }
         else
         {
            onSent()
         }
    }
    return (
    <div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
   {!result
   ?
   <>
   <div className="greet">
            <p><span>Hello ,  Coding Projects</span></p>
            <p>How Can i Help you Today</p>
        </div>
  
        <div className="cards">
            <div className='card'>
                <p>Suggest beautiful place to see on an upcomming road Trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className='card'>
                <p>Briefly summerize this concept: urban planing</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className='card'>
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className='card'>
                <p>Improve the redability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
   </>

   :<div className='result'>
        <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{input}</p>
        </div>
        <div className='result-data'>
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className='loading'>
                <hr />
                <hr />
                <hr />
            </div>

            :  
            <p>{resultData}</p>
            }
            
        </div>
   </div>
    }
        
   
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" onChange={(e)=>setinput(e.target.value)}  placeholder='Enter Propmpt here..'  />
            
                <div>
                    <img src={assets.send_icon} alt="" onClick={()=>checking()} className='btn-hover'/>
                </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, include about people, so double-click its responses.Your privacy and Gemini Apps.
                </p>
        </div>
    </div>
</div>
  )
}

export default Main