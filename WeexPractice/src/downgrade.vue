
<template>
    <div>
        <text class="test-text">abc123</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">config = {{config}}</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">environment = {{environment}}</text>
        <text class="test-text" style="line-height: 100; background-color: green; text-align: center;">&nbsp;</text>
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
        color: red;
    }

</style>


<script type="config">
{
    downgrade: {
        ios: {
            weexVersion: '< 0.6.0',
        },
        android: {
            weexVersion: '< 0.6.0',
        }
    }
}
</script>


