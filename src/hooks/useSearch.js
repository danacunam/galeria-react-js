import { useCallback, useEffect, useState } from 'react'


export const useSearch = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState('')
    const [Load, setLoad] = useState(true)
    
    const getInfo = useCallback ( async () =>{

            const key = 'client_id=h3GLUiv2wVsZcftMI-YuuMgwKTOSgb2cVmaZhCs19vE'
            let url = `https://api.unsplash.com/photos/?${key}`

            if (input!==''){
                /* encodeURI funcion de JS que completa los espacios en blanco en las búsquedas */

                url =`https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}` ;
            }
            setLoad(true)
            const res = await fetch(url)
            const data = await res.json()
        
            if (data.results){
                setImages(data.results)
              
            }else{
                setImages(data);     
            } 
            setLoad(false)
           
        },[input]
   )


    useEffect(() => {
        getInfo()
    }, [getInfo])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const text = (e.target[0].value)
        setInput(text)
    }
    return [images,Load,handleSubmit]
}



