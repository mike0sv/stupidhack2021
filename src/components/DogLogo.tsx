import React, { useMemo } from 'react';
import './DogLogo.css';
import { DogState } from '../reducers/main';


interface ContainerProps {
    state: DogState;
    text: string | null;
}

const DogLogo: ({ state }: ContainerProps) => any = ({state, text}) => {
    const dogClass = useMemo(() => {
        switch (state) {
            case 'intro':
                return 'DogLogo-dog-front DogLogo-dog-intro';
            case 'shaking':
                return 'DogLogo-dog-front DogLogo-dog-shaking';
            case 'anxiety':
                return 'DogLogo-dog-side DogLogo-dog-anxiety';
            default:
                return 'DogLogo-dog-front';
        }
    }, [state]);

    const dogImage = useMemo(() => {
        if(state === 'anxiety') {
            return '/assets/dog-anxiety2.png';
        }
        return '/assets/dog.png'
    }, [state])

    return (
        <div className={'DogLogo-page'}>
            <div className={'DogLogo-page-inner'}>
            <div className={'DogLogo-text'}>{text}</div>
            <img src={dogImage} className={dogClass}/>
            <img src={'/assets/disk1.png'} className={'DogLogo-disk1'}/>
            <img src={'/assets/disk2.png'} className={'DogLogo-disk2'}/>
            <img src={'/assets/disk3.png'} className={'DogLogo-disk3'}/>
            </div>
        </div>
    )
};

export default DogLogo;
