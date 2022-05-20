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
                            <th><h3>email</h3></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8ds734bf7f39c73ffb3894fb</td>
                            <td>Noor Arfin</td>
                            <td>noorarfin7728@gmail.com</td>
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
                            <td>Ranjith</td>
                            <td>ranjith7125@gmail.com</td>
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
                            <td>Nanthini</td>
                            <td>nanthinir.19cse@kongu.edu</td>
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