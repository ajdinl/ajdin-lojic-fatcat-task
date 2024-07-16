import React from 'react';

import { SectionType } from '@homework-task/types/page-generator';

import PageGenerator from './PageGenerator';

const data: SectionType[] = [
    {
        type: 'layoutSection',
        props: { backgroundColor: 'bg-gray5' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to Our Website',
                    image: 'media/hero.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: 'bg-white' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Description for item 1',
                        },
                        {
                            title: 'Item 2',
                            description: 'Description for item 2',
                        },
                    ],
                },
            },
        ],
    },
];

const PageGeneratorComponent: React.FC = () => {
    return <PageGenerator sections={data} />;
};

export default PageGeneratorComponent;
