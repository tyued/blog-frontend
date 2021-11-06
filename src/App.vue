<template>
<div class="mainPage">
    <router-view/>
</div>
</template>

<style lang="scss">
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.mainPage{
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: .24rem;
    overflow: hidden;
}
.innerPage{
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
