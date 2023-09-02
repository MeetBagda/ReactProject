import React from 'react';

function About() {
    const h1Styles = {
        color: 'white',
        backgroundColor: 'red',
        width: 'fit-content',
        borderRadius: '10px',
        margin:'30px'
    };

    const paraStyles = {
        color: 'black',
        fontSize:'20px',
        width:'50vw',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'30px'
    };

    return (
        <div>
            <h1 style={h1Styles}>About University</h1>
            <div style={paraStyles}>
                <p>
                Darshan University (DU), is a prominent organization offering a broad slate of academic programs and professional courses for undergraduate, graduate and postgraduate programs in Engineering, Science & Technology. The University is located in peaceful and sylvan surroundings with distinctive collegiate structure, about 19 km from Rajkot, Gujarat, India. It was established as an Engineering Institute in the year 2009, by Shree G. N. Patel Education & Charitable Trust with the objective to impart quality education and training in various fields of Engineering and Technology. It has now been transformed to the DARSHAN UNIVERSITY through an Act by the Government of Gujarat under Gujarat State Private Universities (Amendment) Act, 2021 (Act no. 15).
                </p>
            </div>
        </div>
    );
}

export default About;
