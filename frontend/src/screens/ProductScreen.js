import React from 'react'
import { Link,useParams } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,ListGroupItem,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import {products} from '../products'

const ProductScreen = ({match})=>{
  const { id } = useParams();
  const product = products.find((p)=> p._id === (id))
  return <>
     <Link className='btn btn-dark my-3' to='/'>
       Go Back
     </Link>
     <Row>
       <Col md={4}>
        <Image src={product.image} alt={product.name}/>
       </Col>
       <Col md={6}>
         <ListGroup variant="flush">
           <ListGroup.Item>
              <h3>{product.name}</h3>
           </ListGroup.Item>
           <ListGroup.Item>
           <Rating 
               value={product.rating} 
               text={`${product.numReviews} reviews`}
            />
           </ListGroup.Item>
            <ListGroupItem>
              Price:₹{product.price}
            </ListGroupItem>
            <ListGroup.Item>
              Description:{product.description}
            </ListGroup.Item>
         </ListGroup>
       </Col>
       <Col md={2}>
         <Card>
           <ListGroup variant='flush'>
             <ListGroup.Item>
             <Row>
               <Col>Price:</Col>
               <Col>
                <strong>₹{product.price}</strong>
               </Col>
             </Row>
             </ListGroup.Item>
             <ListGroup.Item>
             <Row>
               <Col>Status:</Col>
               <Col>
                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
               </Col>
             </Row>
             </ListGroup.Item>
             <ListGroupItem>
                <Button className="btn-block" type="button">
                  Add To Cart
                </Button>
             </ListGroupItem>
           </ListGroup>
         </Card>
       </Col>
     </Row>
  </>
}

export default ProductScreen;