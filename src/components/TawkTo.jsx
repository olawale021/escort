import { useEffect } from 'react';

const TawkTo = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/675e23e6af5bfec1dbdbe528/1if3rofcn';
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
