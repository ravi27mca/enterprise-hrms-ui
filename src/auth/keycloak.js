import Keycloak from "keycloak-js";

const keycloak = new Keycloak({

    url: "http://localhost:8181",

    realm: "employee-realm",

    clientId: "employee-frontend",

});

export default keycloak;