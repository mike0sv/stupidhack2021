import React, {useEffect, useMemo, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DiscUsageBar from "../components/DiscUsageBar";
import {Plugins} from '@capacitor/core';
import {useFS} from "../hooks/useFS";
const {Storage} = Plugins;

const DOG_USAGE_KEY = "dog_usage";
const DELTA = 5;


const Tab1: React.FC = () => {
    const {addFile, listFiles} = useFS();
    const [dogUsage, setDogUsage] = useState<number>(0);
    const [files, setFiles] = useState<string[]>([]);


    useEffect(() => {
        async function getDogUsage() {
            let response = await Storage.get({key: DOG_USAGE_KEY})
            setDogUsage(parseFloat(response.value ?? "0"))
        }

        getDogUsage()
    }, [dogUsage])

    async function addDoge() {
        let usage = await Storage.get({key: DOG_USAGE_KEY});
        let value = parseFloat(usage.value ?? "0") + DELTA;
        await Storage.set({key: DOG_USAGE_KEY, value: value.toString()})
        setDogUsage(value)
    }

    async function addNewFile() {
        await addFile();
        setFiles(await listFiles())
    }

    useEffect(() => {
        (async function _() {
            setFiles(await listFiles())
        })()
    }, [listFiles])

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
                <IonButton color="primary" onClick={addDoge}>Add doges</IonButton>
                <IonButton color="primary" onClick={addNewFile}>Add file</IonButton>
                <pre>
                    {JSON.stringify(files)}
                </pre>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
