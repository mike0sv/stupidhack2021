import React from 'react';
import './DiskUsageInfo.css';
import { IonIcon } from '@ionic/react';
import { ChevronDownIcon, TriangleDownIcon } from '@primer/octicons-react';


const DiskUsageInfo: React.FC = () => {
    return (
        <div className={'DiskUsageInfo-container'}>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-label'}>
                    Greedy<br />
                    dog<br />
                    share
                </div>
                    <div className={'DiskUsageInfo-number'}>
                        33.2 Gb
                    </div>
            </div>
            <div className={'DiskUsageInfo-slider'}>
                <div className={'DiskUsageInfo-slider-line'}>
                </div>
                <div className={'DiskUsageInfo-slider-head'}>
                    <TriangleDownIcon size={32} />
                </div>
            </div>
            <div className={'DiskUsageInfo-label-wrapper'}>
                <div className={'DiskUsageInfo-label'}>
                    Your<br />
                    share
                </div>
                    <div className={'DiskUsageInfo-number'}>
                        1.2 Gb
                    </div>
            </div>
        </div>
    )
};

export default DiskUsageInfo;
