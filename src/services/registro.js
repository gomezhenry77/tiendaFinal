import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")
botonRegistro.addEventListener("click",function(evento){
    //frenar el comportamiento por defecto(en este caso es porque el formulario se limpia y autorecarga pero no queremos eso)
    event.preventDefault()
    //con value captura lo que el usuario escriba en la caja
    let email=document.getElementById("correo").value
    let password=document.getElementById("password").value
    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("registro exitoso")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("upss fallamos"+errorMessage)
      });

})