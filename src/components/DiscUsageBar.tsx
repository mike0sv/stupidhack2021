import React, {useEffect, useState} from 'react';
import './DiscUsageBar.css';
import { IonProgressBar, IonContent } from '@ionic/react';
import {Plugins} from "@capacitor/core";

interface ContainerProps {

}
const { Device } = Plugins;




const DiscUsageBar: React.FC<ContainerProps> = ({  }) => {

    const [info, setInfo] = useState<any>(null)

    useEffect(() => {
        async function getInfo() {
            let response = await Device.getInfo();
            setInfo(response);
        }

        getInfo()
    }, [])

    return (
        <IonContent>
            <div>
                <pre>
                    {JSON.stringify(info, undefined, 2)}
                </pre>
            </div>
            {/*-- Default Progressbar --*/}
            <IonProgressBar></IonProgressBar><br />

            {/*-- Default Progressbar with 50 percent --*/}
            <IonProgressBar value={0.5}></IonProgressBar><br />

            {/*-- Colorize Progressbar --*/}
            <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
            <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />

            {/*-- Other types --*/}
            <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
            <IonProgressBar type="indeterminate"></IonProgressBar><br />
            <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
        </IonContent>
    )
};

export default DiscUsageBar;
