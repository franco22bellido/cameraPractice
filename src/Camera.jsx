import React from 'react'



const Camera = () => {


    function openCamera() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                var video = document.getElementById('video');
                video.srcObject = stream;
                video.play();
            })
            .catch(function (error) {
                console.log("unable to open camera: "+ error);
            })
        }
    }



    return (
        <div>
          <video id='video' autoPlay></video>
          <button onClick={()=> openCamera() } className="btn btn-success">open camera</button>
        </div>
    )
}

export default Camera
