
        let jsonObj = {
            name: "Sandy",
            channel: "CWH",
            friend: "Smith",
            food: "Bhindi" //#bhindiLoverSquad
        } 
        console.log(jsonObj);
        let myJsonStr = JSON.stringify(jsonObj);   // to send data to server in string type
        console.log(myJsonStr);

        myJsonStr = myJsonStr.replace('Sandy', 'Larry');
        console.log(myJsonStr)

        newJsonObj = JSON.parse(myJsonStr);       // to recieve data from server in Object type
        console.log(newJsonObj);
