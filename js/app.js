$(document).ready(function(){


    var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var callback = '&callback=JSON_CALLBACK';



            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
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
            $(document).mouseup(function(){
                    if(isOpen === true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
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
