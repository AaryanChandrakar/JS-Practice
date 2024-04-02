                                            //Scope level and Mini Hoisting

function one(){
    const username = "Dayal"

    function two(){
        const website = "YouTube"
        console.log(username)
    }
    //console.log(website);            // ye error dega, bachha bado se icecream mang skta h, but bade bacche se ni mang skte

    two()                             // agr one call hua to, two one k andar h to, two bhi run hoga, call for two hoga to output bhi dega
}

//one()

//----------------------------------------------------------------------------

if (true){
    const state = "CG"

    if(state === "CG"){
        const city = "Raipur"
        console.log(state+" "+city);
    }
}

//+++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++

console.log(addOne(5));             // ye krne se koi error ni ayga 
function addOne(num){               // normal function 
    return num + 1;
}

// niche vali concept Hoisting k andar ati h
//console.log(addTWO(5));            // ye krne se error ayga, kuki vo variable define hi ni hua h aur hum call kr rhe h func. ko jo us variable m value return krega
const addTWO = function (num){     // function add variable in JS, to hold value
    return num + 2;
}

//console.log(addOne(5));
//console.log(addTWO(5));