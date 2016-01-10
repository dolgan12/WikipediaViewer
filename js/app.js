$(document).ready(function(){






            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var submitButton = $('.searchbox-submit');
            var rubrik = $('.rubrik');
            var info = $('.info');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen === false){
                    searchBox.addClass('searchbox-open');
                    searchBox.animate({'right' : "-=275px"}, 200);
                    info.slideUp(200);
                    rubrik.delay(900).slideUp(500);
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    try {
                      $(".searchResultLink").slideDown(200);
                      $(".searchResultLink").remove();
                    } catch (e) {

                    }


                    searchBox.delay(700).animate({'right' : "+=275px"}, 200);
                    info.slideDown(200);
                    rubrik.delay(1000).slideDown(500);
                    isOpen = false;
                }
            });


             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            /*$(document).mouseup(function(){
                    if(isOpen === true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });*/


        });
function buttonUp(){
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
    $('.searchbox-icon').css('display','none');
    } else {
      $('.searchbox-input').val('');
      $('.searchbox-icon').css('display','block');
      }
}

function submitClick(){
  var wikiPic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Wikipedia.png/75px-Wikipedia.png';
  var searchUrl = 'http://en.wikipedia.org/?curid=';
  var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  var callback = '&callback=?';
  var inputBox = $('.searchbox-input');
  var searchTerm = inputBox.val();
  $(".searchResultLink").slideDown(200);
  $(".searchResultLink").remove();
  $.getJSON(api + searchTerm + callback)
  .success(function(data){
    pages = data.query.pages;
    $.each(pages,function(index, item){
      console.log(item.pageid);
      var picture;
      if(item.thumbnail === undefined){
        picture = wikiPic;
      }else {
        picture = item.thumbnail.source;
      }
      var html = '<a class="searchResultLink" href="' + searchUrl + item.pageid + '" target="_blank">' +
        '<div class="searchResult hvr-reveal">' +
        '<img src="' + picture + '" class="searchImage">' +
        '<h2 class="searchTitle">' + item.title + '</h2>' +
        '<p class="extract">' + item.extract + '</p>' +
        '</div></a>';

     $('.wrapper').append(html);
    });
  })
  .then(function(){
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display','block');
  });
  return false;
}
