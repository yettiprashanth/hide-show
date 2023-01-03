

import React,{createContext,useState} from 'react'
import Hide from './Hide';

export const themeContext=createContext(null)
function App() {
  const [theme,setTheme]=useState("dark");
  const toggleThem=()=>{
    setTheme((curr)=>(curr==="light" ? "dark" :'light'))
  }
  return (
    <>
    <themeContext.Provider>
      <div className="hide" id={theme}>
      <Hide/>
      </div>
    </themeContext.Provider>
    
     
       </>
  );
}

export default App;
