document.addEventListener("DOMContentLoaded", () => {
    /**
     * Redirects
     */

    const DOMAINS = {
        "everclean": "/",
    };

    const SLUG_ID = {
        "everclean": "ec",
    };

    const slugId = window.location.pathname.split("/")[0];
    console.log(slugId);
});