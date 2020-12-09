<template>
    <ion-content>

    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {APP_ID, APP_SECRET, REDIRECT_URL} from './Home.vue';

export default defineComponent({
    name: 'Create',
    components: {

    },
    created() {
        let code = this.$route.query.code;
        if(typeof code === 'undefined' || code === null){
            console.log('Error while parsing code', code);
            return;
        }
        code = code.toString();
        code = code.split('#')[0];
        console.log('code parsed', code);

        const body = new FormData
        body.append("client_id", APP_ID.toString());
        body.append("client_secret", APP_SECRET);
        body.append("grant_type", "authorization_code")
        body.append("redirect_uri", REDIRECT_URL)
        body.append("code", code)
        console.log(body.get('redirect_uri'));

        fetch("https://api.instagram.com/oauth/access_token", {
            body,
            method: "POST",
        })
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            console.log(json);
        })
    
    }
    
})

//
</script>