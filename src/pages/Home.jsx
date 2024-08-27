import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtoWhishList } from '../redux/wishlistSlice';

function Home() {
  const response = useFetch('https://fakestoreapi.com/products')
  console.log('===========All products=============');
  console.log(response);
  const dispatch = useDispatch();


  return (
    <>
      <Row className='m-5'>
        {
          response?.length > 0 ?
          response.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} height={'200px'} className='mt-2' />
              <Card.Body>
                <Card.Title>{item.title.slice(0,20)+ (item.title.length > 20 ? "..." : "")}</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0,50)+ (item.description.length > 50 ? "..." : "")}</p>
                  <p className='fw-bolder'>Price: &#8377;{item.price}</p>
                  <p>Rating: {item.rating.rate} &#9734;</p>
                  </Card.Text>
                <div className='d-flex align-items-center justify-content-evenly'>
                  <Button className='w-50 me-2' variant="outline-danger" onClick={()=>dispatch(addtoWhishList(item))}><i className="fa-solid fa-heart me-2 "></i></Button>
                  <Button className='w-50' variant="outline-success"><i className="fa-solid fa-cart-shopping me-2 "></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):

            <div>
              <p>No item found</p>
            </div>
          
        }

      </Row>
    </>
  )
}

export default Home