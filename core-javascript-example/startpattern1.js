
    function run() {
        for (let i = 0; i < 5; i++) {
            let temp = "*"
            let space = ""
            for (let j = 0; j < i; j++) {
                temp += "*"; //way 1
                //temp = temp + "*";  //way 2
                //temp = temp.concat("*"); //way 3
            }
            console.log(temp);
        }
    }
