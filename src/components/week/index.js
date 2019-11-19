import React from 'react';
import { StyledWeek } from './styles';

const Week = () => {

    const size = 20;

    return (
        <div>
            <StyledWeek size={size}/>
            <StyledWeek size={size}/>
            <StyledWeek size={size}/>
        </div>
    );
};


export default Week;
