import React from 'react';

export default function GridLayout({children}) {
    return (
        <div className={'container grid'}>
            {children}
        </div>
    );
}