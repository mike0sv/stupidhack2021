import React from 'react';
import './DogLogo.css';


const DogLogo: React.FC = () => {
    return (
        <div className={'DogLogo-page'}>
            <img src={'/assets/dog.png'} className={'DogLogo-dog'}/>
            <img src={'/assets/disk1.png'} className={'DogLogo-disk1'}/>
            <img src={'/assets/disk2.png'} className={'DogLogo-disk2'}/>
            <img src={'/assets/disk3.png'} className={'DogLogo-disk3'}/>
        </div>
    )
};

export default DogLogo;
