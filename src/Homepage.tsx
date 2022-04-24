import React from 'react';

type HomepageProps = {
    message: string;
}


export const Homepage = ({message}:HomepageProps) => {
    return (
        <div className="homepage">{message}</div>
    )
}