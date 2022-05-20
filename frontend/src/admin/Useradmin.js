import React from 'react'
import {Row,Col,Table} from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Useradmin = () => {
  return (
    <div>
        <Row>
            <Col md={12} sm={6}>
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
                            <td>8ds734bf7f39c73ffb3894fb</td>
                            <td>Pinnk saree</td>
                            <td>₹890</td>
                            <td>cotton</td>
                            <td>Anoor</td>
                            <td>
                            <Row className='m-0 p-0'>
                                <Col className='text-center bg-white'>
                                   <FaEdit/>
                                </Col>
                                <Col className='text-center bg-danger'>
                                   <MdDelete className='text-white'/>
                                </Col>
                            </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>8ds734bf7f39c73ffb3894fb</td>
                            <td>Red floral Saree</td>
                            <td>₹500</td>
                            <td>Silk</td>
                            <td>Floral</td>
                            <td>
                            <Row className='m-0 p-0' >
                                <Col className='text-center bg-white'>
                                   <FaEdit/>
                                </Col>
                                <Col className='text-center bg-danger'>
                                   <MdDelete className='text-white'/>
                                </Col>
                            </Row>
                            </td>
                        </tr>
                        <tr>
                        <   td>8ds734bf7f39c73ffb3894fb</td>
                            <td>reddragon</td>
                            <td>₹1000</td>
                            <td>cotton</td>
                            <td>foral</td>
                            <td>
                            <Row className='m-0 p-0' >
                                <Col className='text-center bg-white'>
                                   <FaEdit/>
                                </Col>
                                <Col className='text-center bg-danger'>
                                   <MdDelete className='text-white'/>
                                </Col>
                            </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </div>
  )
}

export default Useradmin