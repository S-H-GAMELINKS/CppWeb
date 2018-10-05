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
    <paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'">
    </paginate>
    <p v-for="(knowledge, key, index) in knowledgesPaginate" :key="index">
        <span v-if="knowledge.content != undefined && knowledge.title != undefined">
         <a :href="knowledge.content">{{knowledge.title}}</a> <button type="button" class="btn btn-primary" v-on:click="deleteKnowledge(knowledge.id)">Delete</button>
        </span>
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

const database = firebase.database();

const page_per = 5

export default {
    data: function() {
        return {
            knowledgesPaginate: [],
            knowledges: [],
            title: "",
            content: "",
            page: 1,
            pageCount: 0
        }
    },
    mounted: function() {
        this.getKnowledge();
    },
    methods: {
        getKnowledge: function() {
            const data = database.ref('cppknowledge');
            data.on("value", (snapshot) => {
                const cppknowledge = Object.entries(snapshot.val());
                
                this.knowledges.length = 0;
                this.knowledgesPaginate.length = 0;

                for(var i = 0; i < cppknowledge.length; i++) {
                    this.knowledges.push({id: cppknowledge[i][0], title: cppknowledge[i][1].title, content: cppknowledge[i][1].content});
                }

                const first = (this.page - 1) * page_per;
                const last = this.page * page_per;

                for(var i = first; i < last; i++){
                    if(this.knowledges[i] != undefined){
                        this.knowledgesPaginate.push(this.knowledges[i]);
                    }
                }

                this.pageCount = (this.knowledges.length / page_per);

                console.log(this.pageCount);

            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        },
        createKnowledge: function() {
            this.knowledges.length = 0;
            database.ref('cppknowledge').push({
                title: this.title,
                content: this.content
            });
            this.title = "";
            this.content = "";
        },
        deleteKnowledge: function(value) {
            database.ref('cppknowledge/' + value).remove();
        },
        clickCallback: function() {
            const first = (this.page - 1) * page_per;
            const last = this.page * page_per;

            this.knowledgesPaginate.length = 0;

            for(var i = first; i < last; i++){
                console.log(this.knowledges[i]);
                if(this.knowledges[i] != undefined){
                    this.knowledgesPaginate.push(this.knowledges[i]);
                }
            }

            this.$forceUpdate();

            console.log(this.knowledgesPaginate);
        },
        log: function() {
            console.log(this.title);
            console.log(this.content);
            console.log(this.knowledges);
        }
    }
}

</script>
