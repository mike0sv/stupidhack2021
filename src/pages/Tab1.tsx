import React, { useCallback } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import DiscUsageBar from '../components/DiscUsageBar';
import { useDispatch, useSelector } from 'react-redux';
import { addDoge, removeDoge, selectDogState, selectText } from '../reducers/main';
import DogLogo from '../components/DogLogo';
import DiskUsageInfo from '../components/DiskUsageInfo';

const Tab1: React.FC = () => {
    const dogState = useSelector(selectDogState);
    const text = useSelector(selectText);
    const dispatch = useDispatch();

    const addDogeClicked = useCallback(() => {
        dispatch(addDoge());
    }, [dispatch])

    const removeDogeClicked = useCallback(() => {
        dispatch(removeDoge());
    }, [dispatch])

    return (
        <IonPage>
            <IonContent>
                <DogLogo state={dogState} text={text} />
                <div style={{ padding: '10px' }}>
                    <DiskUsageInfo />
                    <DiscUsageBar />
                    <div className={'Tab1-button-centered'}>
                        <IonButton color="primary" onClick={addDogeClicked}>Ask for more space</IonButton>
                        <IonButton color="primary" onClick={removeDogeClicked}>Give space bacc</IonButton>
                    </div>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 1</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <pre>
                </pre>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
