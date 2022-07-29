document.addEventListener("DOMContentLoaded", () => {
    /**
     * Redirects
     */

    const DOMAINS = {
        "everclean": "www.everclean-kitchen.com",
        "cleanaround": "www.clean-around-kitchen.com",
        "360clean": "www.360-clean-kitchen.com",
        "perpetua": "www.perpetua-kitchen.com",
    };

    const SLUG_ID = {
        "everclean": "ec",
        "cleanaround": "ca",
        "360clean": "360clean",
        "perpetua": "perpetua",
    };

    const slugId = window.location.pathname.split("/")[1];
    
    if (slugId === SLUG_ID["360clean"] && window.location.hostname !== DOMAINS["360clean"]) {
        window.location = DOMAINS["360clean"] + window.location.pathname;
    } else if (slugId === SLUG_ID.cleanaround && window.location.hostname !== DOMAINS.cleanaround) {
        window.location = DOMAINS.cleanaround + window.location.pathname;
    } else if (slugId === SLUG_ID.everclean && window.location.hostname !== DOMAINS.everclean) {
        window.location = DOMAINS.everclean+ window.location.pathname;
    } else if (slugId === SLUG_ID.perpetua && window.location.hostname !== DOMAINS.perpetua) {
        window.location = DOMAINS.perpetua + window.location.pathname;
    };

    if (slugId !== SLUG_ID["360clean"] && window.location.hostname === DOMAINS["360clean"]) {
        window.location = window.location.hostname + "/" + SLUG_ID["360clean"] + "/landing-1";
    } else if (slugId === SLUG_ID.cleanaround && window.location.hostname !== DOMAINS.cleanaround) {
        window.location = DOMAINS.cleanaround + window.location.pathname;
    } else if (slugId === SLUG_ID.everclean && window.location.hostname !== DOMAINS.everclean) {
        window.location = DOMAINS.everclean+ window.location.pathname;
    } else if (slugId === SLUG_ID.perpetua && window.location.hostname !== DOMAINS.perpetua) {
        window.location = DOMAINS.perpetua + window.location.pathname;
    };
});