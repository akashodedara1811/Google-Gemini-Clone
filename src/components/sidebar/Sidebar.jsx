import React, { useContext, useState , useEffect} from 'react'
import "./slidebar.css"
import {assets} from "../../assets/assets"
import {Context} from '../../context/Context';
function Sidebar() {
    const [extended,setExtended] = useState(false);
    const{onSent,prevprompt,setrecentPrompt,newhat,setNewchat,setresult} = useContext(Context)

    let setval=()=>{
      console.log("Working....")
      setNewchat(false);
      setresult((prev)=>!prev);
    }
  return(
    <div className='sidebar'>
        <div className="top">
           <img className='menu' src={assets.menu_icon} alt="" onClick={()=>setExtended(prev=>!prev)}/>
        <div className='newChat'>
            <img src={assets.plus_icon} alt="" onClick={()=>setval()}/>
            {extended?<p>New Chat</p>:null}
        </div>
        {extended
        ?<div className='recent'>
            <p className='recent-title'>Recent</p>
            {
              prevprompt.map((item,index)=>{
                return(
                    <div className="recent-entry" key={index}>
                        <img src={assets.message_icon} alt="" />
                      <p>{item}</p>
                    </div>
                )
              })
            }
             
           
        </div>
             :null
            }
        </div>
   
        <div className="bottom">
            <div className="bottom-icon recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-icon recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-icon recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}
export default Sidebar