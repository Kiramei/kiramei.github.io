<template>
    <ElScrollbar height="calc( 100vh - 80px )">
        <div class="box">
            <div style="height:250px">
                <img src="../assets/logo_l.jpg" width="250" alt="">
            </div>
            <div class="ms-title">{{ msl[index].title[lg] }}</div>
            <div class="controller">
                <ElIcon class="btn" :size="40">
                    <VideoPlay v-if="!pl" @click="play(index)" />
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-if="pl" @click="ps">
                        <path
                            d="M915.885 340.32c-22.039-52.105-53.583-98.895-93.757-139.069s-86.964-71.718-139.069-93.757c-53.96-22.823-111.264-34.396-170.319-34.396S396.381 84.67 342.421 107.494c-52.105 22.039-98.895 53.583-139.069 93.757s-71.718 86.963-93.757 139.069C86.772 394.28 75.2 451.584 75.2 510.639s11.572 116.359 34.396 170.319c22.039 52.105 53.583 98.896 93.757 139.069s86.963 71.718 139.069 93.757c53.96 22.823 111.264 34.396 170.319 34.396S629.1 936.608 683.06 913.784c52.105-22.039 98.896-53.583 139.069-93.757s71.718-86.964 93.757-139.069c22.823-53.96 34.396-111.264 34.396-170.319S938.708 394.28 915.885 340.32zM512.74 892.18c-210.382 0-381.54-171.158-381.54-381.541 0-210.382 171.158-381.54 381.54-381.54 210.382 0 381.541 171.158 381.541 381.54C894.28 721.021 723.122 892.18 512.74 892.18z"
                            p-id="6502"></path>
                        <path
                            d="M395.492 280.639c-15.464 0-28 12.536-28 28v404c0 15.464 12.536 28 28 28s28-12.536 28-28v-404c0-15.464-12.536-28-28-28zM629.987 280.639c-15.464 0-28 12.536-28 28v404c0 15.464 12.536 28 28 28s28-12.536 28-28v-404c0-15.464-12.536-28-28-28z"
                            p-id="6503"></path>
                    </svg>
                </ElIcon>
                <ElSlider class="sld" v-model="proc" @mousedown="ps" @mouseup="cgv" :show-tooltip="false"></ElSlider>
            </div>
            <div class="controller">
                <ElTable :data="msl" style="width: 100%" height="200">
                    <el-table-column label="曲名" fixed>
                        <template #default="scope">
                            <div style="display: flex;">
                                <span>{{ scope.row.title[lg] }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" width="130">
                        <template #default="scope">
                            <ElIcon class="btn_" :size="30" @click="play(scope.$index)">
                                <VideoPlay />
                            </ElIcon>
                            <ElIcon class="btn_" :size="30">
                                <a :href="scope.row.src" download>
                                    <Download />
                                </a>
                            </ElIcon>
                        </template>
                    </el-table-column>
                </ElTable>
            </div>
        </div>
    </ElScrollbar>
</template>
    
<script setup>
/**
 * import the elementUI
 */
import {
    ElIcon,
    ElScrollbar,
    ElTable,
    ElTableColumn,
    ElSlider
}
    from "element-plus"
import 'element-plus/dist/index.css'
import { VideoPlay, Download } from "@element-plus/icons-vue";
/**
 * import the vue
 */
import { ref } from "vue"

const lg = langCode();
const msl = lang().value.music_list;

var audio, itv;

const play = (i) => {
    if (audio === undefined || i !== index.value) {
        index.value = i
        if (audio !== undefined)
            audio.pause()
        audio = new Audio(msl[i].src)
    }
    audio.play()
    st()
    pl.value = true
}

const st = () => {
    itv = setInterval(() => {
        proc.value = (audio.currentTime / audio.duration).toFixed(4) * 100
    }, 100);
}

const ps = () => {
    clearInterval(itv)
    audio.pause()
    pl.value = false
}

const cgv = () => {
    audio.currentTime = proc.value / 100 * audio.duration
    audio.play()
    st()
    pl.value = true
}

watch(navi(), () => {
    if (audio !== undefined) {
        audio.pause()
    }
})

const pl = ref(false);

const index = ref(0)

const proc = ref(0)

onMounted(() => {
  loadingView().value = false
})
</script>
    
<style>
a {
    color: currentColor;
}

.box {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.ms-title {
    padding: 5px 10px;
    font-size: 30px;
    border-radius: 10px;
    color: var(--el-text-color-primary);
}

.controller {
    display: flex;
    margin-top: 30px;
    min-width: 350px;
    width: 60vw;
    align-items: center;
}

.sld {
    margin-left: 30px;
}

.btn {
    cursor: pointer;
    color: var(--el-color-primary);
}

.btn_ {
    margin: 5px 10px;
    cursor: pointer;
    color: var(--el-color-primary);
}


.btn:hover {
    color: var(--el-color-primary-light-3);
}
</style>