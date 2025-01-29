import React from 'react'


const domain = 'http://89.108.115.136:1338';
const url = `${domain}/api/speczializacziis?`;



export default function page({ params }) {
    const { slug , id} = params;



    if (!page) {
        notFound();
    }

    return (
        <section className='section'>
            <div className='container'>
                Специализация с slug = {slug}
            </div>
        </section>
    )
}
