"use strict";

function getRandomCus(max,min)
{
    var cusPerHour= Math.floor(Math.random()*(max-min)+min);
    return cusPerHour;
}

var hours= ["06 AM" , "07 AM" , "08 AM" , "09 AM" , "10 AM" , "11 AM" ,  '12 PM' ,"01 PM" ,"02 PM" ,"03 PM" , "04 PM" ,"05 PM" ,"06 PM" ,"07 PM"  ];

var Seattle= {
    location: "Seattle",
    min:    23,
    max:    65,
    avr:    6.3,
    cusPerHour: [],
    cookiesPerHour:[],
    randomCusNum:  function() { 
        for (var i=0; i<hours.length ;i++ )
        {
          this.cusPerHour[i]= Math.floor(getRandomCus(this.max, this.min));
        }
    },
    setCookiesPerHour: function(){
        for (var i=0; i<14 ;i++ )
        {
          this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
        }
    },
    render: function(){
        this.setCookiesPerHour();
        var continer= document.getElementById('Seattle');
        var article1= document.createElement('article');
        continer.appendChild(article1);
        var Eh2= document.createElement('h2');
        article1.appendChild(Eh2);
        Eh2.textContent=this.location;
        var ul1= document.createElement('ul');
        article1.appendChild(ul1);
       
        for(var i=0; i<hours.length; i++)
        {
            var li1= document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent= 
            hours[i]+ "    :   "+this.cookiesPerHour[i] + "    cookies";
        }
    }
   
}
Seattle.randomCusNum();
Seattle.render();

var Tokyo= {
    location: "Tokyo",
    min:    3,
    max:    24,
    avr:    1.2,
    cusPerHour: [],
    cookiesPerHour:[],
    randomCusNum:  function() { 
        for (var i=0; i<hours.length ;i++ )
        {
          this.cusPerHour[i]= Math.floor(getRandomCus(this.max, this.min));
        }
    },
    setCookiesPerHour: function(){
        for (var i=0; i<14 ;i++ )
        {
          this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
        }
    },
    render: function(){
        this.setCookiesPerHour();
        var continer= document.getElementById('Seattle');
        var article1= document.createElement('article');
        continer.appendChild(article1);
        var Eh2= document.createElement('h2');
        article1.appendChild(Eh2);
        Eh2.textContent=this.location;
        var ul1= document.createElement('ul');
        article1.appendChild(ul1);
       
        for(var i=0; i<hours.length; i++)
        {
            var li1= document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent= 
            hours[i]+ "    :   "+this.cookiesPerHour[i] + "    cookies";
        }
    }
   
}
Tokyo.randomCusNum();
Tokyo.render();

var Dubai= {
    location: "Dubai",
    min:    11,
    max:    38,
    avr:    3.7,
    cusPerHour: [],
    cookiesPerHour:[],
    randomCusNum:  function() { 
        for (var i=0; i<hours.length ;i++ )
        {
          this.cusPerHour[i]= Math.floor(getRandomCus(this.max, this.min));
        }
    },
    setCookiesPerHour: function(){
        for (var i=0; i<14 ;i++ )
        {
          this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
        }
    },
    render: function(){
        this.setCookiesPerHour();
        var continer= document.getElementById('Seattle');
        var article1= document.createElement('article');
        continer.appendChild(article1);
        var Eh2= document.createElement('h2');
        article1.appendChild(Eh2);
        Eh2.textContent=this.location;
        var ul1= document.createElement('ul');
        article1.appendChild(ul1);
       
        for(var i=0; i<hours.length; i++)
        {
            var li1= document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent= 
            hours[i]+ "    :   "+this.cookiesPerHour[i] + "    cookies";
        }
    }
   
}
Dubai.randomCusNum();
Dubai.render();
var Paris= {
    location: "Paris",
    min:    20,
    max:    38,
    avr:   2.3,
    cusPerHour: [],
    cookiesPerHour:[],
    randomCusNum:  function() { 
        for (var i=0; i<hours.length ;i++ )
        {
          this.cusPerHour[i]= Math.floor(getRandomCus(this.max, this.min));
        }
    },
    setCookiesPerHour: function(){
        for (var i=0; i<14 ;i++ )
        {
          this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
        }
    },
    render: function(){
        this.setCookiesPerHour();
        var continer= document.getElementById('Seattle');
        var article1= document.createElement('article');
        continer.appendChild(article1);
        var Eh2= document.createElement('h2');
        article1.appendChild(Eh2);
        Eh2.textContent=this.location;
        var ul1= document.createElement('ul');
        article1.appendChild(ul1);
       
        for(var i=0; i<hours.length; i++)
        {
            var li1= document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent= 
            hours[i]+ "    :   "+this.cookiesPerHour[i] + "    cookies";
        }
    }
   
}
Paris.randomCusNum();
Paris.render();


var Lime= {
    location: "Lime",
    min:    2,
    max:    16,
    avr:   4.6,
    cusPerHour: [],
    cookiesPerHour:[],
    randomCusNum:  function() { 
        for (var i=0; i<hours.length ;i++ )
        {
          this.cusPerHour[i]= Math.floor(getRandomCus(this.max, this.min));
        }
    },
    setCookiesPerHour: function(){
        for (var i=0; i<14 ;i++ )
        {
          this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
        }
    },
    render: function(){
        this.setCookiesPerHour();
        var continer= document.getElementById('Seattle');
        var article1= document.createElement('article');
        continer.appendChild(article1);
        var Eh2= document.createElement('h2');
        article1.appendChild(Eh2);
        Eh2.textContent=this.location;
        var ul1= document.createElement('ul');
        article1.appendChild(ul1);
       
        for(var i=0; i<hours.length; i++)
        {
            var li1= document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent= 
            hours[i]+ "    :   "+this.cookiesPerHour[i] + "    cookies";
        }
    }
   
}
Lime.randomCusNum();
Lime.render();