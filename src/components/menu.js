import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";

const LinkContainer = styled.ul`
    position:fixed;
    top:0;
    left:0;
    padding:0;
    list-style-type: none;
    background-color: ${props=>props.theme.body};
`;

const LinkItem = styled.li`
    float:left;
`;
const LinkStyle = styled(Link)`
    display: block;
    color: ${props=>props.theme.text};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        background-color: ${props=>props.theme.menuHover};;
    }
`

export default function Menu() {
    return (
                <LinkContainer>
                    <LinkItem>
                        <LinkStyle to="/">Home</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/characters">Characters</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/planets">Planets</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/droids">Droids</LinkStyle>
                    </LinkItem>
                </LinkContainer>
    )
}