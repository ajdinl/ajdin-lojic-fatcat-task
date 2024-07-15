import { LayoutProps } from '@homework-task/types/layout';
import clsx from 'clsx';

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
