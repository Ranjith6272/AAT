import React from 'react'
import {Row,Col,Table} from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Useradmin = () => {
  return (
    <div>
        <div className='mb-4'>
            <Row>
                <Col md={12} sm={6} className='text-center '>
                    <span><h3>aat Product details</h3></span>
                </Col>
            </Row>
        </div>
        <Row>
            <Col md={12} sm={6}>
                <Table responsive striped hover size='sm'>
                    <thead>
                        <tr>
                            <th><h4>id</h4></th>
                            <th><h4>name</h4></th>
                            <th><h4>Price</h4></th>
                            <th><h4>Category</h4></th>
                            <th><h4>Brand</h4></th>
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
                            <Row className='m-0 p-1'>
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
                            <Row className='m-0 p-1' >
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
                            <Row className='m-0 p-1' >
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