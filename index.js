document.addEventListener("DOMContentLoaded", () => {
    /**
     * Redirects
     */

    const DOMAINS = {
        "everclean": "/",
        "cleanaround": "/",
        "360clean": "/",
        "perpetua": "/",
    };

    const SLUG_ID = {
        "everclean": "ec",
        "cleanaround": "ca",
        "360clean": "360clean",
        "perpetua": "perpetua",
    };

    const slugId = window.location.pathname.split("/");
    console.log(slugId);
});