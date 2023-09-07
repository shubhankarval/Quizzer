import React from 'react'
import './Loader.css'
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loader() {
  return (
    <div className='loader'>
      <PacmanLoader 
        color={"#cc60e7"}
        size={35}/>
        <p>Please wait while server is responding.</p>
        <p>Might take upto 30 seconds.</p>
    </div>
  )
}
