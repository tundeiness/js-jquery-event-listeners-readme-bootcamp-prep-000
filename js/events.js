function getIt(){
  alert('Hey!');
}

$('p').on('click', getIt);

<<<<<<< HEAD
$('img').on('load', function(){
  //actions you want to happen
  
 // this is where you want to add the classname
 $('img').addClass("tasty");
 
});
=======
function frameIt(){
  
 let element = document.getElementsByTagName('img');
 return   element.className += "tasty";
 
}

$('img').on('load', frameIt);
>>>>>>> 3309544dc54ef409a9f87e99c2ac29ddd04147f9
