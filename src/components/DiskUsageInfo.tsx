import React from 'react';
import './DiskUsageInfo.css';
import { useSelector } from 'react-redux';
import { selectClaimedByDog, selectTotal } from '../reducers/main';


const DiskUsageInfo: React.FC = () => {
    const total = useSelector(selectTotal);
    const claimedByDog = useSelector(selectClaimedByDog);

    return (
        <div className={'DiskUsageInfo-container'}>
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
