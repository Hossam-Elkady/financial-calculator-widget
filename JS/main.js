const vendor = document.getElementById("vendor");
const media = document.getElementById("media");
const crop = document.getElementById("crop");
const team = document.getElementById("team");
const brex = document.getElementById("brex");
const stripe = document.getElementById("stripe");
const amex = document.getElementById("amex");
const profits = document.getElementById("profits");
const profits2 = document.getElementsByClassName("profits");
const unlimited = document.getElementById("unlimited");
const lifeTime = document.getElementById("lifeTime");
const state = document.getElementById("status");
const companyName = document.getElementById("companyName");
const companyName2 = document.getElementById("companyName2");
const btn = document.querySelectorAll(".btn");
const nanCheck = document.getElementById("nanCheck");
const rewards = document.getElementById("rewards");
const unlimitedProfits=document.getElementById("unlimitedProfits")
const companyProfits=document.getElementById("companyProfits")
const lifeTimeRewards=document.getElementById("lifeTimeRewards");
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = (e) => {
        companyName2.innerHTML = e.target.innerHTML;
        companyName.innerHTML = e.target.innerHTML;
        let businessCard;
        let sum =
            Number(vendor.value) +
            Number(media.value) +
            Number(crop.value) +
            Number(team.value);
        if (isNaN(sum)) {
            nanCheck.classList.remove("d-none");
            state.classList.add("d-none");
            rewards.classList.add("d-none");
        } else {
            state.classList.remove("d-none");
            nanCheck.classList.add("d-none");
            rewards.classList.remove("d-none");
            if (companyName.innerHTML == "Brex") {
                businessCard = sum * 0.3;
            } else if (companyName.innerHTML == "Stripe") {
                businessCard = sum * 2.9;
            } else {
                businessCard = sum * 1.3;
            }
            profits.innerHTML = businessCard;
            profits2.innerHTML=businessCard;
            const unlimitedOffer = sum * 1.1;
            const lifeTimeOffer = sum * 1.2;
            unlimited.innerHTML = unlimitedOffer;
            lifeTime.innerHTML = lifeTimeOffer;
            unlimitedProfits.innerHTML=`$${unlimitedOffer}`;
            companyProfits.innerHTML=`$${businessCard}`
            lifeTimeRewards.innerHTML=`$${lifeTimeOffer}`
        }
    };
}
