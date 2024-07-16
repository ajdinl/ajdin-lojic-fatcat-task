import React from 'react';

import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import {
    ComponentType,
    PageGeneratorProps,
} from '@homework-task/types/page-generator';

const PageGenerator: React.FC<PageGeneratorProps> = ({ sections }) => {
    const resolveComponent = (
        { type, props }: ComponentType,
        index: number
    ) => {
        switch (type) {
            case 'componentHero':
                return <Hero key={index} {...props} />;
            case 'componentItemsShowcase':
                return <ItemsShowcase key={index} {...props} />;
            case 'componentTrustBar':
                return <TrustBar key={index} {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className="font-sans p-4 max-w-4xl mx-auto">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`mb-4 p-4 rounded-lg shadow-lg ${section.props.backgroundColor}`}
                >
                    {section.components.map((component, compIndex) =>
                        resolveComponent(component, compIndex)
                    )}
                </div>
            ))}
        </div>
    );
};

export default PageGenerator;
