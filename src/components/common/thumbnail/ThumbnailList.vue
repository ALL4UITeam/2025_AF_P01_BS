<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const fileInput = ref(null);
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emit('update:modelValue', value);
};

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일');
        return;
    }
    
    if (file.size > 1000000) {
        alert('파일 크기 ');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('업로드 실패');
        }

        console.log('파일 업로드 완료:', await response.json());
    } catch (error) {
        console.error('업로드 중 오류 발생:', error);
        alert('파일 업로드에 실패했습니다.');
    }
};
</script>

<template>
    <ul class="thumbnailList">
        <li>
            <RadioButton :value="'data'" :modelValue="modelValue" @change="updateValue('data')" inputId="radio01" />
            <label for="radio01">
                <span>데이터</span>
            </label>
            <div class="thumbnailList__imageBox">
                <img src="" alt="데이터 이미지" />
            </div>
        </li>
        <li>
            <RadioButton :value="'api'" :modelValue="modelValue" @change="updateValue('api')" inputId="radio02" />
            <label for="radio02">
                <span>API</span>
            </label>
            <div class="thumbnailList__imageBox">
                <img src="" alt="API 이미지" />
            </div>
        </li>
        <li>
            <RadioButton :value="'experience'" :modelValue="modelValue" @change="updateValue('experience')" inputId="radio03" />
            <label for="radio03">
                <span>체험하기</span>
            </label>
            <div class="thumbnailList__imageBox">
                <img src="" alt="체험하기 이미지" />
            </div>
        </li>
        <li>
            <RadioButton :value="'solution'" :modelValue="modelValue" @change="updateValue('solution')" inputId="radio04" />
            <label for="radio04">
                <span>주소 검색 솔루션</span>
            </label>
            <div class="thumbnailList__imageBox"><img src="" alt="주소 검색 솔루션 이미지" /></div>
        </li>
        <li>
            <RadioButton :value="'connect'" :modelValue="modelValue" @change="updateValue('connect')" inputId="radio05" />
            <label for="radio05">
                <span>연계신청</span>
            </label>
            <div class="thumbnailList__imageBox"><img src="" alt="연계신청 이미지" /></div>
        </li>
        <li>
            <RadioButton :value="'upload'" :modelValue="modelValue" @change="updateValue('upload')" inputId="radio06" />
            <label for="radio06">
                <span>이미지 업로드</span>
            </label>
            <div class="thumbnailList__imageBox">
                <img src="" alt="연계신청 이미지" />
                <input
                    type="file"
                    ref="fileInput"
                    @change="handleFileUpload"
                    accept="image/*"
                    style="display: none"
                />
                <Button 
                    class="button-krds secondary small" 
                    @click="triggerFileInput"
                >
                    파일선택
                </Button>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/contents/input/input_radio.scss';

.thumbnailList {
    display: flex;
    margin-top:16px;
    gap:18px;
    
    &__imageBox {
        position: relative;
        width: 172px;
        height: 172px;
        margin-top:12px;
        background: #EEF1F6;

        button {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            border-radius: 4px;
            cursor: pointer;
        }
    }
}
</style> 