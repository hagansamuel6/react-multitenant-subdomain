export const getSubdomain = () => {
    if (import.meta.env.PROD) {
        if (
          typeof window.location.host.split(".")[0] === "string" &&
          window.location.host.split(".").length >= 3
        ) {
          return window.location.host.split(".")[0]
        } else {
          return window.location.host.split(".")[0]
        }
      } else {
        if (
          typeof window.location.host.split(".")[0] === "string" &&
          window.location.host.split(".").length >= 3
        ) {
          return window.location.host.split(".")[0]
        } else if (
          window.location.host.split(".").length >= 2 &&
          typeof window.location.host.split(".")[0] === "string"
        ) {
          return (
            window.location.host.split(".")[0]
          );
        } else {
          return null;
        }
      }
}

export const CENTRAL_API_DOMAIN = "api.saastest.net";