import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, Nav, Navbar,CloseButton} from "react-bootstrap";
import {Link} from "react-router-dom";

const NaviBar = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand>DagCafe</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>

                        <Nav.Link> <Link to='/'
                                         style={{textDecoration: 'none', color: '#cccccc'}}>Главная</Link></Nav.Link>
                        <Nav.Link> <Link to='/discounts' style={{textDecoration: 'none', color: '#cccccc'}}>Акции</Link></Nav.Link>
                        <Nav.Link> <Link to='/contacts' style={{textDecoration: 'none', color: '#cccccc'}}>Контакты
                            сайта</Link>
                        </Nav.Link>
                    </Nav>
                    {/*<Form className="d-flex">
                        <FormControl
                            ref={textInput}
                            onChange={() => {
                                setSearch(textInput.current.value);}}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>*/}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NaviBar