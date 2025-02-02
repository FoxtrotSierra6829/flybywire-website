import React, { useEffect, useState } from 'react';
import { Map } from '@flybywiresim/react-components';

export const FullscreenMap: React.FC = () => {
    const [mapRefreshInterval, setMapRefreshInterval] = useState(5_000);

    useEffect(() => {
        const interval = setInterval(() => {
            setMapRefreshInterval(document.visibilityState === 'visible' ? 10_000 : 100_000);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main className=" h-screen bg-blue-dark-contrast">
                <div className="relative h-screen pt-20 text-black z-20">
                    <Map refreshInterval={mapRefreshInterval} />
                </div>
            </main>
        </>
    );
};
