
        var a='a';    //var has functional, can be redeclared and reassigned.
        console.log(a);
        let b='b';    //let has block scope, can be reassigned but not redeclared.
        {
            let b='b1'; 
            console.log(b);   // b1
            console.log(a);
        }
        const c='This can not be changed';   //const has block scope, and cannot be redeclared or reassigned.
        console.log(c);
        c='This can not be changed bro';
   
