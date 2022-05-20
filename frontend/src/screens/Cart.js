import {React,useState} from 'react'
import {Row,Col,ListGroup,Card} from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
// import { Avatar } from 'primereact/avatar'; 
const Cart = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    if(count>=0){
      setCount(count);
    }
    else{
      count=0;
    }
  }
  return (
    <div>
        <Row>
            <Col md={8}>
              <h3>shopping cart</h3>
              <Row className='text-center'>
                  <Col md ={2}>
                  <img src="/images/saree1.jpg" class="rounded-square shadow-4 w-50"  alt="Avatar" />
                  </Col>
                  <Col md ={3} className='d-flex justify-content-center align-items-center'>
                      <span className='text-center text-muted'>
                          Red saree - Silk
                      </span>
                  </Col>
                  <Col md ={2} className='d-flex justify-content-center align-items-center'>
                  <span className='text-center text-muted'>
                     ₹600
                  </span>
                  </Col>
                  <Col md ={3} className='d-flex justify-content-center align-items-center'>
                      <Row className='d-flex justify-content-center align-items-center'>
                        <Col><button className="btn btn-sm shadow-none" onClick={incrementCount}> <span className='fa-2x'>+</span></button></Col>
                        <Col><div>{count}</div></Col>
                        <Col ><button className="btn btn-sm shadow-none" onClick={decrementCount}><span className='fa-2x'>-</span></button></Col>
                      </Row>
                  </Col>
                  <Col md ={2} className='d-flex justify-content-center align-items-center'>
                  <MdDelete className='text-dark'/>
                  </Col>
              </Row>
              <Row className='text-center'>
                  <Col md ={2}>
                  <img src="/images/saree2.jpg" class="rounded-square shadow-4 w-50"  alt="Avatar" />
                  </Col>
                  <Col md ={3} className='d-flex justify-content-center align-items-center'>
                      <span className='text-center text-muted'>
                          Pink saree - Silk
                      </span>
                  </Col>
                  <Col md ={2} className='d-flex justify-content-center align-items-center'>
                  <span className='text-center text-muted'>
                          600
                  </span>
                  </Col>
                  <Col md ={3} className='d-flex justify-content-center align-items-center'>
                      <Row className='d-flex justify-content-center align-items-center'>
                        <Col><button className="btn btn-sm shadow-none" onClick={incrementCount}> <span className='fa-2x'>+</span></button></Col>
                        <Col><div>{count}</div></Col>
                        <Col ><button className="btn btn-sm shadow-none" onClick={decrementCount}><span className='fa-2x'>-</span></button></Col>
                      </Row>
                  </Col>
                  <Col md ={2} className='d-flex justify-content-center align-items-center'>
                  <MdDelete className='text-dark'/>
                  </Col>
              </Row>
            </Col>
            <Col md={4}>
            <Card>
            <ListGroup variant="flush">
                <ListGroup.Item><h3 className='text-uppercase text-center'> Subtotal ({count}) Items </h3></ListGroup.Item>
                <ListGroup.Item>
                    <span>₹600</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href='/placeorder' className='btn btn-dark text-uppercase'>Proceed to checkout</a>
                </ListGroup.Item>
            </ListGroup>
            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Cart