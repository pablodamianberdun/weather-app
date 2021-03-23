import React, { Fragment, useState } from "react";
import { LOGO } from "../styles/Header.styled";
import { FormControl, Button, Navbar, Form } from "react-bootstrap";

function Header({ setCity, setGetApi }) {

    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
	const [expandNav, setExpandNav] = useState(false)

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
		e.preventDefault()
        if (search.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        setCity(search);
        setGetApi(true);
        setSearch("");
		setExpandNav(false)
    }

	const handleToggle = e => {
		setExpandNav(e)
	}
	

    return (
        <Fragment>
			
            <Navbar onToggle={handleToggle} expanded={expandNav} variant="dark" expand="md">
				<LOGO>Weather <br /> App<i className="fas fa-cloud ml-2"></i></LOGO>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="ml-auto mt-4 mt-lg-0 d-flex" onSubmit={handleSubmit}>
                        <FormControl
                            type="text"
                            placeholder="Search City"
                            className="mr-2"
							value={search}
							onChange={handleChange}
                        />
                        <Button variant="dark" type="submit"><i className="fas fa-search"></i></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            {error ? <p className="error">Enter a city</p> : null}
        </Fragment>
    );
}

export default Header;
