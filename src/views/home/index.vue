<template>
<div class="innerPage homepage">
    <div class="fixBanner"></div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.homepage{
    font-size: .4rem;
    .fixBanner{
        width: 100%;
        height: 6rem;
        position: fixed;
        top: 0;
        left: 0;
        border-radius: 0 0 .4rem .4rem;
        background-color: #E2E2E2;
        background: url(../../assets/img/_test.jpeg) center center;
        background-size: 100% auto;
    }
}
</style>
