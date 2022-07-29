document.addEventListener("DOMContentLoaded", () => {
    /**
     * Redirects
     */

    const DOMAINS = {
        "everclean": "https://everclean-kitchen.com",
        "cleanaround": "/https://clean-around-kitchen.com",
        "360clean": "https://360-clean-kitchen.com",
        "perpetua": "https://perpetua-kitchen.com",
    };

    const SLUG_ID = {
        "everclean": "ec",
        "cleanaround": "ca",
        "360clean": "360clean",
        "perpetua": "perpetua",
    };

    const slugId = window.location.pathname.split("/")[1];
    
    if (slugId === SLUG_ID["360clean"]) {
        console.log(DOMAINS["360clean"] + window.location.pathname)
        //    window.location = DOMAINS["360clean"] + window.location.pathname;
    } else if (slugId === SLUG_ID.cleanaround) {
        // window.location = DOMAINS.cleanaround + window.location.pathname;
    } else if (slugId === SLUG_ID.everclean) {
        // window.location = DOMAINS.everclean + window.location.pathname;
    } else if (slugId === SLUG_ID.perpetua) {
        // window.location = DOMAINS.perpetua + window.location.pathname;
    };
});