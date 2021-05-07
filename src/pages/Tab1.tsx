import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DiscUsageBar from "../components/DiscUsageBar";
import { useDispatch, useSelector } from 'react-redux';
import { addDoge, addNewFile, selectDogUsage, selectFiles } from '../reducers/main';



const Tab1: React.FC = () => {
    const dogUsage = useSelector(selectDogUsage);
    const files = useSelector(selectFiles);
    const dispatch = useDispatch();

    const addDogeClicked = useCallback(() => {
        console.log("lklkmlk");

        dispatch(addDoge());
    }, [dispatch])

    const addNewFileClicked = useCallback(() => {
        dispatch(addNewFile());
    }, [dispatch])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 1 page"/>
                <DiscUsageBar dogUsage={dogUsage}/>
                <IonButton color="primary" onClick={addDogeClicked}>Add doges</IonButton>
                <IonButton color="primary" onClick={addNewFileClicked}>Add file</IonButton>
                <pre>
                    {JSON.stringify(files)}
                </pre>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
