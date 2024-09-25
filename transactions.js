function DonationAmount(id){
    const money=parseFloat(document.getElementById(id).value);
    if (isNaN(money)){
        alert('Enter a valid amount')
        return 0;
    }
    else{
        return money;
    }
}

function EventAmount(EventId,DonationId){
    const EventMoney=parseFloat(document.getElementById(EventId).innerText);
    const DonatedMoney=DonationAmount(DonationId);
    const totalRaised=(EventMoney+DonatedMoney);
    document.getElementById(EventId).innerText=totalRaised;
    return totalRaised
}

function date() {
    const currentDate = new Date();
    return currentDate
}


document.getElementById('donate-btn-2').addEventListener('click',function(){
    const donationAmount=DonationAmount('donate-amount-2');
    const mainBalanceE=document.getElementById('main-balance');
    const mainBalance=parseFloat(mainBalanceE.innerText);

    if (mainBalance>=donationAmount && donationAmount>0){
        mainBalanceE.innerText=(mainBalance-donationAmount)
        EventAmount("event-money-2","donate-amount-2");
        const currentDate=date();
        const p = document.createElement('p');
        p.innerHTML = `
        <span class="font-bold"> ${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</span><br>
        <p>Date: ${currentDate}<p>`;
        document.getElementById("history").appendChild(p);
        p.classList.add('text-lg', 'mt-4', 'mx-36', 'font-light','p-5','border-2','rounded-lg');
    }
    else{
        alert("Enter a valid amount")
    }
})
