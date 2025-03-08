import React from 'react'

export interface CButtonInterface{
    buttonText: string,
    isPrimary?: boolean,
    id: string,
    backgroundColor?: string,
    onClick?: VoidFunction,
}

const CButton = ({buttonText, isPrimary = false, onClick = () => {}, backgroundColor, id}: CButtonInterface) => {
    return (
        <button 
            id={id}
            onClick={onClick}
            data-testId={id}
            style={{ backgroundColor }}>
                {buttonText}
        </button>
    )
}

export default CButton