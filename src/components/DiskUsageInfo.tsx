import React from 'react';
import './DiskUsageInfo.css';
import { IonIcon } from '@ionic/react';
import { ChevronDownIcon, TriangleDownIcon } from '@primer/octicons-react';


const DiskUsageInfo: React.FC = () => {
    return (
        <div className={'DiskUsageInfo-container'}>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-number'}>
                    1.2 Gb
                </div>
                <div className={'DiskUsageInfo-label'}>
                    free<br />
                    disk space
                </div>
            </div>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-number'}>
                    33.2 Gb
                </div>
                <div className={'DiskUsageInfo-label'}>
                    Claimed by<br />
                    the Greedy Dog
                </div>
            </div>
        </div>
    )
};

export default DiskUsageInfo;
