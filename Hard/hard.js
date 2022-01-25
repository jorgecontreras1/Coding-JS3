function getName(){

    let pii = { name:'Jorge', ssn:'5'};
    
    function private(){  
        return pii.ssn;
    }
    return pii.name;
    }
    console.log(getName());
