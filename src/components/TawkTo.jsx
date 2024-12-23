import { useEffect } from 'react';

const TawkTo = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/67671b42af5bfec1dbdfa799/1iflc4v2p';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);

        // Cleanup the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default TawkTo;
