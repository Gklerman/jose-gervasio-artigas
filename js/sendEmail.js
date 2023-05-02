
const eName = document.getElementById('name');
const eMail = document.getElementById('email');
const eMessage = document.getElementById('message');
const eSubmit = document.getElementById('action');

eSubmit.addEventListener('submit',(e) => {
    e.preventDefault();

    let emailBody = `<b>Nombre: </b>${eName.value}<br>
                    <b>Email: </b>${eMail.value}<br>
                    <b>Mensaje: </b>${eMessage.value}`;

    Email.send({
        SecureToken : "c1e4b921-b2c1-421a-b6ac-94f23f2543ec",
        To : 'gklerman@hotmail.com',
        From : "gklerman@hotmail.com",
        Subject : "New web contact from " + eMail.value,
        Body : emailBody
    }).then(
      message => alert(message),
    )

    eSubmit.reset();

});

//setTimeout(eSubmit.reset(), 3000);
//smtp.elasticemail.com

