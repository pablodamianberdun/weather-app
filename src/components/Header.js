import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: white;
    background-color: #0868cd;
    font-family: "Lobster", cursive;
    margin: 0;
    padding: 10px 20px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`;

const InputWrapper = styled.div`
    background-color: #1577df;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    max-width: 60%;
`;

const SearchInput = styled.input`
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    display: block;
	width: 70%;
	height: 20px;
	text-align: center;
    padding: 10px;
    background-color: #1577df;
    color: white;
    border: none;

    &::placeholder {
        color: white;
    }

    &:focus {
        outline: none;
    }
`;

const SearchIcon = styled.i`
    margin-right: 5px;
    font-size: 20px;
    &:hover {
        cursor: pointer;
    }
`;

function Header({setCity, setGetApi}) {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function saveCity() {
        if (search.trim() === "") {
            setError(true);
            return;
		}
		setError(false)
	
		setCity(search)

		setGetApi(true)

		setSearch('')
	}

    return (
        <Fragment>
            <Title>
                Weather <br /> App
                <InputWrapper>
                    <SearchInput
                        type="text"
                        placeholder="Search city"
						onChange={handleChange}
						value={search}
                    />
                    <SearchIcon
                        className="fas fa-search"
                        onClick={saveCity}
                    ></SearchIcon>
                </InputWrapper>
            </Title>
            {error ? <p className="error">Enter a city</p> : null}
        </Fragment>
    );
}

export default Header;
