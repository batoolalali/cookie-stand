"use strict";

var shops = [];
function getRandomCus(max, min) {
    var cusPerHour = Math.floor(Math.random() * (max - min + 1) + min);
    return cusPerHour;
}

var hours = ["06 AM", "07 AM", "08 AM", "09 AM", "10 AM", "11 AM", '12 PM', "01 PM", "02 PM", "03 PM", "04 PM", "05 PM", "06 PM", "07 PM"];


function Shop(location, min, max, avr) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avr = avr;
    this.cusPerHour = [];
    this.cookiesPerHour = [];
    shops.push(this);
}




Shop.prototype.randomCusNum = function () {
    for (var i = 0; i < hours.length; i++) {
        this.cusPerHour[i] = Math.floor(getRandomCus(this.max, this.min));
    }

}

Shop.prototype.setCookiesPerHour = function () {
    for (var i = 0; i < 14; i++) {
        this.cookiesPerHour[i] = Math.floor(this.cusPerHour[i] * this.avr);
    }
}

Shop.prototype.tableHeader = function () {


}

var continer = document.getElementById('Seattle');
var tableE = document.createElement('table');
var tr0 = document.createElement('tr');
var th0 = document.createElement('th');



function tableHeader()
{
   
var div1 = document.createElement('div');
continer.appendChild(div1);
continer.appendChild(tableE);

tableE.appendChild(tr0);
tr0.appendChild(th0);
th0.textContent = " ";

for (var i = 0; i < hours.length; i++) {
    var th1 = document.createElement('th');
    tr0.appendChild(th1);
    th1.textContent = hours[i];
}

var tr1 = document.createElement('tr');
tableE.appendChild(tr1);

var td1 = document.createElement('td');
tr1.appendChild(td1);


var td3 = document.createElement('td');
tr0.appendChild(td3);
td3.textContent = " Daily Location Total";
}


Shop.prototype.render = function () {
    var rowsum = 0;
    var saveRandValue;
    this.setCookiesPerHour();


    var tr1 = document.createElement('tr');
    tableE.appendChild(tr1);

    var td1 = document.createElement('td');
    tr1.appendChild(td1);

    var tr3 = document.createElement('tr');
    tableE.appendChild(tr3);



    for (var i = 0; i < shops.length; i++) {
        td1.textContent = this.location;
        for (var i = 0; i < hours.length; i++) {
            var td1 = document.createElement('td');
            tr1.appendChild(td1);
            saveRandValue = this.cookiesPerHour[i];
            td1.textContent = saveRandValue;
            rowsum = rowsum + saveRandValue;
        }
        var td2 = document.createElement('td');
        tr1.appendChild(td2);
        td2.textContent = rowsum;

    }


    // console.log(shops[0].cookiesPerHour[0]);
}


tableHeader();
var Seattle = new Shop('Seattle', 23, 65, 6.3);
var Tokyo = new Shop('Tokyo', 3, 24, 1.2);
var Dubai = new Shop('Dubai', 11, 38, 3.7);
var Paris = new Shop('Paris', 20, 65, 2.3);
var Lima = new Shop('Lima', 2, 16, 4.6);




for (var i = 0; i < shops.length; i++) {
    shops[i].randomCusNum();
    shops[i].render();
}

tablefooter();
console.log(tableE.lastChild);
//var submt=false;
var myForm=document.getElementById('shops');
myForm.addEventListener('submit', function(event){
    event.preventDefault();
var location=event.target.location.value;
var minimum=event.target.min.value;
var maximum=event.target.max.value;
minimum=parseInt(minimum);
maximum=parseInt(maximum);
var avarge=event.target.avr.value;
avarge=parseFloat(avarge);
console.log(location);
if (location=='')
{
    alert("Please enter a location name");
    console.log("Hi");
}else
if (maximum>minimum)
{
    tableE.removeChild(tableE.lastChild);
    var addedShop= new Shop(location,minimum,maximum,avarge);
addedShop.randomCusNum();
addedShop.render();
console.log(addedShop.cookiesPerHour);
console.log(addedShop.cusPerHour);
//submt=true;
tablefooter();
}

else{
alert("the maximum number MUST be more than the minimum" );}

});

// if (submt==true)


// {tableE.removeChild(tableE.lastChild);}



function tablefooter()
{
    var tr3 = document.createElement('tfoot');
tableE.appendChild(tr3);
var tdfooter = document.createElement('td');
tr3.appendChild(tdfooter);
tdfooter.textContent = "Totals";
var totalOftatals = 0;


for (var i = 0; i < hours.length; i++) {

    var colomSum = 0;
    for (var j = 0; j < shops.length; j++) {

        colomSum = colomSum + shops[j].cookiesPerHour[i];
        
    }
    totalOftatals = totalOftatals + colomSum;
    var tdfoot = document.createElement('td');
    tr3.appendChild(tdfoot);
    tdfoot.textContent = colomSum;
}

var tdtotal = document.createElement('td');
tr3.appendChild(tdtotal);
tdtotal.textContent = totalOftatals;

}


