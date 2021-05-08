import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import DiscUsageBar from '../components/DiscUsageBar';
import { useDispatch, useSelector } from 'react-redux';
import {
    addDoge,
    init,
    removeDoge,
    selectBatteryDischargeOn,
    selectDogState,
    selectText,
    switchBatteryDischarge
} from '../reducers/main';
import DogLogo from '../components/DogLogo';
import DiskUsageInfo from '../components/DiskUsageInfo';
import { RubyIcon } from '@primer/octicons-react';

const Tab1: React.FC = () => {
    const dogState = useSelector(selectDogState);
    const text = useSelector(selectText);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [isPremium, setIsPremium] = useState(false);
    const batteryDischargeOn = useSelector(selectBatteryDischargeOn);
    const buttonsContainerClass = useMemo(() => {
        return batteryDischargeOn ? 'Tab1-button-centered Tab1-button-centered-crazy' : 'Tab1-button-centered';
    }, [batteryDischargeOn]);
    const premiumButtonClass = useMemo(() => {
        return batteryDischargeOn ? 'Tab1-button-wrapper-bottom Tab1-button-premium-crazy' : 'Tab1-button-wrapper-bottom';
    }, [batteryDischargeOn]);

    const addDogeClicked = useCallback(() => {
        dispatch(addDoge());
    }, [dispatch])

    const removeDogeClicked = useCallback(() => {
        dispatch(removeDoge());
    }, [dispatch])

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    const setPremium = (value: boolean) => {
        setShowModal(false);
        setIsPremium(value);
    }

    const switchBatteryDischargeClicked = useCallback(() => {
        dispatch(switchBatteryDischarge());
    }, [dispatch])

    return (
        <IonPage>
            <IonContent>
                <DogLogo state={dogState} text={text} premium={isPremium} />
                <div style={{ padding: '15px' }}>
                    <DiskUsageInfo />
                    <DiscUsageBar />
                    <div className={buttonsContainerClass}>
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
                        {/*<div className={'Tab1-button-wrapper-bottom'}>*/}
                        {/*    <IonButton color="medium" expand="block" onClick={switchBatteryDischargeClicked} size={'large'}>*/}
                        {/*        {batteryDischargeOn ? 'STOP IT' : 'Battery discharge'}*/}
                        {/*    </IonButton>*/}
                        {/*</div>*/}
                        <div className={premiumButtonClass}>
                            <IonButton color="warning" expand="block" onClick={() => setShowModal(true)} size={'small'}>Go premium</IonButton>
                        </div>
                    </div>
                </div>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <div className={'Tab1-modal-wrapper'}>
                        {/*<p className={'Tab1-modal-text'}>Today with our special offer you might have a premium account*/}
                        {/*    absolutely free!</p>*/}
                        <img src={'/assets/premium.png'} className={'Tab1-premium-icon'} />

                        <div className={'Tab1-modal-button-wrapper'}>
                            <IonButton onClick={() => setPremium(true)} color={'warning'} expand="block">
                                <RubyIcon size={12} /> &nbsp;&nbsp; Buy premium &nbsp;&nbsp;<RubyIcon size={12} />
                            </IonButton>
                        </div>
                        <div className={'Tab1-modal-button-wrapper'}>
                            <IonButton onClick={() => setPremium(false)} color={'medium'} expand="block">Stay with regular
                                account</IonButton>
                        </div>
                    </div>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
