import Image from "next/image"
import styles from './style.module.scss';
import src from '@/public/services-sub/bg2.png';
import { Form } from "@/app/components";



export default function ContentPage({ data }) {
    return (

        <>
            <section className="section">
                <Image src={src} className={styles.bg} alt="bg" width={1400} height={500} />

                <div className="container">
                    <div className={styles.info}>  
                        <h2 className='title'>{data.title_page}</h2>
                        <p className={styles.subtitle}>{data.desc_page}</p> 
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <h2 className="title title--black">Что представляет собой заболевание?</h2>
                    <div>
                        {data.about_the_disease[0].map((item, idx) => {
                            console.log(item)
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}