import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Camera = () => {
    const [cameraMessage, setCameraMessage] = useState("este dispositivo no puede usar la camara de react");
    
    
    useEffect(()=> {
        
        if(navigator.mediaDevices){
            setCameraMessage("Let's get this party started");
            console.log(navigator.mediaDevices);
        }else{
            console.log("este dispositivo no puede usar la camara");
        }
    }, []);

  return (
    <div>
        <h1>{cameraMessage}  </h1>
    </div>
  )
}

export default Camera
