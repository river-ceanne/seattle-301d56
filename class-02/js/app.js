'use strict';

let imgArr = [];

//*********FEATURE 1 - DISPLAYING IMAGES*********************//

function Image(image_url,title,description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

console.table(imgArr);

$.get( '../data/page-1.json', function(data) {
  $.each(data, function(i, $val)
  {
    let newImage = new Image($val.image_url,$val.title,$val.description,$val.keyword,$val.horns);
    imgArr.push(newImage);
    const imgEl = document.createElement('IMG');
    imgEl.setAttribute('src',$val.image_url);
    $('#photo-template').append(imgEl);
  });

  onLoad();

  $('.filter-select').on('change',handleSelect);

});

console.log(imgArr);
console.log('end of loading images');


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
