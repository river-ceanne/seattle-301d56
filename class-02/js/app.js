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

});

console.log(imgArr);
console.log('end of loading images');


//***********FEATURE 2 - FILTER*****************************//
console.log('start of imageArr foreach outside func');


// $(document).ready(function (){
//   console.log('dox get ready part');

//   let keys = [];

//   imgArr.forEach(function(element){
//     if(!keys.includes(element.keyword)){
//       keys.push(element.keyword);
//       console.log('inside for each ' + element);
//     }
//   });

//   console.log(keys);

//   imgArr.forEach(function(element){

//     console.log('element : ' + element);
//     const optEl = document.createElement('option');
//     optEl.setAttribute('value',element.keyword);
//     optEl.id = element.title;
//     console.log(optEl + 'opt El');

//     let o = new Option(element.keyword,element.keyword);
//     /// jquerify the DOM object 'o' so we can use the html method
//     $(o).html(element.keyword);
//     $('#filter-select').append(o);

//     console.log('end of foreach');
//   });

// });

function onLoad(){

  let keys = [];

  imgArr.forEach( function(element){
    if(!keys.includes(element.keyword))
      keys.push(element.keyword);
    console.log(element.keyword);
  }

  );
  console.log(keys);

  imgArr.forEach(function(element){

    console.log('element : ' + element);
    const optEl = document.createElement('option');
    optEl.setAttribute('value',element.keyword);
    optEl.id = element.keyword;
    console.log(optEl + 'opt El');

    let o = new Option(element.keyword,element.keyword);
    /// jquerify the DOM object 'o' so we can use the html method
    $(o).html(element.keyword);
    $('#filter-select').append(o);

    console.log('end of foreach');
  });

}

console.log('end of app.js');

