import React from 'react'
import {Row,Col,Card,ListGroup} from 'react-bootstrap'
const Placeorder = () => {
  return (
    <div>
        <Row>
            <Col md={8}>
            <ListGroup variant="flush" className='mb-4'>
                <ListGroup.Item className='mb-4'>
                <Row>
                    <Col className='mb-2'><h3 className='mb-3'>Shipping</h3>
                    <span className='muted'>Address: 10 alangatanoor ,Naduvaneri,637504</span></Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item className='mb-4'>
                <Row>
                    <Col className='mb-2'><h3 className='mb-3'>Payment Method</h3>
                     <span className='muted'>Method:Cash on Delivery</span></Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item className='mb-4'>
                <Row>
                    <Col className='mb-2'>
                    <h3 className='mb-3'>Order Items</h3>
                    <card>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>
                        <Row>
                            <Col>RED SAREE-SILK SAREE</Col>
                            <Col>1. RS.600</Col>
                        </Row>
                        <ListGroup.Item>
                        <Row>
                            <Col>PINK SAREE-SILK SAREE</Col>
                            <Col>2. RS.600</Col>
                        </Row>
                </ListGroup.Item>
                </ListGroup.Item>
                        </ListGroup>
                    </card>
                    </Col>
                </Row>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md = {4}>
            <Card>
            <ListGroup variant="flush">
                <ListGroup.Item><h3 className='text-uppercase text-center'> Order summary</h3></ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Items</Col>
                        <Col>1000</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Shipping</Col>
                        <Col>0.00</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Tax</Col>
                        <Col>180</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Total</Col>
                        <Col>1180</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href = "/" className='btn btn-dark btn-block text-uppercase'>Place order</a>
                </ListGroup.Item>
            </ListGroup>
            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Placeorder