/* On attribue aux variables la valeur des champs du formulaire */

const   bouton = document.getElementById('bouton'),
        nom = document.getElementById('nom'),
        prenom = document.getElementById('prenom'),
        email = document.getElementById('email'),
        demande = document.getElementById('demande'),
        mas = document.getElementById('mas'),
        fem = document.getElementById('fem');

/* Les regex afin de veiller au bon remplissage du formulaire (oui j'ai forcé un peu.) */
        regexNom = /^[/^[\wÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_\s-]+$/i,
        regexPrenom =  /^[\wÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_\s-]+$/i,
        regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        regexCp = /^[0-9]{5}$/;

/* La fonction qui vérifie tout le formulaire */
function verification(event)
{ /* On teste la valeur de la variable par rapport à la Regex, cela se déclenche si la fonction trouve une erreur*/
    if(!regexNom.test(nom.value))
    {   
/* SI le champ est vide */
        if(nom.validity.valueMissing)
        { 
/* l'event.preventDefault empêche l'envoi du formulaire en cas d'erreur */ 
        event.preventDefault();
/* je déclare la variable erreurNom qui vaux le span missNom dans l'HTML qui jusqu'alors était vide.
Je lui donne un texte à l'intérieur, une couleur et la taille de la font */
        let erreurNom = document.getElementById('missNom');
        erreurNom.textContent = "Tu dois entrer un nom";
        erreurNom.style.color = "#fba"; 
        erreurNom.style.fontSize = "20px"; 
        }
        else
        	/* SINON, la Regex n'est pas respectée*/
        {
            event.preventDefault();
            let erreurNom = document.getElementById('missNom');
            erreurNom.textContent = "Caractère alphabétique uniquement.";
            erreurNom.style.color = "#fba";
            erreurNom.style.fontSize = "20px";
        
        }
		
    }
    else{         let erreurNom = document.getElementById('missNom');
        erreurNom.textContent = "";
  }
    /* Même chose avec le prénom */
    if(!regexPrenom.test(prenom.value))
    {
        if(prenom.validity.valueMissing)
        {
            event.preventDefault();
            let erreurPrenom = document.getElementById('missPrenom');
            erreurPrenom.textContent="Tu dois entrer un prénom";
            erreurPrenom.style.color = "#fba";
            erreurPrenom.style.fontSize = "20px";
        }
        else
        {
            event.preventDefault();
            let erreurPrenom = document.getElementById('missPrenom');
            erreurPrenom.textContent="Caractère alphabétique uniquement.";
            erreurPrenom.style.color = "#fba";
            erreurPrenom.style.fontSize = "20px";
        }
    }
    else{
        let erreurPrenom = document.getElementById('missPrenom');
        erreurPrenom.textContent = "";

 }
    /* La regex pour le mail n'est pas la même que les prénoms : on lui demande de vérifier la présence d'une arobase, et de caractères qui la suivent. */
    if(!regexEmail.test(email.value))
    {
        if(email.validity.valueMissing)
        {
            event.preventDefault();
            let erreurEmail = document.getElementById('missEmail');
            erreurEmail.textContent = "Tu dois entrer un e-mail.";
            erreurEmail.style.color = "#fba";
            erreurEmail.style.fontSize = "20px";
        }
        else
        {
            event.preventDefault();
            let erreurEmail = document.getElementById('missEmail');
            erreurEmail.textContent = "email invalide, format : jean0@dupont.fr";
            erreurEmail.style.color = "#fba";
            erreurEmail.style.fontSize = "20px";
        }
    }
    else{         let erreurEmail = document.getElementById('missEmail');
    erreurEmail.textContent = "";
 }

    if(demande.validity.valueMissing)
    {
        event.preventDefault();
        let erreurDemande = document.getElementById('missDemande');
        erreurDemande.textContent = "Tu dois indiquer ta demande.";
        erreurDemande.style.color = "#fba";
        erreurDemande.style.fontSize = "20px";
    }
    else{         let erreurDemande = document.getElementById('missPrenom');
    erreurDemande.textContent = "";
 }
/* Si aucun choix n'a été fait au bouton radio, renvoie une erreur */
    if(mas.validity.valueMissing && fem.validity.valueMissing && other.validity.valueMissing)
    {
        event.preventDefault();
        let missSexe = document.getElementById('sexe');
        missSexe.textContent = "Information requise.";
		missSexe.style.color = "#fba";
        missSexe.style.fontSize = "20px"; 
    }
    else{ 
        let missSexe = document.getElementById('sexe');
        missSexe.textContent = "";

    }
/* Même chose avec la date */
    if(birth.validity.valueMissing)
    {
    	event.preventDefault();
    	let missBirth = document.getElementById('missBirth');
    	missBirth.textContent= "Date de naissance requise.";
 		missBirth.style.color = "#fba";
        missBirth.style.fontSize = "20px"; 
    }
    else{ 
        let missBirth = document.getElementById('missBirth');
        missBirth.textContent = "";
    }

    if(!regexCp.test(postal.value))
    	/* Le regex du code postal lui demande de soit contenir 5 chiffres, soit d'être vide. Autrement c'est une erreur */
    {

    	    event.preventDefault();
            let erreurCp = document.getElementById('missCp');
            erreurCp.textContent = "Code Postal invalide.";
            erreurCp.style.color = "#fba";
            erreurCp.style.fontSize = "20px"; 
        
    }
    else{ 
        let erreurCp = document.getElementById('missCp');
        erreurCp.textContent = "";
    }
}
/* le bouton déclenche la fonction au clic */

bouton.addEventListener('click', verification);