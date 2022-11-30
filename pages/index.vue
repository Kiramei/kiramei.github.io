<template>
  <ElScrollbar height="calc( 100vh - 80px )">
    <div class="box">
      <el-space direction="vertical">
        <el-card class="box-card" shadow="hover" v-for="item in news">
          <template #header>
            <div class="card-header">
              <span>{{ item.title[lg] }}</span>
              <el-button class="button" v-if="item.hasBtn" type="primary" @click="resolve(item.btnMode, item.btnUrl)"
                text>{{ item.btnName[lg] }}
              </el-button>
            </div>
          </template>
          <div class="news-content" v-html="item.content[lg]"></div>
          <div class="date">{{ item.date }}</div>
        </el-card>
      </el-space>
    </div>
  </ElScrollbar>
</template>
    
<script lang="ts" setup>

/**
 * import the elementUI
 */
import {
  ElButton,
  ElCard,
  ElScrollbar,
  ElSpace,
}
  from "element-plus"
import 'element-plus/dist/index.css'

/**
 * import the vue
 */

const lg = langCode();

const news = lang().value.news_content;

const resolve = (mode: number, url: string) => {
  switch (mode) {
    case 0:
      return;
    case 1:
      navi().value = url;
      break;
    case 2:
      window.open(url);
      break;
    default:
      break;
  }
}
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.box-card {
  margin-top: 50px;
  min-width: 350px;
  width: 60vw;
  border-radius: 10px;
  border: 1.5px solid var(--el-card-border-color);
}

.box {
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
}

.news-content {
  line-height: 30px;
  padding-bottom: 20px;
}

.date {
  margin-bottom: 20px;
  float: right;
}
</style>