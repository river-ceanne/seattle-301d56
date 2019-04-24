'use strict';

const sectionPhotos = document.getElementById('photo-template');
let imgArr = [];

//**********************************************//

function Image(image_url,title,description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}


$.get( 'data/page-1.json', function(data) {
  $.each(data, function(i, $val)
  {
    let newImage = new Image($val.image_url,$val.title,$val.description,$val.keyword,$val.horns);
    imgArr.push(newImage);
    // sectionPhotos.appendChild(imgEl.setAttribute('src'),newImage.image_url);
    const imgEl = document.createElement('IMG');
    imgEl.setAttribute('src',$val.image_url);
    $('#photo-template').append(imgEl);
  });

}, 'json' );


imgArr.forEach(function(element){

  sectionPhotos.appendChild();
});

console.table(imgArr);

