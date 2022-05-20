import React from 'react'
import {Row,Col,Carousel} from 'react-bootstrap'
import Product from '../components/Product'
import {products} from '../products'
const HomeScreen = () => {
  return (
    <div>
      <div className='container mw-100'>
        <Row>
         <Col md={6} sm={12} className="justify-content-center row align-items-center">
            <div className="col-xs-1 text-center align-middle my-5">
                        <h1 className='fw-2 lh-lg'>The Summer sale is <span className="mark">ON</span> 
                        <br/>30% Discount, Lets Grab it!!</h1>
                        <a href='/cart' className='btn btn-outline-dark text-uppercase my-5'>buy now</a>
            </div>
        </Col>
        <Col md={6}>
          <Carousel className="justify-content-center">
          <Carousel.Item className="text-center" interval={1400}>
              <img
                className="img-responsive center-block d-block mx-auto"
                src="/images/redsaree1.png"
                alt="First slide"
              />
          </Carousel.Item>
          <Carousel.Item interval={1400}>
            <img
              className="img-responsive center-block d-block mx-auto"
              src="/images/pinksaree.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1400}>
            <img
              className="img-responsive center-block d-block mx-auto"
              src="/images/redpattu.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
      </div>
      <div>
        <h1> Latest Products</h1>
        <Row>
            {products.map(product=> (
                <Col key={product._id} sm={9} md={6} lg={4} xl={3}>
                  <Product  product ={product}/>
                </Col>
            ))}
        </Row>
      </div> 
    </div>
  )
}

export default HomeScreen