import React from 'react';
import './DiscUsageBar.css';
import { IonProgressBar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { selectClaimedByDog, selectTotal } from '../reducers/main';

const DiscUsageBar: React.FC = () => {

    const total = useSelector(selectTotal);
    const claimedByDog = useSelector(selectClaimedByDog);

    const ratio = claimedByDog / total;

    return (
        <div className={'DiskUsageBar-container'}>
            <IonProgressBar value={ratio}></IonProgressBar><br />
        </div>
    )
};

export default DiscUsageBar;
