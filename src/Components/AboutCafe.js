import React, {useState} from "react";
import {Badge, Button, Container, Image, Offcanvas} from "react-bootstrap";

const AboutCafe = (props)=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const date = new Date
    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                Перейти в заведение
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{props.value.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Image src={props.value.img} roundedCircle/>
                <hr/>
                <Container className='mr-2'>
                    <h3>
                        Время работы {(date.getHours() >= props.value.worktime.from && date.getHours() < props.value.worktime.to)?
                        <Badge bg="success">{props.value.worktime.from}:00 - {props.value.worktime.to}:00</Badge>:
                        <Badge bg="danger">{props.value.worktime.from}:00 - {props.value.worktime.to}:00</Badge> }
                    </h3>
                </Container>
                <Offcanvas.Body>
                    {props.value.description.text}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AboutCafe