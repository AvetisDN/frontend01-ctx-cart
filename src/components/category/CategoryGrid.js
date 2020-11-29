import React from 'react'

export default function CategoryGrid(props) {
    return (
        <div>
            {props.match.params.slug}
        </div>
    )
}
