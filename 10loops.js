
        let i=0;
        for(i=0;i<4;i++){
            console.log('Value of i is '+ i);
        };

        let roomates=['Abhishek','Ashish','Shrinivas','Shiva'];
        for(index=0;index<roomates.length; index++){
            console.log(roomates[index] + ' is my roomate.');
        };

        roomates.forEach(function greet(name){
            console.log('Hello ' + name + ', Welcome to modern javascript.')
        });

        for(name of roomates){
            console.log('Hello ' + name + ', Welcome to modern javascript again.')
        };

        // for in loop used to iterate over objects
        let myInfo = {name: 'Sandip', salary: 20, company: 'TCS'};
        for(key in myInfo){    //key is string type by default
            console.log(`My ${key} is ${myInfo[key]} .`);
        };
        
        let j=0;
        while(j<5){
            console.log(j +' is less than 5.');
            j++;
        };

        // Do While loop executes at least one time min.
        n=7;
        do{
            console.log(n +' is less than 5, we are using do while loop.');
        }while(n<5);
    
