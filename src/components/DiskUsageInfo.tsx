import React, { useMemo } from 'react';
import './DiskUsageInfo.css';
import { useSelector } from 'react-redux';
import { selectBatteryDischargeOn, selectClaimedByDog, selectTotal } from '../reducers/main';


const DiskUsageInfo: React.FC = () => {
    const total = useSelector(selectTotal);
    const claimedByDog = useSelector(selectClaimedByDog);
    const batteryDischargeOn = useSelector(selectBatteryDischargeOn);

    const mainContainerClass = useMemo(() => {
        return batteryDischargeOn ? 'DiskUsageInfo-container DiskUsageInfo-container-crazy' : 'DiskUsageInfo-container';
    }, [batteryDischargeOn]);

    return (
        <div className={mainContainerClass}>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-number'}>
                    {((total - claimedByDog) / 1024 / 1024 / 1024) .toFixed(1)} Gb
                </div>
                <div className={'DiskUsageInfo-label'}>
                    free<br />
                    disk space
                </div>
            </div>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-number'}>
                    {((claimedByDog) / 1024 / 1024 / 1024) .toFixed(1)} Gb
                </div>
                <div className={'DiskUsageInfo-label'}>
                    Claimed by<br />
                    Greedy Dog
                </div>
            </div>
        </div>
    )
};

export default DiskUsageInfo;
