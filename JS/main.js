const vendor = document.getElementById("vendor");
const media = document.getElementById("media");
const crop = document.getElementById("crop");
const team = document.getElementById("team");
const profits = document.getElementById("profits");
const unlimited = document.getElementById("unlimited");
const lifeTime = document.getElementById("lifeTime");
const state = document.getElementById("status");
const companyName = document.getElementById("companyName");
const btn = document.querySelectorAll(".btn");
const nanCheck = document.getElementById("nanCheck");
const unlimitedProfits = document.getElementById("unlimitedProfits");
const companyProfits = document.getElementById("companyProfits");
const lifeTimeRewards = document.getElementById("lifeTimeRewards");
const prog = document.querySelectorAll(".prog");
const inputs = document.querySelectorAll("input");
const companyNameProg = document.querySelector(".companyNameProg");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", () => {
        if (vendor.value && media.value && crop.value && team.value) {
            let sum =
                Number(vendor.value) +
                Number(media.value) +
                Number(crop.value) +
                Number(team.value);
            if (isNaN(sum)) {
                nanCheck.classList.remove("d-none");
                state.classList.add("d-none");
            } else {
                let unlimitedOffer = sum * 1.1;
                let lifeTimeOffer = sum * 1.2;
                unlimited.innerHTML = `$${unlimitedOffer}`;
                lifeTime.innerHTML = `$${lifeTimeOffer}`;
                state.classList.remove("d-none");
                for (let i = 0; i < prog.length; i++) {
                    prog[i].classList.remove("d-none");
                }
                for (let i = 0; i < btn.length; i++) {
                    btn[i].onclick = (e) => {
                        companyName.innerHTML = e.target.innerHTML;
                        let businessCard;
                        if (isNaN(sum)) {
                            nanCheck.classList.remove("d-none");
                            state.classList.add("d-none");
                        } else {
                            state.classList.remove("d-none");
                            nanCheck.classList.add("d-none");
                            if (companyName.innerHTML == "Brex") {
                                businessCard = sum * 0.3;
                            } else if (companyName.innerHTML == "Stripe") {
                                businessCard = sum * 2.9;
                            } else {
                                businessCard = sum * 1.3;
                            }
                            profits.innerHTML = `$${businessCard}`;
                            companyNameProg.classList.remove("d-none");
                        }
                    };
                }
            }
        }
    });
}
