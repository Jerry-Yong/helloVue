

let config = {
    API: "",
    urlencodedConfig: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
};
setAPI("DEV");
function setAPI(type){
    if(type == "DEV"){
        config.API = "dev";
    }else if(type == "QA"){
        config.API = "qa";
    }else if(type == "PRD"){
        config.API = "prd";
    }
}
export default config;
