'use client';

import { Breadcrumbs } from '@/app/components';
import styles from './style.module.scss';

import { VideoSection, Mission, Statistic, Advantages, Consultation, Map, Trust } from '@/app/sections';
export default function ContentPage({ data }) {


    return (
        <>  
            <Breadcrumbs
                secondLink="/about_clinic"
                secondLabel="О клинике"
            />
            <VideoSection all_width={true} />
            <Mission />
            <Statistic />
            <Advantages />
            <Trust />
            <Consultation />
            <Map />
        </>
    );
}