import React from 'react'

const url = `${process.env.PUBLIC_NEXT_DOMAIN}/api/speczializacziis?`;

export default function page({ params }) {
    const { slug } = params;

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
