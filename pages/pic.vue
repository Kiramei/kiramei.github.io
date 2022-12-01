<template>
    <ClientOnly>
        <ElScrollbar height="calc( 100vh - 80px )">
            <div class="box">
                <div class="item" v-for="(item, index) in imgs">
                    <ElImage :preview-src-list="imgs" :src="item" :initial-index="index" class="img" hide-on-click-modal
                        loading="lazy">
                        <template #placeholder>
                            <div class="image-slot">Loading<span class="dot">...</span></div>
                        </template>
                    </ElImage>
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
        a.push(`https://cdn.kiramei.workers.dev/bg%20(${i}).webp`)
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

.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
