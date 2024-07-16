import { TrustBarProps } from '@homework-task/types/trustbar';
import Marquee from 'react-fast-marquee';

export const TrustBar: React.FC<TrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image: string) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
