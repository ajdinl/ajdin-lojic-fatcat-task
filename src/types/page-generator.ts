import { HeroProps } from './hero';
import { ItemsShowcaseProps } from './item-showcase';
import { TrustBarProps } from './trustbar';

export type ComponentType =
    | { type: 'componentHero'; props: HeroProps }
    | { type: 'componentItemsShowcase'; props: ItemsShowcaseProps }
    | { type: 'componentTrustBar'; props: TrustBarProps };

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
