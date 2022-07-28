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
    
    // if (slugId === SLUG_ID["360clean"]) {
    //    window.location = DOMAINS["360clean"] + window.location.pathname;
    // } else if (slugId === SLUG_ID.cleanaround) {
    //     window.location = DOMAINS.cleanaround + window.location.pathname;
    // } else if (slugId === SLUG_ID.everclean) {
    //     window.location = DOMAINS.everclean + window.location.pathname;
    // } else if (slugId === SLUG_ID.perpetua) {
    //     window.location = DOMAINS.perpetua + window.location.pathname;
    // };
});