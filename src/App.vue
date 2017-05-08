<template>
  <Frame></Frame>
</template>

<script>
  import Frame from '@/components/frame/index';
  import '@/less/base.less'
  import '@/less/frame.less';
  export default {
    name: 'app',
    components : {Frame}
  }
</script>
<style lang="less">
@import './less/macro.less';
</style>