'use strict';

//*********FEATURE 1 - DISPLAYING IMAGES*********************//

function Image(image_url,title,description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}



//***********FEATURE 2 - FILTER*****************************//
console.log('start of imageArr foreach outside func');


function onLoad(){

  let keys = [];

  imgArr.forEach( function(element){
    if(!keys.includes(element.keyword))
      keys.push(element.keyword);
    console.log(element.keyword);
  }

  );
  console.log(keys);

  keys.forEach(function(element){

    console.log('element : ' + element);
    const optEl = document.createElement('option');
    optEl.setAttribute('value',element);
    optEl.id = element;
    optEl.text = element;
    console.log(optEl.value);
    $('.filter-select').append(optEl);
  });

}

function handleSelect(e){
  e.preventDefault();
  console.log(e.target.value);
  showFilterImages(e.target.value);

}

function showFilterImages(keywordSelected){

  $('#photo-template').empty();

  imgArr.forEach( function(element){
    if(keywordSelected === element.keyword){
      const imgEl = document.createElement('IMG');
      imgEl.setAttribute('src',element.image_url);
      $('#photo-template').append(imgEl);
    }
  });

}
