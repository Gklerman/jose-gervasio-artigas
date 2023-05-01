
const eName = document.getElementById('name');
const eMail = document.getElementById('email');
const eMessage = document.getElementById('message');
const eSubmit = document.getElementById('action');

eSubmit.addEventListener('submit',(e) => {
    e.preventDefault();

    Email.send({
        SecureToken : "a5a34d22-1e7a-4ccf-862f-7af0aef62b07",
        To : 'gklerman@hotmail.com',
        From : "gklerman@hotmail.com",
        Subject : "Testing e-mail",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

});



