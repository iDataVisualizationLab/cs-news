import React from 'react';
import Footer from '../LayoutItem/Footer';
import Header from "../LayoutItem/Header";
import Container from "@mui/material/Container";
import"./index.css"

const LayoutAlternative = ({ children }) => (
    <React.Fragment>
        <div style={{position:'absolute',zIndex:1000,width:'100%',top:0}}>
            <Container style={{position:'relative'}}>
                <Header navPosition="right" />
            </Container>
        </div>
        <div className="site-content">
            {children}
        </div>
    </React.Fragment>
);

export default LayoutAlternative;
