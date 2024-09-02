export const getLocalStorage = (key, parse = true, defaultValue = null) =>{
    let data;
    try{
        data = localStorage.getItem(key); 
    
        if(parse){
            data = JSON.parse(data);
        }
    
        return data || defaultValue;
    }catch(e){
        console.log("Error while getting localstorage item with key", key);
        console.log("It says:", e.message);
        return defaultValue;
    }
}


export const setLocalStorage = (key , value) =>{
    try{

        localStorage.setItem(key, JSON.stringify(value));

    }catch(e){
        console.log("Error while setting localstorage item with key", key);
        console.log("It says:", e.message);
    }
}