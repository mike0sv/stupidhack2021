import React, {useEffect, useMemo, useState} from 'react';
import './DiscUsageBar.css';
import {IonProgressBar, IonContent} from '@ionic/react';
import {DeviceInfo, Plugins} from "@capacitor/core";

interface ContainerProps {
    dogUsage: number
}

const {Device} = Plugins;


const DiscUsageBar: React.FC<ContainerProps> = ({dogUsage}) => {

    const [info, setInfo] = useState<DeviceInfo | null>(null)

    useEffect(() => {
        async function getInfo() {
            let response = await Device.getInfo();
            setInfo(response);
        }

        getInfo()
    }, [])

    let total = info?.diskTotal ?? 1000;
    let free = info?.diskFree ?? 500;
    let withoutDogs = total - free - dogUsage;
    let withoutDogsRatio = withoutDogs / total;
    let ratio = (total - free) / total;

    return (
        <div className={'DiskUsageBar-container'}>
            <div>
                {/*<pre>*/}
                {/*    {JSON.stringify(info, undefined, 2)}*/}
                {/*</pre>*/}
                {/*<pre>{JSON.stringify(dogUsage, undefined, 2)}</pre>*/}
            </div>

            <IonProgressBar value={withoutDogsRatio} buffer={ratio}></IonProgressBar><br/>

        </div>
    )
};

export default DiscUsageBar;
