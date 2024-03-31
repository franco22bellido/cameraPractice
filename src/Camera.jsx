import React from 'react'
import { useState } from 'react'
import QrScanner from 'qr-scanner';


const Camera = () => {
    const constraints = {
        video: {
          width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
          },
          height: {
            min: 720,
            ideal: 1080,
            max: 1440
          },
          facingMode: 'environment'
        }
      };

    const [videoProperties, setVideoProperties] = useState();
    const [qrDecoded, setQrDecoded] = useState("");


    const openCamera = async ()=> {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: {
                    facingMode : 'environment'
                }});
                videoProperties.srcObject = stream;
                videoProperties.play();
                
                
                const scan = ()=> {
                    try {
                       
                            setTimeout(()=> {
                                const qrScanner = new QrScanner(
                                    videoProperties,
                                    result => setQrDecoded(result),
                                    { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
                                );
                                qrScanner.start();
                                console.log("scaneando");
                            }, 300);
                       
                    } catch (error) {
                        console.log(error);
                    }
                  }
                  scan();

            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <div>
          <video id='video' autoPlay ref={video => {setVideoProperties(video)}} ></video>
          <h1>{qrDecoded}</h1>
          <button onClick={()=> openCamera() } className="btn btn-success">open camera</button>
        </div>
    )
}


export default Camera