
<template>
    <div>
        <text class="test-text">abc123</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">config = {{config}}</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">environment = {{environment}}</text>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                config: '',
                environment: '',
            };
        },
        created: function () {
            let config = this.$getConfig();
            this.config = JSON.stringify(config);
            this.environment = this.environment;
        },
        methods: {}
    };
</script>


<style>

    .test-text {
        color: black;
    }

</style>




