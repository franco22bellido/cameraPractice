import React from 'react'
import { useState } from 'react'



const Camera = () => {

    const [videoProperties, setVideoProperties] = useState();


    const openCamera = async ()=> {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: true});
                videoProperties.srcObject = stream;
                videoProperties.play();
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <div>
          <video id='video' autoPlay ref={video => {setVideoProperties(video)}} ></video>
          <button onClick={()=> openCamera() } className="btn btn-success">open camera</button>
        </div>
    )
}


export default Camera