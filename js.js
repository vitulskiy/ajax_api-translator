$(document).ready(function(){
  $('#news').change(function(){
    var sel = $('#news option:selected').data('name');
    $('div.news').text(' ');
    $.ajax(sel+'.html', {
      success: function(result){
        $('div.news').append(result);
      },
      error: function(){
        $('div.news').append('<p>Ошибка</p>')
      }
    })
  });


  $('button').on('click', function(){
    var text = $('.text').val();
    var lang = $('.lang option:selected').data('name');
    $.getJSON ('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160711T205555Z.b902b84191525374.f907ad283a4c665ae318ead526486a69acb12c62&text='+text+'&lang=ru-'+lang+'&[format=plain]',
    function(result){
      $('p.asdasd').text('');
      $('p.asdasd').append(result.text);
      }
    );
  });
});
