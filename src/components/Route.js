import { useState, useEffect } from 'react';

export default function Route({ path, children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChanged = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', onLocationChanged);
        return () => window.removeEventListener('popstate', onLocationChanged);
    }, [])

    return currentPath === path
        ? children
        : null;
}