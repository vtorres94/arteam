import React, { useState } from 'react';
import '../css/Body.css';

export interface IProps {

}

const Body: React.FunctionComponent<IProps> = (props:any) => {
    return (
        <div className="body-bg">
            <h1 className="intro-section">Agenda tu cita</h1>
        </div>    
    )
}

export default Body;
