import React from 'react'

export default function page({ params }) {
    const { slug } = params;


    if (!page) {
        notFound();
    }

    return (
        <div>Специализация с slug = {slug}</div>
    )
}
