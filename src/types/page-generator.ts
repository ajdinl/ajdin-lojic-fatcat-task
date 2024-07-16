import { HeroProps } from './hero';
import { ItemsShowcaseProps } from './item';

export type ComponentType =
    | { type: 'componentHero'; props: HeroProps }
    | { type: 'componentItemsShowcase'; props: ItemsShowcaseProps };

export type SectionType = {
    type: 'layoutSection';
    props: {
        backgroundColor: string;
        padding?: string;
    };
    components: ComponentType[];
};

export type PageGeneratorProps = {
    sections: SectionType[];
};
