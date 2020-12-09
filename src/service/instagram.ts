
const APP_ID = 680905919463949;
const REDIRECT_URL = 'https://amf-collection.herokuapp.com/auth'

class Instagram{
    getData(){
        return fetch(`https://api.instagram.com/oauth/authorize
        ?client_id=${APP_ID}
        &redirect_uri=${REDIRECT_URL}
        &scope=user_profile,user_media
        &response_type=code`)
   } 
}

export default Instagram;