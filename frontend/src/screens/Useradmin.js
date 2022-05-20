import React from 'react'
import {Row,Col,Card,ListGroup, ListGroupItem, Table} from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Useradmin = () => {
  return (
    <div>
        <Row>
            <Col md={12} sm={6}>
                <Card>
                    <ListGroup Variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col><h3>id</h3></Col>
                                <Col><h3>name</h3></Col>
                                <Col><h3>price</h3></Col>
                                <Col><h3>category</h3></Col>
                                <Col><h3>brand</h3></Col>
                                <Col></Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>5hbebdjhafb</Col>
                                <Col>Airpods Wireless bluetooth headphones</Col>
                                <Col>$89.99</Col>
                                <Col>Electronics</Col>
                                <Col>Apple</Col>
                                <Col>Edit  Delete</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>5hbebdjhafb</Col>
                                <Col>Airpods Wireless bluetooth headphones</Col>
                                <Col>$89.99</Col>
                                <Col>Electronics</Col>
                                <Col>Apple</Col>
                                <Col>Edit  Delete</Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                <Table responsive striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th><h3>id</h3></th>
                            <th><h3>name</h3></th>
                            <th><h3>Price</h3></th>
                            <th><h3>Category</h3></th>
                            <th><h3>Brand</h3></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Airpods Wireless bluetooth headphones</td>
                            <td>$89.99</td>
                            <td>Electronics</td>
                            <td>Realme</td>
                            <td>
                            <Row>
                                <Col>
                                   <FaEdit/>
                                </Col>
                                <Col>
                                  <MdDelete/>
                                </Col>
                            </Row> 
                            
                            
                                {/* <Row>
                                    <Col>
                                    <Nav.Link>
                                        <i class="bi bi-pencil-square"></i>
                                    </Nav.Link>
                                        

                                        <i class="bi bi-trash3-fill"></i>
                                    </Col>
                                </Row> */}
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Red floral Saree</td>
                            <td>$500</td>
                            <td>Silk</td>
                            <td>Floral</td>
                            <td>Edit  delete</td>
                        </tr>
                        <tr>
                        <   td>03</td>
                            <td>Ideapad 5 14ITL05</td>
                            <td>$100</td>
                            <td>Electronics</td>
                            <td>Lenovo</td>
                            <td>Edit  delete</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </div>
  )
}

export default Useradmin