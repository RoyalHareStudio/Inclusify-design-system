//Section Wrapper 

import React, { ReactNode } from 'react'

export interface WSectionInterface {
    sectionLabelledById: string,
    className?: string,
    id: string,
    children?: React.JSX.Element,
}

const WSection = ({ sectionLabelledById, className, children, id }: WSectionInterface) => {

    const defaultChildren = <div><h2 id={sectionLabelledById}>Heading</h2><p>Clear</p></div>;
    return (
        <section 
            aria-labelledBy={sectionLabelledById} 
            className={className}
            id={id}
            data-testid={id}
        >
            {defaultChildren}
        </section>
    )
}

export default WSection