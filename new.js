function toggleClass(){
	var element=document.getElementById('send message');
	element.classList.toggle("active")
}





const contactus = document.getElementById('contactus');
const email = document.getElementById('email');
const submission = document.getElementById('submission'); emailField.addEventListener('keyup', function (event)
 { 
 isValidEmail = email.validateEmail(); if ( isValidEmail ) { submission.disabled = false; } else { submisdion.disabled = true; }}); okButton.addEventListener('click', function (event) { contactus.submit();});












/*document.querySelector('form').addEventListener('send message',function(e){
e.preventDefault()	
const messageCheck =document.querySelector('.message').value
const emailCheck=document.querySelector('.email').value
const FullnameCheck=document.querySelector('.text').value
const userName=/^[a-zA-Z]+ [a-zA-Z]+$/;
	const Email=/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|( ".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA -Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const message="/^[0-9]+$/";
if (FullnameCheck.length >4 && Fullname.match(userName)&& messageCheck.length>=20 && !messageCheck.match(message)&& emailCheck.match(Email)){
	const goodResult= document.queryselector('.submission')
	goodResult.style.display='block';
	
}


else{
	const newWord = document.createElement('p')
	newWord.textcontent = 'invalid email address, FullName or Message';
	document.querySelector('.error').appendChild(newWord);
	newWord.style.backgroundColor='red';
	newWord.style.textAlign ='center';
	document.querySelector('.submission').addEventListener('click', function(){ return newWord.remove()
	
	}
	newWord.style.display='block';
}
})*/