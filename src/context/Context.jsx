import { createContext, useEffect, useState } from "react";
import run from "../components/config/gemini";
export const Context = createContext();



const ContextProvider = (props) =>{
  let first ="";
  let results="";
  const delaypar=(index,nextword)=>{
    if(index == 0)
    {
      first  = nextword.substring(9,nextword.length);
    }
    else
    {
      if(index ==1)
      {
        nextword = first + nextword;
      }
    setTimeout(() => {
       setresultData((prev)=>prev+nextword)
    }, 75*index);
  }
  }
 
 
  const[input,setinput] = useState("")
  const[recentPrompt,setrecentPrompt] = useState("")
  const[prevprompt,setprePrompt] = useState([])
  const[result,setresult] = useState(false);
  const[loading,setloading] = useState(false)
  const[resultData,setresultData] = useState("")
  const[newchat,setNewchat] = useState(false)

   let onSent = async() =>
   {
    setresultData("")
    setloading(true)
    setresult(true)
    setrecentPrompt(input) 
    setprePrompt(prev =>[...prev,input])
    const response = await run(input);
    let responseArray = response.split("**");
    let nreArray;
    for (let index = 0; index < responseArray.length; index++) {
      if(index == 0 || index % 2 !== 1)
      {
        nreArray += responseArray[index]
      }
      else
      {
        nreArray += responseArray[index]
      }
    }
    let newresponse2 = nreArray.split("*").join(".");
    let newresponsearray = newresponse2.split(" ");
    let nextword = ""; 
    for (let index = 0; index < newresponsearray.length; index++) { 
       nextword = newresponsearray[index];
      delaypar(index,nextword+" ");   
    }
    setloading(false)
    //setinput("")
   }
   const setval = {
    setNewchat,newchat,onSent,setinput,setloading,setresult,setprePrompt,setrecentPrompt,setresultData,input,recentPrompt,prevprompt,result,loading,resultData
   }
    return(
      <Context.Provider value={setval}>
          {props.children}
      </Context.Provider>
    )
}
export default ContextProvider;
