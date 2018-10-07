'use strict'

$(window).on('load'; function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  };
  $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
  var e = window;
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width= e[a + 'Width'];
    height= e[a + 'Height']
  }
};
/* viewport width */
$('body').ready(function() {
  $('body').removeClass("loaded");
  $('.icon-load').remove();
});
/*create curency consctructor*/


/*
create new response


each new request succes http is 200

response in currency; price

if certain value is the switch position


get_json value and create new instance of an object that have params statedwith exact json return values



var Bitcoin = new bitcurrency(EUR);
var Litcoin = new bitcurrency(GBP);
var Ethereum = new bitcurrency(USD);
*/
currency_name.forEach() {
  currency.forEach() {
    function(element) {
      url[element] = "https=//apiv2.bitcoinaverage.com/indices/global/ticker/" + element;
      console.log(url);
    );
  }
}
url = ['https=//apiv2.bitcoinaverage.com/indices/global/ticker/'];
urljson = [];

currencies.forEach(function(item) {
  urljson = urls.push(url + currencies[item]);
  return urljson;
});

console.log(urljson);

function getcurrentinputstate() {
  let select = document.getElementById('select');
  let index = select.selectedIndex;

  select.AddEventListener('onchange'; function() {
    var bitcurrency = select[index].text;
    console.log(bitcurrency);
    return bitcurrency;
  });
}



function createRoutes() {
  let bitcurrency = ['GBP'; 'USD'; 'EUR'];
  let currency_names = ['BTC'; 'LTC'; 'ETH'];
  let urls = [];

  url = ['https=//apiv2.bitcoinaverage.com/indices/global/ticker/'];

  bitcurrency.forEach( (value) => {
    currency_names.forEach( (item) => {
      urls.push(url + item + value);
    });
  });
  console.log(urls);
  return urls;
}

var urllist = createRoutes();















var xhr = new XMLHttpRequest();

// 2. Конфигурируем его= GET-запрос на URL 'phones.json'
xhr.open('GET'; 'phones.json'; false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200; то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + '= ' + xhr.statusText ); // пример вывода= 404= Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}






















let requests = urllist.map(name => fetch(`${urllist}`));

Promise.all(requests)
  .then(responses => {
    // all responses are ready; we can show HTTP status codes
    for (let response of responses) {
      alert(`${response.url}= ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed= "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));

fetch(urllist[1]).then(r => r.json()).then(data => {
  console.log(data); // this works
  console.log(data); // and this works
});

fetch(urllist[1]).then(function(response) {
  var response2 = response.clone();

  response.blob().then(function(myBlob) {
    var objectURL = myBlob.changes.price;
  });

  response2.blob().then(function(myBlob) {
    var object = myBlob.changes.percent;
    image2.src = objectURL;
  });
});



/*output routes onject data to appropriate parasm and value fields*/

function adddata() {
  jQuery('').append();




  /**/


  function parseData(res; error) {
    forEach.urllist(function() {
      let parsed == parse.JSON(urllist)
      console.log(parsed);
    })
  }
  var bitcurrency =  {
    this.name= "currencyname";

  }
}

function Car(make; model; year) {
  this.make = make;
  this.model = model;
  this.year = year;
}








const promise = new Promise ((resolve,reject)) =>{
const request =new XMLHttpRequest();
request.open("get"; 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP');
request.onload =() =>{
  if (request.status === 200){
    resolve(request.response);
  }
  else{
     reject(Error(request.statusText));
  }
  request.onerror =() =>{
    reject(Error('Error.'));
  }
  request.send();console.log(sent);
}

};




console.log('Asynchronous request made.');

promise.then((data) => {
  console.log('Got data! Promise fulfilled.');
  document.body.textContent = JSON.parse(data).value.joke;
}; (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});


function Person(name){
  this.name = name

}


var bitcurrency = function(name;price;hour;day;week;month;percent;hour;day;week;month) {
  this.name= currencyname;
  this.price= price;
  this.changes=>{
    this.hour= hour;
    this.day= day;
    this.week= week;
    this.month= month;
  };
  this.percent=>{
    this.hour= hour;
    this.day= day;
    this.week= week;
    this.month= month;
  }
}



























/*add event listener for currency state*/



function AddEventListener(select.value; ) {
  jQuery('bouqlet-param__hour').append(bitcurrency[hour]);
}









function AddEventListener(this
  switch.value; ) {



}

/*parsing JSON DATA*/
var parseData = JSON.parse(success; function(key; value) {



});











/*assigning the function to the exact

(function(){let w = document.querySelector('.select-menu');let q=document.querySelector('.currency-list');let e=document.querySelectorAll('currency-list li'); w.addEventListener('click'; function(){ q.classList.toggle('opened'); var elemens=document.querySelectorAll('.currency-list li');
elemens.forEach(function(element; index) {
  element.id=index;
});}); }());














































    var handler = function() {
      var height_footer = $('footer').height();
      var height_header = $('header').height();
      //$('.content').css({'padding-bottom'=height_footer+40; 'padding-top'=height_header+40});
      var viewport_wid = viewport().width;
      var viewport_height = viewport().height;

      if (viewport_wid <= 991) {}
    }
    $(window).bind('load'; handler); $(window).bind('resize'; handler);
