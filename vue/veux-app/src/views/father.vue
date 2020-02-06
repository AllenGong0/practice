<template>
<div>
<div>ass</div>
<div></div>
</div>

</template>

<script>
    export default {
        mounted(){
            console.log("进入组件");
        },
        name: "father",
        methods:{   
        },
        beforeRouteUpdate (to,from,next){
            console.log(to);
            console.log(from);
            console.log(next)
        }
    }
</script>

<style scoped>

</style>
