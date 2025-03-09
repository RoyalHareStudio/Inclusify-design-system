//Section Wrapper 

import React, { ReactNode } from 'react'

export interface WSectionInterface {
    sectionLabelledById: string,
    className?: string,
    id: string,
    role?: "region" | "complementary" | "banner" | "main";
    children: React.JSX.Element,
}

const WSection = ({ sectionLabelledById, className, children, id, role='region' }: WSectionInterface) => {

    const defaultChildren = <div><h2 id={sectionLabelledById}>Heading</h2><p>Clear</p></div>;
    return (
        <section 
            aria-labelledBy={sectionLabelledById} 
            className={className}
            id={id}
            role={role}
            data-testid={id}
        >
            {children}
        </section>
    )
}

export default WSection