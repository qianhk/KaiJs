
<template>
    <div>
        <text class="test-text">abc12345</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">config = {{config}}</text>
        <text class="test-text">&nbsp;</text>
        <text class="test-text">environment = {{environment}}</text>
    </div>
</template>

<script>
    import Downgrade from '@weex-project/downgrade'



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
//            this.environment = this.environment;

            Downgrade.condition({
                ios: {
                    osVersion: '>1.0',
                    appVersion: '>1.0.0',
                    weexVersion: '>1',
                    deviceModel: ['iPhone5,1']
                },
                android: {
                    osVersion: '<5.0',
                    appVersion: '<1.0.0',
                    weexVersion: '<0.11.2',
                    deviceModel: ['G-2PW2100', 'Redmi 3SS']
                }
            })
        },
        methods: {}
    };

</script>


<style>

    .test-text {
        color: black;
    }

</style>

