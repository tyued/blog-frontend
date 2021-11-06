<template>
<div class="innerPage homepage">
    <div class="fixBanner"></div>
    <div class="userCard">rrrrr</div>
    <div class="articleMain">
        <div class="articletBox">
            <div class="icon"></div>
            <div class="articleCont"></div>
        </div>
    </div>
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
    padding: 4.5rem .3rem 0 .3rem;
    .fixBanner{
        width: 100%;
        height: 6rem;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        border-radius: 0 0 .4rem .4rem;
        background-color: #E2E2E2;
        background: url(../../assets/img/_test.jpeg) center center;
        background-size: 100% auto;
    }
    .userCard{
        width: 100%;
        height:2.5rem;
        background: #FFF;
        border-radius: .2rem;
        position: relative;
        z-index: 10;
        margin: 0 auto;
        box-shadow: 0 0 .3rem rgba($color: #333333, $alpha: .2);
    }
    .articleMain{
        position: relative;
        z-index: 10;
        min-height: 2rem;
        width: 100%;
        padding-top: .5rem;
    }
}
</style>
