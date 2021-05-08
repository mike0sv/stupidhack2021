import React, { useMemo } from 'react';
import './DogLogo.css';
import { DogState, selectBatteryDischargeOn } from '../reducers/main';
import { RubyIcon } from '@primer/octicons-react';
import { useSelector } from 'react-redux';


interface ContainerProps {
    state: DogState;
    text: string | null;
    premium: boolean;
}

const DogLogo: ({ state }: ContainerProps) => any = ({premium, state, text}) => {

    const batteryDischargeOn = useSelector(selectBatteryDischargeOn);

    const dogClass = useMemo(() => {
        if(batteryDischargeOn) {
            return 'DogLogo-dog-front DogLogo-dog-crazy';
        }
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
    }, [state, batteryDischargeOn]);

    const dogImage = useMemo(() => {
        if(state === 'anxiety' && !batteryDischargeOn) {
            return '/assets/dog-anxiety2.png';
        }
        return '/assets/dog.png'
    }, [state, batteryDischargeOn])

    return (
        <div className={'DogLogo-page'}>
            <div className={'DogLogo-page-inner'}>
            {premium && <div className={'DogLogo-premium'}><RubyIcon size={16} /> PREMIUM USER</div>}
            <div className={'DogLogo-text'}>{text}</div>
            <img src={dogImage} className={dogClass}/>
            <img src={'/assets/disk1.png'} className={batteryDischargeOn ? 'DogLogo-disk-crazy' : 'DogLogo-disk1'}/>
            <img src={'/assets/disk2.png'} className={batteryDischargeOn ? 'DogLogo-disk-crazy' : 'DogLogo-disk2'}/>
            <img src={'/assets/disk3.png'} className={batteryDischargeOn ? 'DogLogo-disk-crazy' : 'DogLogo-disk3'}/>
            </div>
        </div>
    )
};

export default DogLogo;
