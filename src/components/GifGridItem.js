import React from 'react'

export const GifGridItem = ( { id, title, url, h, w }) => {

    return (
        <div className='card animate__animated animate__fadeInUp '>
            <img src={ url } alt={ title }/>
            <p style={{width: (((w * 200) / h) - 10) + 'px'}}>{title}</p>
        </div>
    )
}
