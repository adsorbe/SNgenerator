
//function makeRandomIndex is for making random index of array with data
function makeRandomIndex(availible_numbers){
    let random_index = Math.round(Math.random()*availible_numbers)
    console.log(random_index);
    return random_index;
}
//


function ODU_SN_generator_func(origin_array){
    let my_answer = document.querySelector('#ODU_SN_result');
    my_answer.innerText = origin_array[makeRandomIndex(ODU_SN_array.length -1)];
}


let ODU_SN_generator  = document.getElementById('ODU_SN_generator').onclick = function(){
    ODU_SN_generator_func(ODU_SN_array);
}