'use strict';

//*********FEATURE 1 - DISPLAYING IMAGES*********************//

function Image(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}


//***********FEATURE 2 - FILTER*****************************//
console.log('start of imageArr foreach outside func');


function onLoad() {

  let keys = [];

  imgArr.forEach(function (element) {
    if (!keys.includes(element.keyword))
      keys.push(element.keyword);
    console.log(element.keyword);
  }

  );
  console.log(keys);

  keys.forEach(function (element) {

    console.log('element : ' + element);
    const optEl = document.createElement('option');
    optEl.setAttribute('value', element);
    optEl.id = element;
    optEl.text = element;
    console.log(optEl.value);
    $('.filter-select').append(optEl);
  });

  const optElTitle = document.createElement('option');
  optElTitle.setAttribute('value', 'Title');
  optElTitle.id = 'Title';
  optElTitle.text = 'Title';
  $('.sort-select').append(optElTitle);
  const optElHorns = document.createElement('option');
  optElHorns.setAttribute('value', '# of Horns');
  optElHorns.id = '# of Horns';
  optElHorns.text = '# of Horns';
  $('.sort-select').append(optElHorns);

  showSortedImages('Title');

}

function handleSelect(e) {
  e.preventDefault();
  console.log(e.target.value);
  showFilterImages(e.target.value);

}

function showFilterImages(keywordSelected) {

  $('#photo-template').empty();

  imgArr.forEach(function (element) {
    if (keywordSelected === element.keyword) {
      var photoTemplateScript = $('#images-handlebars-template').html();
      console.log(photoTemplateScript);
      // Compile the template
      var photoTemplate = Handlebars.compile(photoTemplateScript);

      // Pass our data to the template
      var compiledHtml = photoTemplate(element);

      // Add the compiled html to the page
      console.log(compiledHtml);
      $('#photo-template').append(compiledHtml);
    }
  });

}

function handleSort(e) {
  e.preventDefault();
  console.log(e.target.value);
  showSortedImages(e.target.value);
}

function showSortedImages(sortWord) {

  $('#photo-template').empty();

  if (sortWord === 'Title') {
    sortByTitle();
  }

  if (sortWord === '# of Horns') {
    sortByHorns();
  }

  imgArr.forEach(function (element) {

    // Grab the template script
    var photoTemplateScript = $('#images-handlebars-template').html();
    console.log(photoTemplateScript);
    // Compile the template
    var photoTemplate = Handlebars.compile(photoTemplateScript);

    // Pass our data to the template
    var compiledHtml = photoTemplate(element);

    // Add the compiled html to the page
    console.log(compiledHtml);
    $('#photo-template').append(compiledHtml);

  });

}

function sortByTitle() {
  imgArr.sort(function (a, b) {
    let newA = a.title.toLowerCase();
    let newB = b.title.toLowerCase();
    if (newA < newB) { return -1; }
    if (newA > newB) { return 1; }
  });
  //return imgArr;
  console.log(imgArr);
}

function sortByHorns() {
  imgArr.sort(function (a, b) {
    return a.horns - b.horns;
  });

  console.log(imgArr);
}


