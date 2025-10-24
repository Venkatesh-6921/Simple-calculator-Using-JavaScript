 function add() {

            let a = +(document.getElementById('Num1').value);
            let b = +(document.getElementById('Num2').value);

            document.getElementById('Num1').value = "";
            document.getElementById('Num2').value = "";

            document.getElementById("con").innerHTML = "The Addition is " + (a + b);
        }

        function sub() {
            let j = +(document.getElementById('Num1').value);
            let k = +(document.getElementById('Num2').value);

            document.getElementById('Num1').value = "";
            document.getElementById('Num2').value = "";

            document.getElementById("con").innerHTML = "The Subraction is " + (j - k);
        }

        function Mul() {
            let x = +(document.getElementById('Num1').value);
            let y = +(document.getElementById('Num2').value);

            document.getElementById('Num1').value = "";
            document.getElementById('Num2').value = "";

            document.getElementById("con").innerHTML = "The Multipication is " + (x * y);

        }

        function Div() {
            let c = +(document.getElementById('Num1').value);
            let d = +(document.getElementById('Num2').value);

            document.getElementById('Num1').value = "";
            document.getElementById('Num2').value = "";


            document.getElementById("con").innerHTML = "The Divison is " + (c / d);
            ;
        }

        function Rem() {
            let p = +(document.getElementById('Num1').value);
            let q = +(document.getElementById('Num2').value);

            document.getElementById('Num1').value = "";
            document.getElementById('Num2').value = "";


            document.getElementById("con").innerHTML = "The Remainder is " + (p % q);
        }