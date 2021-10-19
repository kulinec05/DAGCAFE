import React from "react";
import { Card, Col, Accordion} from "react-bootstrap";
import AboutCafe from './AboutCafe'

const Cafe = (props) => {
    return (
        <Col>
            <Card bg='secondary' style={{width: '19rem', padding: '1px', marginTop: '2rem'}}>
                <Card.Img variant='top' style={{width: 'auto'}} src={props.value.img}/>
                <Card.Body>
                    <Card.Title>{props.value.title}</Card.Title>
                    <Card.Text>
                        <Accordion bg='primary'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>{props.value.description.title}</Accordion.Header>
                                <Accordion.Body>
                                    {props.value.description.text}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                    <AboutCafe value={props.value}/>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cafe