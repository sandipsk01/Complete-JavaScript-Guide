
        var str = "This is a String"
        console.log(str);

        //To get position from start
        var position = str.indexOf("is");
        console.log(position);

        //To get position from last
        var lastPosition = str.lastIndexOf("is");
        console.log(lastPosition);

        //To slice string 
        var sliceString = str.slice(-6,-1);
        console.log(sliceString);

        //To slice string but we can't use negative values
        var subString = str.substring(1,3);
        console.log(subString);

        //To slice string, but here we give starting index and number of characters to be extracted
        var subStr = str.substr(0,4);
        console.log(subStr);

        //To replace something
        var replaced = str.replace('String', 'Sandip');
        console.log(replaced);

        //To make it uppercase
        var uppercase = str.toUpperCase();
        console.log(uppercase);

        //To make it lowercase
        var lowercase = str.toLowerCase();
        console.log(lowercase);

        //To concat strings
        var newString = str.concat(' Example');
        console.log(newString);

        //To remove space from the end
        var trimWhiteSpaceAtEnd = '    This is     String   ';
        var trimmed = trimWhiteSpaceAtEnd.split(/[ ]+/);
        console.log(trimWhiteSpaceAtEnd.trim());
        console.log(trimmed.join(' '));

        //To get char using index
        var extract = str.charAt(0);
        console.log(extract);

        //To get char using index
        console.log(str[0]);
        
        //To get charCode using index
        var extractcharcode = str.charCodeAt(0);
        console.log(extractcharcode);
