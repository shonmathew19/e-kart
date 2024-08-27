import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
function Wishlist() {
  const whishListItem = useSelector((state) => state.wishlistReducer);
  console.log('============whishlist items in whishlist page========');
  console.log(whishListItem);
  const dispatch = useDispatch()


  return (
    <>
      <Link to={'/'}><Button className='m-5' variant="success"><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Button></Link>
      <Row className='m-5'>
        {
          whishListItem?.length > 0 ?
            whishListItem.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} className='mt-2' />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20) + (item.title.length > 20 ? "..." : "")}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50) + (item.description.length > 50 ? "..." : "")}</p>
                      <p className='fw-bolder'>Price: &#8377;{item.price}</p>
                      <p>Rating: {item.rating.rate} &#9734;</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-evenly'>
                      <Button className='w-50 me-2' variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}>
                        <i class="fa-solid fa-trash"></i>
                      </Button>
                      <Button className='w-50' variant="outline-success">
                        <i className="fa-solid fa-cart-shopping me-2 "></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :

            <div className='d-flex justify-content-center align-items-center flex-column fa-fade '>
              <img height={'300px'} width={'450px'} src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/media/6a7fbadba54f099e51e634281956fae0.jpg?resize=400x300&vertical=center" alt="" />
              <h2 className='text-danger'>YOUR WISHLIST IS EMPTY</h2>
            </div>

        }

      </Row>
    </>
  )
}

export default Wishlist