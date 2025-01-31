import Image from "next/image"
import styles from './style.module.scss';
import src from '@/public/services-sub/bg.png';
import { Form } from "@/app/components";

export default function PageContent({ data }) {

    const title = data[0]?.Page?.title_page || null;
    const desc = data[0]?.Page?.desc_page || null;

    return (
        <>
            <section className='section relative'>
                <Image src={src} className={styles.bg} alt="bg" width={1400} height={900} />
                <div className='container'>
                    <div className={styles.info}>
                        <h2 className="title">{title}</h2>
                        <p className={styles.subtitle}>{desc}</p>

                        {/* <div className={styles.form_wrapper}>
                            <Form />
                        </div> */}
                    </div>
                </div>    
            </section> 
        </>
    )
}