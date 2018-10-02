<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#tab1" data-toggle="tab">index</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tab2" data-toggle="tab">about</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tab3" data-toggle="tab">contact</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="tab1" class="tab-pane active">
                <index></index>
            </div>
            <div id="tab2" class="tab-pane">
                <about></about>
            </div>
            <div id="tab3" class="tab-pane">
                contact
            </div>
        </div>
    </div>
</template>

<script>

import Index from './tabs/index.vue';
import About from './tabs/about.vue';

export default {
    components: {
        'index': Index,
        'about': About,
    }
}

</script>