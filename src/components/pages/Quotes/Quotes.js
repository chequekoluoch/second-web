import React,{useEffect, useState} from 'react'
import { Card,Col, Row, Container } from 'react-bootstrap';
import Axios from 'axios';

const Quotes = () => {
    const [ quotes, setQuotes]=useState([])

    useEffect(()=>{
        getQuote()
      },[])
      const URL=`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      const getQuote=async()=>{
        const response=await Axios.get(URL)
        const dataQuotes=response.data.quotes
        //const randomNum=Math.floor(Math.random()*dataQuotes.length)
        //const randomQuote=dataQuotes[randomNum]
        setQuotes(dataQuotes)
        //setAuthor(randomQuote.author)
        console.log(dataQuotes)
      }

    return (
            <Container style={{ backgroundColor:'#1c2237',margin:'none'}}>
              <Row className='m-2'>
              {quotes.map((data, i)=>(
               <Col xs={4} md={4} className='mt-3 mb-3' key={i}>
                <Card className="text-center" border="secondary"  style={{transform:'scale(1.05)'}}>
                   <Card.Body>
                     <Card.Text style={{fontFamily:'sans-serif'}}>
                      {`" ${data.quote}..."`}
                     </Card.Text>
                  </Card.Body>
                <Card.Footer  
                style={{fontStyle:'italic',fontFamily:'monospace',color:'blue'}}>{`Author :${data.author}`}</Card.Footer>
              </Card>
             </Col>
              ))}
            </Row>
        </Container>
    )
}

export default Quotes
