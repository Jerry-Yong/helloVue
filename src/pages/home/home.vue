
<template>
    <div class="">
        <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div>
    </div>
</template>

<style>

</style>

<script>
    import store from "../../store/store";

    export default{
        name: "home",
        data: function () {
            return {
                params: this.$route.query.param
            }
        },
        mounted: function () {
            let data = this.$store.state.currentRoomAllMembers;
            console.log('data', data);
        },
        methods: {

        }
    }
</script>
