
        // function greet(){
        //     console.log("Good morning my friend!");
        // }
        // greet();

        let greet = () =>{console.log("Good morning my friend!")};
        greet();

        setTimeout(() => {
            console.log("We are inside setTimeout")
        }, 5000);

        let sum = (a,b) => a+b;

        let half = (a) => a/2;

        let obj = {names:['Carry','Harry','Tom','Tatya Vinchu'],
        speak(){
            this.names.forEach((students)=>{
                console.log("Good Morning " + students)
            })
        }}
        obj.speak();

        let obj1 = {que:' Ki Hal?', names:['Carry','Harry','Tom','Tatya Vinchu'],
        speak1(){
            this.names.forEach((students)=>{
                console.log("Good Morning " + students+ this.que)  
                 //'this' variable is normally used to point the variable inside the function. But in the case of arrow functions, it points the variable outside the function. This is known as 'lexical this'. 
            })
        }}
        obj1.speak1();
        

        function speak2(){

            console.log(' ')
        }
   
