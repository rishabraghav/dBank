import {dBank} from "../../declarations/dBank";


window.addEventListener('load', async function() {
    // console.log("page is reloaded");
    updateAmount();
});

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    console.log("Submitted.");
    const topupAmount = parseFloat(document.getElementById("topup").value);
    if(document.getElementById("topup").value.length != 0) {
        await dBank.topUp(topupAmount);
    }
    const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
    if(document.getElementById("withdraw").value.length != 0) {
        await dBank.widthrawl(withdrawAmount);
    }
    await dBank.compound();
    updateAmount();
    document.getElementById("topup").value = "";
    document.getElementById("withdraw").value = "";
}
);

async function updateAmount() {
    const amount = await dBank.checkBal();
    console.log(amount);
    document.querySelector("span").innerText = Math.round(amount*100)/100;
} 
