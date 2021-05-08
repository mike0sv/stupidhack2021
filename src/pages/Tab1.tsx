import React, { useCallback, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import DiscUsageBar from '../components/DiscUsageBar';
import { useDispatch, useSelector } from 'react-redux';
import { addDoge, init, removeDoge, selectDogState, selectText } from '../reducers/main';
import DogLogo from '../components/DogLogo';
import DiskUsageInfo from '../components/DiskUsageInfo';
import { RubyIcon } from '@primer/octicons-react';

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

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    return (
        <IonPage>
            <IonContent>
                <DogLogo state={dogState} text={text} />
                <div style={{ padding: '15px' }}>
                    <DiskUsageInfo />
                    <DiscUsageBar />
                    <div className={'Tab1-button-centered'}>
                        <div className={'Tab1-button-wrapper'}>
                            <IonButton color="primary" expand="block" onClick={addDogeClicked} size={'large'}>Ask for
                                more space</IonButton>
                        </div>
                        <div className={'Tab1-button-wrapper'}>
                            <IonButton color="danger" expand="block" onClick={removeDogeClicked} size={'large'}>Give
                                space bacc</IonButton>
                        </div>
                    </div>
                    <div className={'Tab1-footer'}>
                        <IonButton color="warning" size={'small'} onClick={removeDogeClicked}>
                            <RubyIcon size={12} /> &nbsp;&nbsp; Go premium &nbsp;&nbsp;<RubyIcon size={12} />
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
