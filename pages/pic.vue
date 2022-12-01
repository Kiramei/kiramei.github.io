<template>
    <ClientOnly>
        <ElScrollbar height="calc( 100vh - 80px )">
            <div class="box">
                <div class="item" v-for="(item, index) in imgs">
                    <ElImage :preview-src-list="imgs" :src="item" :initial-index="index" class="img" hide-on-click-modal
                        loading="lazy">
                        <template #placeholder>
                            <div class="ld-image-slot">Loading<span class="ld-dot">...</span></div>
                        </template>
                        <template #error>
                            <div class="image-slot">
                                <el-icon>
                                    <Picture>error</Picture>
                                </el-icon>
                            </div>
                        </template>
                    </ElImage>
                </div>
            </div>
        </ElScrollbar>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElScrollbar, ElImage, ElIcon } from 'element-plus'
import { Picture } from '@element-plus/icons-vue';
const imgs = computed(() => {
    var a = [];
    a.push('https://kiramei.cn/former/webp/bk.webp')
    for (var i = 1; i <= 47; i++)
        a.push(`https://kiramei.cn/former/webp/bg%20(${i}).webp`)
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

.ld-image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}

.ld-dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
}

.el-image {
    min-height: 80px;
    position: relative;
    display: inline-block;
    overflow: hidden;
}

.image-slot {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
}
</style>
