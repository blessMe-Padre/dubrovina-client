import React from 'react'

export default function page({ params }) {
    const { id } = params;


    if (!page) {
        notFound();
    }

    return (
        <div>Специалист с id = {id}</div>
    )
}
