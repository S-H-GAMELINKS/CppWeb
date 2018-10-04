<template>
<div>
    <h1>Index Pages</h1>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Knowledge Title</span>
        </div>
        <input type="text" class="form-control" v-model="title" placeholder="input knowledge title"> 
    </div>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Content</span>
        </div>
        <input type="text" class="form-control" v-model="content" placeholder="input knowledge content"> 
    </div>
    <p>
        <button type="button" class="btn btn-primary" v-on:click="createKnowledge">Submit</button>
    </p>
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

const database = firebase.database();

export default {
    data: function() {
        return {
            title: "",
            content: ""
        }
    },
    mounted: function() {
        this.getKnowledge();
    },
    methods: {
        getKnowledge: function() {
            const data = database.ref('cppknowledge');
            data.on("value", function(snapshot) {
                console.log(snapshot.val());
            }, function(errorObject) {
                console.log("The read failed: " + errorObject.code);
            })
        },
        createKnowledge: function() {
            database.ref('cppknowledge/' + this.title).set({
                title: this.title,
                content: this.content
            });
            this.title = "";
            this.content = "";
        }
    }
}

</script>
