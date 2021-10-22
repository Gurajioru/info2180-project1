/* Add your JavaScript to this file */
window.onload = function(){
    let submission = document.getElementsByTagName('button');
    console.log(submission);
    submission[0].addEventListener('click',handleClick);
    console.log(submission[0]);
};

function handleClick(e){

    e.preventDefault();
    var msg = document.getElementsByClassName('message')[0];
    var email = document.getElementById('email').value;
    console.log(email);
    console.log(validEmail(email));

    if (email.length==0 || validEmail(email)==false){
        msg.textContent="Please enter a valid emial address";

    }else{
        msg.textContent="Thank you! Your email address "+email+" has been added to our mailing list!";
    }

    console.log(msg);
}

function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}