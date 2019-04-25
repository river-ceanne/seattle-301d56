'use strict';

let imgArr = [];

console.table(imgArr);

$.get( '../data/page-1.json', function(data) {
  $.each(data, function(i, $val)
  {
    let newImage = new Image($val.image_url,$val.title,$val.description,$val.keyword,$val.horns);
    imgArr.push(newImage);
    const imgEl = document.createElement('IMG');
    const titleEl = document.createElement('cite');
    const divEl = document.createElement('div');
    imgEl.setAttribute('src',$val.image_url);
    titleEl.textContent = $val.title;
    divEl.appendChild(imgEl);
    divEl.appendChild(titleEl);
    $('#photo-template').append(divEl);
  });

  onLoad();

  $('.filter-select').on('change',handleSelect);
  $('.sort-select').on('change',handleSort);

});

console.log(imgArr);
console.log('end of loading images');
