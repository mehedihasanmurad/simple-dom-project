

const allBtn = document.getElementsByClassName("add-to-cart");

let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        //player ar name price r category ta bahir korci
        const name = event.target.parentNode.childNodes[1].innerText;
        const playerPrice = event.target.parentNode.childNodes[3].children[0].innerText 
        const category = event.target.parentNode.childNodes[5].children[0].innerText
        

        //validation of update budget cart left
        const firstCart = setParseIntValue("cart");
        const secondLeft = setParseIntValue("player-limit");
        if (firstCart + 1 > 6 || secondLeft - 1 < 0) {
            alert("limit ses hoice r hobe na");
            return;
        }


        //update budget cart left
        const budget = setParseIntValue("budget");
        document.getElementById("budget").innerText = budget - parseInt(playerPrice);

        const cartCount = setParseIntValue("cart");
        document.getElementById("cart").innerText = cartCount + 1;

        const leftCount = setParseIntValue("player-limit");
        document.getElementById("player-limit").innerText = leftCount - 1;

        event.target.setAttribute("disabled", false);
        event.target.parentNode.style.backgroundColor = "gray";
        console.log()


        const playerSectionContainer = document.getElementById("player-section-container");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-around");
        const p = document.createElement("p")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        p.innerText = name;
        p1.innerText = playerPrice;
        p2.innerText = category;
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        playerSectionContainer.appendChild(div)

        updateTotalCost(playerPrice);
        updateGrandTotal();
    })
}

