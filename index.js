document.addEventListener("DOMContentLoaded", () => {
    /**
     * Redirects
     */

    const DOMAINS = {
        "everclean": "www.everclean-kitchen.com",
        "cleanaround": "www.clean-around-kitchen.com",
        "360clean": "www.360-clean-kitchen.com",
        "perpetua": "www.reveal-uv-kitchen.com",
    };

    const SLUG_ID = {
        "everclean": "ec",
        "cleanaround": "ca",
        "360clean": "360clean",
        "perpetua": "reveal-uv",
    };

    const slugId = window.location.pathname.split("/")[1];
    
    if (slugId === SLUG_ID["360clean"] && window.location.hostname !== DOMAINS["360clean"]) {
        window.location = "https://" + DOMAINS["360clean"] + window.location.pathname;
    } else if (slugId === SLUG_ID.cleanaround && window.location.hostname !== DOMAINS.cleanaround) {
        window.location = "https://" + DOMAINS.cleanaround + window.location.pathname;
    } else if (slugId === SLUG_ID.everclean && window.location.hostname !== DOMAINS.everclean) {
        window.location = "https://" + DOMAINS.everclean+ window.location.pathname;
    } else if (slugId === SLUG_ID.perpetua && window.location.hostname !== DOMAINS.perpetua) {
        window.location = "https://" + DOMAINS.perpetua + window.location.pathname;
    };

    if (slugId !== SLUG_ID["360clean"] && window.location.hostname === DOMAINS["360clean"]) {
        window.location = "https://" + window.location.hostname + "/" + SLUG_ID["360clean"] + "/landing-1";
    } else if (slugId !== SLUG_ID.cleanaround && window.location.hostname === DOMAINS.cleanaround) {
        window.location = "https://" + window.location.hostname + "/" + SLUG_ID.cleanaround + "/landing-1";
    } else if (slugId !== SLUG_ID.everclean && window.location.hostname === DOMAINS.everclean) {
        window.location = "https://" + window.location.hostname + "/" + SLUG_ID.everclean + "/landing-1";
    } else if (slugId !== SLUG_ID.perpetua && window.location.hostname === DOMAINS.perpetua) {
        window.location = "https://" + window.location.hostname + "/" + SLUG_ID.perpetua + "/landing-1";
    };
});  