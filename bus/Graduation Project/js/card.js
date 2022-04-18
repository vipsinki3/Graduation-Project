let boxCard = document.querySelector(".boxCard");
let boxData = document.querySelector(".boxData");
let btnsubmit = document.getElementById("btnsubmit");
let inpName = document.getElementById("inpName");
let inpNumber = document.getElementById("inpNumber");
let errorData = document.getElementById("errorData");
let nameValue = document.getElementById("nameValue");
let numberValue = document.getElementById("numberValue");
let codeValue = document.querySelector(".codeValue");
let boxDataDate = document.querySelector(".boxDataDate");
let fromTheStationValue = document.querySelector(".fromTheStationValue");
let fromTheStation = document.getElementById("fromTheStation");
let toStationValue = document.querySelector(".toStationValue");
let toStation = document.getElementById("toStation");
let timeIn = document.getElementById("timeIn");
let timeInValue = document.getElementById("timeInValue");
let timeOut = document.getElementById("timeOut");
let timeOutValue = document.getElementById("timeOutValue");
let date = document.getElementById("date");
let dateValue = document.getElementById("dateValue");





btnsubmit.addEventListener('click',function (){

    if (inpName.value == ""){
        errorData.innerHTML = "املئ الحقول";
        console.log('1')
    }
    else if (inpNumber.value == ""){
        errorData.innerHTML = "املئ الحقول";
        console.log('2')
    }
    else {
        boxData.style.display = "none";
        boxDataDate.style.display = "none";
        boxCard.style.display = "grid";
        console.log('3')
    }

    inpName.value = nameValue.innerHTML = inpName.value;
    inpNumber.value = numberValue.innerHTML = inpNumber.value;
    fromTheStation.value = fromTheStationValue.innerHTML = fromTheStation.value;
    toStation.value = toStationValue.innerHTML = toStation.value;
    timeIn.value = timeInValue.innerHTML = timeIn.value;
    timeOut.value = timeOutValue.innerHTML = timeOut.value;
    date.value = dateValue.innerHTML = date.value;
    
    codeValue.innerHTML = Math.floor(Math.random() * 1000000000000);

});
