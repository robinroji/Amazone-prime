



function goTop(){
  window.scrollTo({top:0,behavior:"smooth"})
}
// var email= document.getElementById ('email');
// var form= document.getElementById('form');
// var email_error=document.getElementById('email_error');
// var email_check=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// form.addEventListener('submit',(e)=>

// {


//   if(!email.value.match(email_check))

//   { e.preventDefault();
//     email_error.innerHTML= "Valid email required";

//   }
//   else
//   {
//     email_error.innerHTML=" ";
   

//     // email_error.innerHTML= '';

   
//   //  return true;
//   }
//   if(email_error.innerHTML===" "){

//     e.preventDefault();
//     alert("welcome  "+email.value);
//     window.location.reload();
//   }

  
//   // if(email.value === '' || email.value == null)
//   // {
//   //   e.preventDefault();
//   //   email_error.innerHTML= "Cannot be blank";
//   // }

// })