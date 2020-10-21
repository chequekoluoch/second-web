import React, {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'
import Axios from 'axios'
const Proverbs = () => {
    const [proverbs, setProverbs]=useState([])
    useEffect(()=>{
         getProverb()
    },[])
    const getProverb=async()=>{
        const response=await Axios.get('../proverbs.json')
        setProverbs(response.data.proverbs)  
      }

    return (
        <div>
            {proverbs.map((proverb,i)=>(
                  <Card className="text-center ml-2 mr-2 mb-2 mt-3" border="secondary"  key={i}>
                  <Card.Body>
                    <Card.Title className="text-primary">{`" ${proverb.proverb}..."`}</Card.Title>
                    <Card.Text style={{fontFamily:'sans-serif'}}>
                     {`Explanation:  ${proverb.explanation}`}
                    </Card.Text>
                 </Card.Body>
               <Card.Footer  
               className='text-muted'
               style={{fontStyle:'italic',fontFamily:'monospace',color:'blue'}}>
                   {`Example :${proverb.example}`}</Card.Footer>
             </Card>
            ))}

        </div>
    )
}

export default Proverbs
