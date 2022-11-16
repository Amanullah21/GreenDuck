import React from 'react';
import { useSelector } from 'react-redux';
import styled from "../style/about.module.css"

const About = () => {
    const page = useSelector((state) => state.page);
    return (
        <div className={styled.box}>
            <h1>About page</h1>
            <h1>{page}</h1>
        </div>
    );
};

export default About;