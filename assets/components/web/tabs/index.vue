<template>
<div>
    <h1>Index Pages</h1>
</div>
</template>

<script>
import FireBase from 'firebase';

const firebase = FireBase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID
});

console.log(firebase);

export default {
    
}

</script>
