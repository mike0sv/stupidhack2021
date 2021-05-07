import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DiscUsageBar from '../components/DiscUsageBar';
import { useDispatch, useSelector } from 'react-redux';
import { addDoge, addNewFile, selectDogUsage, selectFiles } from '../reducers/main';
import DogLogo from '../components/DogLogo';
import DiskUsageInfo from '../components/DiskUsageInfo';


const Tab1: React.FC = () => {
    const dogUsage = useSelector(selectDogUsage);
    const files = useSelector(selectFiles);
    const dispatch = useDispatch();

    const addDogeClicked = useCallback(() => {
        console.log('lklkmlk');

        dispatch(addDoge());
    }, [dispatch])

    const addNewFileClicked = useCallback(() => {
        dispatch(addNewFile());
    }, [dispatch])

    return (
        <IonPage>
            {/*<IonHeader>*/}
            {/*    <IonToolbar>*/}
            {/*        <IonTitle>Tab 1</IonTitle>*/}
            {/*    </IonToolbar>*/}
            {/*</IonHeader>*/}
            <IonContent>
                <DogLogo />
                <div style={{padding: '10px'}}>
                    <DiskUsageInfo />
                    <DiscUsageBar dogUsage={dogUsage} />
                    <div className={'Tab1-button-centered'}>
                    <IonButton color="primary" onClick={addDogeClicked}>Ask for more</IonButton>
                    </div>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 1</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <pre>
                    {/*{JSON.stringify(files)}*/}
                </pre>
                    {/*<IonButton color="primary" onClick={addNewFileClicked}>Add file</IonButton>*/}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
