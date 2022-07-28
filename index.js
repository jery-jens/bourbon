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

    const slugId = window.location.pathname.split("/")[1];
    
    if (slugId === SLUG_ID["360clean"]) {
        console.log(window.location)
    } else if (slugId === SLUG_ID.cleanaround) {

    }
});