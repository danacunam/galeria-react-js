import Card from './Card'
import Loader from './Loader'
import Form from './Form'
import {useSearch} from '../hooks/useSearch'
const Cards = () => {

 const [images,Load,handleSubmit] = useSearch()

    return (
        <>
        
           <Form handleSubmit={handleSubmit}/>
             <hr />

            {Load && <Loader />} 
             <div className='row'>
                
                      {images.map((img)=>{ 

                        return <div key={img.id} className='col-4 border d-flex'> <Card  imagen={img.urls.regular} /> </div>
                                                    
                          })} 
               
             </div>    
        </>
    )
}

export default Cards
