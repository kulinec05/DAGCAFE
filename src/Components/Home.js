import React, {useEffect, useState} from "react";
import Places from './Store'

import Cafe from "./Cafe";
import {Alert, Col, Container, Row, Button} from "react-bootstrap";


const Home = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    {Object.values(Places).map(value =>
                        <Cafe
                            key={value}
                            value={value}/>)}
                </Row>
            </Container>
        </div>
    )
}

export default Home