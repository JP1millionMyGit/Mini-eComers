import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [cumple, setCumple] = useState(()=>{
    if(typeof window !== 'undefined'){
      return window.matchMedia(query).matches;
    }else return false
  })

  useEffect(()=>{
    const media = window.matchMedia(query);
    const listener = ()=> setCumple(media.matches)
    
    media.addEventListener('change', listener);

    return ()=> media.removeEventListener('change', listener);

  }, [query]);

  return cumple
}


export default useMediaQuery
