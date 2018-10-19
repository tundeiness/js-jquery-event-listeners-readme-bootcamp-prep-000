function getIt(){
  alert('Hey!');
}

$('p').on('click', getIt);


$('img').on('load', function(){
  //actions you want to happen
  
 // this is where you want to add the classname
 $('img').addClass("tasty");
 
});

function frameIt(){
  
 return $('img').addClass('tasty');
 
}

$('img').on('load', frameIt);

