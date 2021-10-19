import React from "react";
import {Card, Button, Carousel} from "react-bootstrap";
import AboutCafe from "./AboutCafe";


const DiscountsList = (props) => {
    const value = props.value


    return (
        <div>
            <Card className='bg-primary text-white text-center' >
                <Card.Header>
                    <h2>{value.title}</h2>
                </Card.Header>
            </Card>
            <Carousel>
                {Object.values(value.discounts).map(value =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 overflow-hidden"
                            src={value.img}
                        />
                        <Carousel.Caption>
                            <Card className="bg-secondary text-dark"     >
                                <Card.Body>
                            <h2 >{value.name}</h2>
                            <h3>{value.date}</h3>
                            <p>{value.description}</p>
                            <AboutCafe value={props.value}/>
                                </Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default DiscountsList