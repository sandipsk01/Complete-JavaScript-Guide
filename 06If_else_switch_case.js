
        let age = 42;
        if(age>18){
            console.log("You can drink");
        }
        else if(age==7){
            console.log("Your age is 7");
        }
        else{
            console.log("you can drink cold drink");
        }

        //if we don't use break then it will print all statements from where condition is true
        const cups=7;
        switch (cups) {
            case 4:
                console.log("Number of cups are 4");
                break;
            case 5:
                console.log("Number of cups are 5");
                break;
            case 6:
                console.log("Number of cups are 6");
                break;
            default:
                console.log("Number of cups are neither 4, 5, 6");
                break;
        }
   
