import React from 'react'

export default function ResponseField(props) {
    return (
        <div>
            {JSON.stringify(props.response)}
        </div>
    )
}


