

const allBtn = document.getElementsByClassName("add-to-cart");

let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        //player ar name price r category ta bahir korci
        const name = event.target.parentNode.childNodes[1].innerText;
        const playerPrice = event.target.parentNode.childNodes[3].children[0].innerText 
        const category = event.target.parentNode.childNodes[5].children[0].innerText
        
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

    })
}
