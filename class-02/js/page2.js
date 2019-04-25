'use strict';

let imgArr = [];

console.table(imgArr);

$.get( './../data/page-2.json', function(data) {
  $.each(data, function(i, $val)
  {
    let newImage = new Image($val.image_url,$val.title,$val.description,$val.keyword,$val.horns);
    imgArr.push(newImage);
  });

  onLoad();

  $('.filter-select').on('change',handleSelect);
  $('.sort-select').on('change',handleSort);

});

console.log(imgArr);
console.log('end of loading images');
