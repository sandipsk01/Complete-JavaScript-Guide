
        let jsonObj = {
            name: "Sandy",
            channel: "CWH",
            friend: "Smith",
            food: "Bhindi" //#bhindiLoverSquad
        } 
        console.log(jsonObj);
        let myJsonStr = JSON.stringify(jsonObj);
        console.log(myJsonStr);

        myJsonStr = myJsonStr.replace('Sandy', 'Larry');
        console.log(myJsonStr)

        newJsonObj = JSON.parse(myJsonStr);
        console.log(newJsonObj);
