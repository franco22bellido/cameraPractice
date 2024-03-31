import React from 'react'
import { useState } from 'react'
import QrScanner from 'qr-scanner';
import Modal from './components/Modal';
import { useEffect } from 'react';


const Camera = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [videoProperties, setVideoProperties] = useState();
    const [qrDecoded, setQrDecoded] = useState("www.google.com");

    const openCamera = async () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: 'environment'
                    }
                });
                // videoProperties.srcObject = stream;
                // videoProperties.play();
                let video = document.getElementById('video');
                video.srcObject = stream;
                video.play();

                const qrScanner = new QrScanner(
                    video,
                    result => setQrDecoded(result)
                );
                qrScanner.start();

            } catch (error) {
                console.log(error);
            }

        }
    }
    // useEffect(()=> {
    //     handleShow();
    // }, [qrDecoded])

    return (
        <section className='container'>
            <div className='row'>
                <div className='card col-md-8 mx-auto'>
                    <video className='card-img-top mx-auto mt-3' id='video' autoPlay ref={video => { setVideoProperties(video) }} ></video>
                    <div className='card-body'>
                        <h5 className='card-title'>{qrDecoded}</h5>
                        <button onClick={() => openCamera()} className="btn btn-success">Scan Qr</button>
                    </div>
                </div>
            </div>
            <Modal handleClose={handleClose} show={show} qrDecoded={qrDecoded}/>
            {/* <button onClick={()=> handleShow()}>abrir modal </button> */}

        </section>
    )
}


export default Camera