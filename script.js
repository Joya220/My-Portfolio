const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}


function validateForm(){
    const userName = document.getElementById('name').value
    const userMobile = document.getElementById('mobile').value 
    const userEmail = document.getElementById('email').value 
    const userSubject = document.getElementById('subject').value 
    const userTextarea = document.getElementById('message').value 
    
    if(userName && userMobile && userEmail && userSubject && userTextarea) {
        if(userMobile.length === 10){
            alert('submitted successfuly');
            FormData.reload();
        }
        else{
            alert('Please enter valid 10 digit number');
        }
    }
    else{
        if(!userName){
            alert('Please enter your name!');
        }
    
        else if(!userEmail) {
            alert('Enter a valid email address!');
        }

        else if(!userSubject) {
            alert('Please fill up all the field');
        }
    
        else if(userMobile.length === 10) {
            alert('Enter a valid 10 digit number');
        }
    
        else if(!userTextarea) {
                alert('Please fill up all the field');
            }
    
        else{
            alert('Submitted sucessfuly');
            FormData.reload();
        }
    }
};    


