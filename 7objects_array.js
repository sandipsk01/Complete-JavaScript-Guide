

        const arr=[1,2,3,4];
        function restOperator(...vals){    //rest operator: when not sure of no. of args
            for(let i of vals){
                arr.push(i);
            }
            console.log(arr)
        }
        restOperator(5,6,7,8);

        var arr1=[1,2,3];
        console.log(arr1);
        var arr2=[...arr1];     // Spread Operator: Makes shallow copy of array or change in arr1 will not affect arr2;
        var merge=[...arr1, ...arr2];    //merge
        arr1.push(4);
        console.log(arr1);
        console.log(arr2);
        console.log(merge);
        
        let newVar1 = 1;
        let newVar2 = 'Sandip';
        let newVar3 = '2'==2;
        console.log(newVar3);
        let newVar4 = '2'===2;   //it will compare elements directly without changing the datatype.
        console.log(newVar4);
        let newVar5 = undefined;
        let newObj = {'name':'Shrinivas', 'salary':350000, 'company':'Krios'};
        console.log(newObj);
        console.log(newObj.name);
        let newArray = [1,'Sandip',true,undefined];   //array is also a type of object.
        console.log(newArray);
        console.log(newArray[1]);
        let newArray1 = new Array(23);  //to make array of 23 empty elements.
        console.log(newArray1);
        let newArray2 = new Array(5, 1, 'Ashish', undefined);
        console.log(newArray2);
        console.log(newArray2.length);
        console.log(newArray2.sort());
        newArray2.push('Pushed');   //to add itwm at the end
        console.log(newArray2);
   
