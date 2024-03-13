window.addEventListener("load",function(){
    //HTML checks the form first before submiting and if it violates any condition the form has it will not send it and thus the submit trigger never triggers
    document.querySelector("input[type=\"submit\"]").addEventListener('click',function(event){
        event.preventDefault();
        let form = document.getElementById("mainForm");
        let name = document.querySelector("input[type=\"text\"]");
        let errorName = document.getElementById("textError");
        let email = document.querySelector("input[type=\"email\"]");
        let errorEmail = document.getElementById("emailError");
        let age = document.querySelector("input[type=\"number\"]");
        let errorAge = document.getElementById("ageError");
        let error = false;
    
        if(name.validity.valueMissing){
            
            errorName.innerHTML = "Nombre es obligatorio";
            error=true;
        }else{
            errorName.innerHTML = "";
        }

        if(email.validity.typeMismatch){
            errorEmail.innerHTML = "El formato no es de email";
            error=true;
        }else{
            errorEmail.innerHTML="";
        }

        if(age.validity.rangeUnderflow){
            errorAge.innerHTML="Menores no permitidos";
            error=true;
        }else{
            errorAge.innerHTML="";
        }

        if(!error){
            form.submit();
        }
    });
})
