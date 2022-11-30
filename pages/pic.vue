<template>
    <ClientOnly>
        <ElScrollbar height="calc( 100vh - 80px )">
            <div class="box">
                <div class="item" v-for="(item, index) in imgs">
                    <ElImage :preview-src-list="imgs" :src="item" :initial-index="index" class="img" hide-on-click-modal
                        loading="lazy" />
                </div>
            </div>
        </ElScrollbar>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElScrollbar, ElImage } from 'element-plus'

const imgs = computed(() => {
    var a = [];
    for (var i = 1; i <= 47; i++)
        a.push(`/_nuxt/assets/webp/bg%20(${i}).webp`)
    return a;
})
</script>

<style scoped>
.img {
    user-select: none;
}

.box {
    margin: 50px;
    column-gap: 30px;
    display: list-item;
    list-style: none;
}

@media screen and (min-width:1200px) {
    .box {
        column-count: 5;
    }
}

@media screen and (max-width:1200px) {
    .box {
        column-count: 4;
    }
}

@media screen and (max-width:900px) {
    .box {
        column-count: 3;
    }
}

@media screen and (max-width:650px) {
    .box {
        column-count: 2;
    }
}

@media screen and (max-width:450px) {
    .box {
        column-count: 1;
    }
}

.item {
    cursor: pointer;
    margin-bottom: 20px;
}

.item .img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
}
</style>