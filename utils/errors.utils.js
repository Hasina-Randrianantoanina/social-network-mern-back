module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password:''};
    
    if (err.message.includes('pseudo')) {
        errors.pseudo = "Pseudo incorrect ou déjà pris";
    }
    if (err.message.includes('email')) {
        errors.email= "Mail incorrect";
    }
    if (err.message.includes('password')) {
        errors.password= "Entrez un mot de passe de 6 caractères minimum"
    }
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo')) {
        errors.pseudo = "Pseudo déjà pris";
    }
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) {
        errors.email = "Email déjà enregisté";
    }
    return errors;
};

module.exports.singInErrors = (err) => {
    let errors = { email: "", password: "" };

    if (err.message.includes('email')) {
        errors.email = "Mail non reconnu";
    }
    if (err.message.includes('password')) {
        errors.password = "Mot de passe ne correspond pas";
    }
    
    return errors;
}