import React from 'react'
import {Row,Col,Table} from 'react-bootstrap'
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";

const Useradmin = () => {
  return (
    <div>
        <div className='mb-4'>
            <Row>
                <Col md={12} sm={6} className='text-center '>
                    <span><h3>aat order details</h3></span>
                </Col>
            </Row>
        </div>
        <Row>
            <Col md={12} sm={6}>
                <Table responsive striped hover size='sm'>
                    <thead>
                        <tr>
                            <th><h4>id</h4></th>
                            <th><h4>user</h4></th>
                            <th><h4>date</h4></th>
                            <th><h4>total</h4></th>
                            <th><h4>paid</h4></th>
                            <th><h4>Delivered</h4></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8ds734bf7f39c73ffb3894fb</td>
                            <td>Nanthini</td>
                            <td>2022-05-21</td>
                            <td>500</td>
                            <td>2022-05-21</td>
                            <td>
                                <BsFillHandThumbsDownFill className='text-danger'/>
                            </td>
                            <td>
                            <Row className='m-0 p-1'>
                                Details
                            </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>8ds734bf7f39c73ffb3894fb</td>
                            <td>Aliabhat</td>
                            <td>2022-05-15</td>
                            <td>1000</td>
                            <td>2022-05-15</td>
                            <td>
                                <BsFillHandThumbsUpFill className='text-success'/>
                            </td>
                            <td>
                            <Row className='m-0 p-1' >
                                Details
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