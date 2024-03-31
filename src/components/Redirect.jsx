import React from 'react'
import {useSearchParams} from 'react-router-dom'

const Redirect = () => {
    const [searchParams] = useSearchParams();
    const url =  searchParams.get("url")
    
    if(url.includes('http://') || url.includes('https://')){

        window.location.href = url
        
    }else if(url.endsWith('.com') || url.includes('www.')){
        let addHttp = 'http://'
        window.location.href = addHttp.concat(url);
    }
    else{
        let searchGoogle = 'https://www.google.com/search?q=';
        window.location.href = searchGoogle.concat(url);
    }
  return (
    <div>

    </div>
  )
}

export default Redirect