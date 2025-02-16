import { ReactNode } from 'react';


const AppLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="page-wrapper">
            {children}
        </div>
    );
};

export default AppLayout;
