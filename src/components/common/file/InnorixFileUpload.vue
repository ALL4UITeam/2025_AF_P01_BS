<script setup>
import { onMounted, ref } from "vue";
import Panel from 'primevue/panel';

let box = {}
const fileMgno = ref('PFM20240000000002095');
const tmpfileMgno = ref('');

const openFileDialog = () => {
  box.openFileDialog()
}

const onUpload = () => {
  let postParams = {
    bizCode: 'aot'
  }
  box.setPostData(postParams)
  box.upload()
}

const innorixDownloadUrl = `/api/innorix/download`
const fileArray = [
  {
    printFileName: 'INNORIX WP 브로셔.pdf',
    fileSize: 877745,
    downloadUrl: innorixDownloadUrl + '?fileID=1'
  },
  {
    printFileName: 'INNORIX WP Brochure.pdf',
    fileSize: 2853506574,
    downloadUrl: innorixDownloadUrl + '?fileID=2'
  }
]

const isText = ref(true);

onMounted(() => {
  if (typeof innorix === 'undefined') {
    console.error('이노릭스 스크립트가 로드되지 않았습니다.');
    return;
  }

  const innorixUploadUrl = `/api/innorix/upload`

  box = innorix.create({
    el: '#fileControl',
    agent: false,
    installUrl: '../install/install.html',
    uploadUrl: innorixUploadUrl,
    width: '100%',
    height: '60px'
  })

  box.on('afterAddFiles', function (p) {
    console.log('afterAddFiles', p.files)
  })

  const ircElements = document.querySelectorAll('.irx-preview-image');
  ircElements.forEach((el) => {
    el.setAttribute('alt', '사용안하는 이미지');
  })

  box.on('uploadComplete', function (p) {
    console.log('uploadComplete', p.files)
    console.log('테스트', isText.value);
    isText.value = !isText.value;
  })
})
</script>
<template>
<div class="fileUpload">
    <Panel>
      <div id="fileControl"></div>
      <div style="margin-top:10px;">
        <button @click="openFileDialog" class="button-krds primary small">파일첨부</button>
      </div>
    </Panel>
</div>
</template>


<style lang="scss" scoped>
.fileUpload {
  :deep(.irx-empty-download-text) {
    display: block !important;
  }

  :deep(.irx-file-button) {
    display: block !important;
  }

  button {
    display: none;
  }
}
</style>

