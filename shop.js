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
            
            const minus = innerBox.querySelector(".minus");
            minus.style.userSelect = "none";

            const plus = innerBox.querySelector(".plus");
            plus.style.userSelect = "none";

            const productPrice = Number(innerBox.querySelector(".inner-product-price").innerHTML);
            const productName = innerBox.getAttribute("data-product");

            console.log(pri)

            minus.addEventListener("click", () => {
                if (Number(amount.innerHTML) !== 0) {
                    amount.innerHTML = Number(amount.innerHTML) - 1;
                    Number(amount.innerHTML) === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");
                    price = price - productPrice;
                    document.querySelector(".price").innerHTML = `£${price.toFixed(2)}`;
                    document.getElementById(productName).value = Number(amount.innerHTML);
                };
            });

            plus.addEventListener("click", () => {
                amount.innerHTML = Number(amount.innerHTML) + 1;
                Number(amount.innerHTML) === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");
                price = price + productPrice;
                document.querySelector(".price").innerHTML = `£${price.toFixed(2)}`;
                document.getElementById(productName).value = Number(amount.innerHTML);
            });
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