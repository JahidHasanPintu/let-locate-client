import React from 'react';
import Roomate from './Roomate';

const Roomates = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 pl-4 me-auto'>
                <Roomate></Roomate>
                <Roomate></Roomate>
                <Roomate></Roomate>
                <Roomate></Roomate>
            </div>
        </div>
    );
};

export default Roomates;