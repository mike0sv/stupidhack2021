import React, { useMemo } from 'react';
import './DiscUsageBar.css';
import { IonProgressBar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { selectBatteryDischargeOn, selectClaimedByDog, selectTotal } from '../reducers/main';

const DiscUsageBar: React.FC = () => {
    const batteryDischargeOn = useSelector(selectBatteryDischargeOn);
    const mainContainerClass = useMemo(() => {
        return batteryDischargeOn ? 'DiskUsageBar-container-crazy' : '';
    }, [batteryDischargeOn]);

    const total = useSelector(selectTotal);
    const claimedByDog = useSelector(selectClaimedByDog);

    const ratio = (total - claimedByDog) / total;

    return (
        <div className={mainContainerClass}>
            <IonProgressBar value={ratio}></IonProgressBar><br />
        </div>
    )
};

export default DiscUsageBar;
