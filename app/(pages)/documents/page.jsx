import styles from './style.module.scss';
import Image from 'next/image';
import { Breadcrumbs, LinkButton } from "@/app/components";
import { DocumentSection } from '@/app/sections';


export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Документы',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/documents"
                secondLabel="Документы"
            />
            <DocumentSection />



        </>
    )
}
