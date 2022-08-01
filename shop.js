document.addEventListener("DOMContentLoaded", () => {
    /**
     * Images
     */

    const shownImage = document.querySelector(".product-image");
    const images = document.querySelectorAll(".product-small-image");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            const style = image.currentStyle || window.getComputedStyle(image, false);
            const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            
            shownImage.style.backgroundImage = `url(${url})`;
        });
    });

    /**
     * Selector
     */

    const productBoxes = document.querySelectorAll(".product-box");
    let price = 0;

    productBoxes.forEach((box) => {
        const innerBoxes = box.querySelectorAll(".product-inner");

        innerBoxes.forEach((innerBox, index) => {
            const amount = innerBox.querySelector(".amount");
            let productAmount = 0;
            
            const minus = innerBox.querySelector(".minus");
            minus.style.userSelect = "none";

            const plus = innerBox.querySelector(".plus");
            plus.style.userSelect = "none";

            const productPrice = Number(innerBox.querySelector(".inner-product-price").innerHTML);
            const productName = innerBox.getAttribute("data-product");

            const hasDiscount = Boolean(document.getElementById(productName).getAttribute("data-discount"));

            minus.addEventListener("click", () => {
                if (productAmount !== 0) {
                    productAmount = productAmount - 1;
                    amount.innerHTML = productAmount;
                    productAmount === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");
                    plus.classList.remove("not-active");

                    if (hasDiscount) {
                        let takeOff = 0;
                        let add = 0;
                        
                        switch (productAmount) {
                            case 0:
                                add = 0;
                                takeOff = (productPrice / 100) * 100;
                                break;
                            case 1:
                                add = (productPrice / 100) * 100;
                                takeOff = ((productPrice * 2) / 100) * 90;
                                break;
                            case 2:
                                add = ((productPrice * 2) / 100) * 90;
                                takeOff = ((productPrice * 3) / 100) * 87.5;
                                break;
                            case 3:
                                add = ((productPrice * 3) / 100) * 87.5;
                                takeOff = ((productPrice * 4) / 100) * 85;
                                break;
                            case 4:
                                add = ((productPrice * 4) / 100) * 85;
                                takeOff = ((productPrice * 5) / 100) * 80;
                                break;
                            default:
                                takeOff = (productPrice / 100) * 100
                                break;
                        }

                        price = (price - takeOff) + add;   
                    } else {
                        price = price - productPrice;
                    };

                    document.querySelector(".price").innerHTML = `£${price.toFixed(2)}`;
                    document.getElementById(productName).value = productAmount;
                };
            });

            plus.addEventListener("click", () => {
                productAmount = productAmount + 1;

                if (productAmount === 5) {
                    amount.innerHTML = productAmount;
                    plus.classList.add("not-active");

                    if (hasDiscount) {
                        let takeOff = ((productPrice * 4) / 100) * 85;
                        let add = ((productPrice * 5) / 100) * 80;
    
                        price = (price - takeOff) + add;
                    } else {
                        price = price + productPrice;
                    };
                } else if (productAmount < 5) {
                    amount.innerHTML = productAmount;
                    productAmount === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");

                    if (hasDiscount) {
                        let takeOff = 0;
                        let add = 0;
                        
                        switch (productAmount) {
                            case 1:
                                takeOff = 0;
                                add = (productPrice / 100) * 100;
                                break;
                            case 2:
                                takeOff = (productPrice / 100) * 100;
                                add = ((productPrice * 2) / 100) * 90;
                                break;
                            case 3:
                                takeOff = ((productPrice * 2) / 100) * 90;
                                add = ((productPrice * 3) / 100) * 87.5;
                                break;
                            case 4:
                                takeOff = ((productPrice * 3) / 100) * 87.5;
                                add = ((productPrice * 4) / 100) * 85;
                                break;
                            case 5:
                                takeOff = ((productPrice * 4) / 100) * 85;
                                add = ((productPrice * 5) / 100) * 80;
                                break;
                            default:
                                add = (productPrice / 100) * 100
                                break;
                        }

                        price = (price - takeOff) + add;
                    } else {
                        price = price + productPrice;
                    };
                };

                document.querySelector(".price").innerHTML = `£${price.toFixed(2)}`;
                document.getElementById(productName).value = productAmount;
            });
        });
    });

    /**
     * Scents
     */

    const scents = document.querySelectorAll(".scent-radio");

    scents.forEach((scent) => {
        scent.addEventListener("click", (e) => {
            console.log("yaaaah")
            console.log(scent.parentElement.parentElement.classList.contains("active"));
            if (scent.parentElement.parentElement.classList.contains("active")) {
                scent.parentElement.parentElement.classList.classList.remove("active");
            } else {
                scent.parentElement.parentElement.classList.classList.add("active");
            };
        });
    });

    /**
     * Form
     */

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        window.location = window.location.pathname.replace("shop", "out-of-stock");
    });
});