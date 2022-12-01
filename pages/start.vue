<template>

  <client-only>
    <ElMenu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <ElButton class="pl" @click="showDrawer = true" link>
        <img src="../assets/logo_t.png" alt="">
      </ElButton>
      <div class="flex-grow"></div>
      <div class="top">
        <el-tabs v-model="activeIndex" @tab-change="handleClick" class="tab-pane">
          <el-tab-pane v-for="item in titles" :label="item.text[lg]" :name="item.index" />
        </el-tabs>
      </div>
      <div class="flex-grow"></div>
      <el-dropdown>
        <span class="more">
          {{ lang().value.more[lg] }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in moreUrls" @click="jump(item.url)">
              {{ item.text[lg] }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </ElMenu>
    <RouterView />
    <ElDrawer v-model="showDrawer" direction="ltr" :show-close="false" :size="300">
      <template #header="{ titleId }">
        <h4 :class="titleId" :icon="Tools">
          <el-icon :size="20">
            <Tools />
          </el-icon>
          <span class="drawer-title">{{ lang().value.setting[lg] }}</span>
        </h4>
      </template>
      <ElForm v-model="form" label-width="100px" size="default">
        <ElFormItem :label="lang().value.theme_setting[lg]">
          <ElSwitch class="theme-switch" v-model="form.theme" :active-text="lang().value.dark[lg]"
            :inactive-text="lang().value.light[lg]" @click="toggleDark()" />
        </ElFormItem>
        <ElFormItem :label="lang().value.lang_setting[lg]">
          <el-select v-model="langCode().value" @change="tstClk">
            <el-option label="日本語" :value="0" />
            <el-option label="简体中文" :value="1" />
            <el-option label="English" :value="2" />
          </el-select>
        </ElFormItem>
      </ElForm>
    </ElDrawer>
    <div class="bottom">
      <el-tabs v-model="activeIndex" @tab-change="handleClick" class="tab-pane">
        <el-tab-pane v-for="item in titles" :label="item.text[lg]" :name="item.index" />
      </el-tabs>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
/**
 * import the elementUI
 */
import {
  ElButton,
  ElIcon,
  ElSelect,
  ElOption,
  ElForm,
  ElFormItem,
  ElSwitch,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDrawer,
  ElMenu,
  ElTabPane,
  ElTabs
}
  from "element-plus"
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import zhCn from "element-plus/dist/locale/zh-cn.js";
import { Tools, ArrowDown } from "@element-plus/icons-vue";
import { useDark, useToggle } from '@vueuse/core'
/**
 * import the vue
 */
import { ref, computed } from "vue"
//Vue.setVue.set(vm.items, indexOfItem, newValue)// vm.$setvm.$set(vm.items, indexOfItem, newValue)// Array.prototype.splicevm.items.splice(indexOfItem, 1, newValue)

const isDark = useDark()

const lg = langCode();
const lgr = useCookie('lang');
const toggleDark = computed(() => {
  return useToggle(isDark)
})

onMounted(() => {
  if (!form.value.theme)
    toggleDark;
})
const titles = ref(lang().value.titles)
const moreUrls = lang().value.moreUrls
const jump = (url: string) => {
  window.open(url);
}

const showDrawer = ref(false)

const form = ref({
  theme: isDark.value
})

const route = useRoute()

const activeIndex = ref(route.path.slice(1) || 'news')

const handleClick = () => {
  let s = '';
  if (activeIndex.value === 'news') s = '/'
  else s = `/${activeIndex.value}`
  navi().value = activeIndex.value;
  navigateTo(s, { replace: true })
}

watch(navi(), () => {
  activeIndex.value = navi().value.replace('/', '')
})

const tstClk = (e: number) => {
  lg.value = e
  lgr.value = lg.value.toString();
}

</script>

<style>
body {
  overflow: hidden;
}

.flex-grow {
  flex-grow: 1;
}

.drawer-title {
  margin-left: 10px;
  font-size: 25px;
}

.pl {
  height: 100%;
}

.pl img {
  width: 52px;
}

.theme-switch {
  float: right;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.drawer {
  min-width: 300px;
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
}

.news-content {
  line-height: 30px;
  padding-bottom: 20px;
}

.date {
  margin-bottom: 20px;
  float: right;
}

.more {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.more:hover {
  color: var(--el-color-primary);
}

.tab-pane {
  height: 58px;
}

.el-tabs__header {
  margin: 0;
}

.el-tabs {
  --el-tabs-header-height: 58px
}

.bottom {
  padding-bottom: 5px;
  background-color: var(--el-bg-color);
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
}


@media screen and (min-width:600px) {
  .bottom {
    display: none;
  }

  .top {
    display: block;
  }
}

@media screen and (max-width:600px) {
  .top {
    display: none;
  }

  .bottom {
    display: flex;
  }
}
</style>