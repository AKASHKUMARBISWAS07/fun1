Create one function with zero parameter having a console statement
ans:

<script>
    console.log("Akash");
</script>

Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
 ans:

    <script> 
        let a=3;
        b=4;
        console.log(a+b);
     </script>

 Create one arrow function

    ans:

    <script> 
        const Even = (x) =>{ 
         return x % 2 == 0; }
     console.log(Even(3));
     console.log(Even(4));
     console.log(Even(5));
     console.log(Even(6));
     console.log(Even(7));
     console.log(Even(8));
     console.log(Even(9));
     console.log(Even(10));
     </script>


. "Print output: 
    var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    };
    girl ();

 ans: undefined 


"Print output: 
    var x = 21;
    girl ();
    console.log(x)
    function girl() {
        console.log(x);
        var x = 20;
    }

ans: undefined
    21
"Print output

    var x = 21;
    a();
    b();
    console.log(a);
    a = function() {
        
       x = 20;
      console.log(x);
    };
    b = function() {
        
        x = 40;
       console.log(x);
    };
ans: a is not defined

Write a function that accepts parameter n and returns factorial of n
    ans:

    <script> 
        function test() {
       console.log(arguments);
       let sum = 0
       for (let i = 0; i < arguments.length; i++) {
         sum += arguments[i];
       }
       console.log(sum)
       return sum;
     }
     test(3, 4, 7);
     test(3, 4, 7, 10, 20);
     test(3, 4, 4, 8); 
     </script>