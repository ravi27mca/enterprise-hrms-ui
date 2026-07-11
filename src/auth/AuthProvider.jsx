import { useEffect, useState } from "react";
import keycloak from "./keycloak";

const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        keycloak
            .init({
                onLoad: "login-required",
                checkLoginIframe: false,
            })
            .then((authenticated) => {

                setAuthenticated(authenticated);
                setLoading(false);

            })
            .catch((error) => {

                console.error("Keycloak Initialization Failed", error);
                setLoading(false);

            });

    }, []);

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!authenticated) {

        return <h2>Authentication Failed</h2>;

    }

    return children;
};

export default AuthProvider;