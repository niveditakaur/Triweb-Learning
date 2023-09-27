let Myuser = null;   //global variable

const blue_block = document.getElementById('blue_block');
const pink_block = document.getElementById('pink_block');
const yellow_block = document.getElementById('yellow_block');
const green_block = document.getElementById('green_block');

const add_user = document.getElementById('add_user');
const delete_user = document.getElementById('delete_user');

const move_to_blue = document.getElementById('move_to_blue');
const move_to_pink = document.getElementById('move_to_pink');
const move_to_yellow = document.getElementById('move_to_yellow');
const move_to_green = document.getElementById('move_to_green');

const username = document.getElementById('username');

function adduser(){
    if (Myuser == null){
        Myuser = document.createElement('div');     //Create a div to manipulate with the user name
        Myuser.className =  "My_user";              //Create class of the div
        Myuser.setAttribute('id','Myuser') ;
        Myuser.innerHTML = username.value;          //Create id of the div element
        salmon_block.append(Myuser);
        username.disabled = true;                  // do not allow input to take another value when one is already taken
        add_user.disabled = true;
        delete_user.disabled = false;             //disable delete button while username is still not added
    }
    
    
}
// Function to delete user name
function deleteuser(){
    
    
    if (Myuser != null){
        Myuser.remove();
        username.disabled = false; 
        add_user.disabled = false;
        username.value = '';
        Myuser = null;
    }
    delete_user.disabled = true;
}
add_user.addEventListener('click',adduser);
delete_user.addEventListener('click',deleteuser);

function movetoblue(){
    if (Myuser != null){
        blue_block.append(Myuser);
    }
}
function movetopink(){
    if (Myuser != null){
        pink_block.append(Myuser);
    }
}
function movetoyellow(){
    if (Myuser != null){
        yellow_block.append(Myuser);
    }
}
function movetogreen(){
    if (Myuser != null){
        green_block.append(Myuser);
    }
}
move_to_blue.addEventListener('click',movetoblue);
move_to_pink.addEventListener('click',movetopink);
move_to_yellow.addEventListener('click',movetoyellow);
move_to_green.addEventListener('click',movetogreen);