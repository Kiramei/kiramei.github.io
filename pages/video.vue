<template>
    <div class="constainer">
        <div class="box">
            <div class="box-card">
                <iframe class="box-card" id="video" width="120%" height="380px" scrolling="no" frameborder="no"
                    framespacing="0" :src="videos[index].url"></iframe>
                <el-scrollbar>
                    <div class="scrollbar-flex-content">
                        <p v-for="item in videos" class="scrollbar-item" @click="sel(item.value)">
                            {{ item.name[lg] }}
                        </p>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ElScrollbar } from 'element-plus'
import 'element-plus/dist/index.css'
const index = ref(0)
const lg = langCode();
const videos = lang().value.video_list
onMounted(() => {
  loadingView().value = false
})
const sel = (ind: number) => {
    index.value = ind;
}
</script>

<style scoped>

.constainer {
    height:calc( 100vh - 80px );
}
.box {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.box-card {
    margin-top: 25px;
    width: 60vw;
    min-width: 350px;
    min-height: 197px;
    height: 33.75vw;
    border-radius: 10px;
    border: 1.5px solid var(--el-card-border-color);
}

* {
    user-select: none;
}


.el-scrollbar {
    height: 100vh;
}

.scrollbar-flex-content {
    display: flex;
}

@media screen and (min-width:200px) {
    .el-scrollbar {
        height: 100vh;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .scrollbar-flex-content {
        display: flex;
        flex-direction: column;
    }

    .scrollbar-item {
        cursor: pointer;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60vw;
        min-width: 350px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }
}

@media screen and (min-width:1000px) {
    .el-scrollbar {
        height: 80px;
    }

    .scrollbar-flex-content {
        display: flex;
        flex-direction: row;
    }

    .scrollbar-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 150px;
        width: 150px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }
}
</style>