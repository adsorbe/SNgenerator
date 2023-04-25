console.log('aloha');
const ODU_SN_array =[
    '215241408010JB00046',
    '215241408010H7000100',
    '2152413850CNJ1000280',
    '215241388210L5000338',
    '2152413851CNJ1000002',
    '2152414388210LA000396',
    '2152413851CNJ1000071',
    '215241388210L5000439',
    '215241385010JB000372',
    '2152413851CNJ2000397'

];
const RRL_ODU_SN_dict = {'4977-973': ['215241408010JB00046', '215241408010H7000100']};

function makeRandomIndex(){
    let random_index = Math.round(Math.random()*10)
    console.log(random_index);
    return random_index;


}

function ODU_SN_generator_func(origin_array){
    
    
    let my_answer = document.querySelector('#ODU_SN_result');
    
    my_answer.innerText = origin_array[makeRandomIndex()];

}

let ODU_SN_generator;
ODU_SN_generator  = document.getElementById('ODU_SN_generator').onclick = function(){
    ODU_SN_generator_func(ODU_SN_array);
}