function getIt(){
  alert('Hey!');
}

$('p').on('click', getIt);


$('img').on('load', function(){
  
 $('img').addClass("tasty");
 
});

function frameIt(){
  
 return $('img').addClass('tasty');
 
}

$('img').on('load', frameIt);


function pressIt(){
  
  $('form').on('keydown', function(){
    if($('input').val() == 'G'){
      alert('the G key was pressed down');
    }
  });
  
}



