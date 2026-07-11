import { useEffect, useState } from "react";
import keycloak from "./keycloak";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        keycloak.init({
            onLoad: "login-required",
            checkLoginIframe: false,
        })
            .then((auth) => {
                setAuthenticated(auth);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!authenticated) {
        return <h2>Authentication Failed</h2>;
    }

    return (

        <AuthContext.Provider
            value={{
                keycloak,
                authenticated,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export default AuthProvider;