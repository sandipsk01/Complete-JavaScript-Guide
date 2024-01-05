<!DOCTYPE html>
<html>

<head>
    <title>DOM Manipulation</title>

</head>

<body>
    <style>
        body * {
            margin: 10px;
            border: 2px solid red
        }
    </style>
    <div style="background-color: yellow;">
        <div style="background-color: yellowgreen;" id="innerDiv">
            <h3 style="background-color: green;">Inner Heading</h3>
        </div>
    </div>

    <script>
// Event Delegation: The prpcess of attaching event handler to parent element and handling events taht occurs on it child elements
//Event Propogation

//Bubbling: If the same event handler is is linked to inner & outer nodes then eventhandler of outer nodes will automatucally get executed when event occurs on inner node.
      //Order of execution is inner to outer
document
  .querySelector('h3')
  .addEventListener('click', (event) => {
    event.stopPropagation(); 
    // In  callback function of addEventListener, pass 'event' arg and call event.stopPropogation().
    // Event Propogation will get stopped except captured event.
    console.log('Heading 3 Clicked');
  });

document
  .getElementById('innerDiv')
  .addEventListener('click', () =>
    console.log('Inner Div Clicked')
  );

document
  .getElementsByTagName('div')[0]
  .addEventListener('click', () =>
    console.log('Outer div Clicked'),true   
    // Capturing: Add 'true' as third argument to eventhandler. Order of execution of captured events is outer to inner. 
    // These eventHandler will excecute no matter there is stopPropagation.
  );
document.body.addEventListener('click', () =>
  console.log('Body Clicked')
);

    </script>

</body>

</html>
