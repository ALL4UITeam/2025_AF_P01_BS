<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount, watch } from 'vue';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import AuthenticationModal from '../modal/AuthenticationModal.vue';

const props = defineProps({
    totalComments: {
        type: Number,
        default: 0
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    userName: {
        type: String,
        default: ''
    },
    comments: {
        type: Array,
        default: () => []
    }
});

const localComments = ref(props.comments.map(comment => ({
    ...comment,
    replies: comment.replies ? comment.replies.map(reply => ({
        ...reply
    })) : []
})));

const mainCommentText = ref('');
const replyCommentText = ref('');
const maxLength = 500;
const authModalRef = ref(null);


let firstFocusableElement;
let lastFocusableElement;

const handleTabKey = (e) => {
    if (!authModalRef.value?.$el.contains(document.activeElement)) return;
    
    const isTabPressed = e.key === 'Tab';
    if (!isTabPressed) return;

    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
        }
    }
};


const showAuthModal = () => {
    if (authModalRef.value) {
        authModalRef.value.openModal();
    }
};

const emit = defineEmits(['submit-comment', 'submit-reply', 'like-comment']);

const handleCommentSubmit = () => {
    if (mainCommentText.value.trim()) {
        emit('submit-comment', mainCommentText.value);
        mainCommentText.value = '';
    }
};

const handleReplySubmit = (parentId) => {
    if (replyCommentText.value.trim()) {
        emit('submit-reply', { parentId, content: replyCommentText.value });
        replyCommentText.value = '';
    }
};

const handleLike = (commentId, isReply = false, parentId = null) => {
    if (!props.isLoggedIn) {
        showAuthModal();
        return;
    }

    if (isReply && parentId) {
        const parentComment = localComments.value.find(c => c.id === parentId);
        if (parentComment) {
            const reply = parentComment.replies.find(r => r.id === commentId);
            if (reply) {
                reply.isLiked = !reply.isLiked;
                reply.likes = reply.isLiked ? reply.likes + 1 : reply.likes - 1;
            }
        }
    } else {
        const comment = localComments.value.find(c => c.id === commentId);
        if (comment) {
            comment.isLiked = !comment.isLiked;
            comment.likes = comment.isLiked ? comment.likes + 1 : comment.likes - 1;
        }
    }

    emit('like-comment', {
        commentId,
        isReply,
        parentId,
        isLiked: isReply ? 
            localComments.value.find(c => c.id === parentId)?.replies.find(r => r.id === commentId)?.isLiked :
            localComments.value.find(c => c.id === commentId)?.isLiked
    });
};

watch(() => props.comments, (newComments) => {
    localComments.value = newComments.map(comment => ({
        ...comment,
        replies: comment.replies ? comment.replies.map(reply => ({
            ...reply
        })) : []
    }));
}, { deep: true });

onMounted(() => {
    document.addEventListener('keydown', handleTabKey);
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleTabKey);
});

const handleAuthSuccess = () => {
    window.location.reload();
};

const handleModalClose = () => {
    console.log('Modal closed');
};
</script>

<template>
    <div class="commentBox">
        <div class="commentBox__totalNumber">댓글 <span class="commentBox__totalNumberCounting">{{ totalComments }}</span></div>
        
        <!-- 로그인 전 상태 -->
        <div v-if="!isLoggedIn" class="commentBox__login">
            <Button 
                class="commentBox__loginButton"
                @click="showAuthModal"
                aria-haspopup="dialog"
                aria-controls="auth-modal"
            >
                댓글을 작성하려면 로그인하세요.
            </Button>
        </div>

        <!-- 로그인 후 댓글 작성 영역 -->
        <div v-else class="commentBox__write">
            <div class="commentBox__writeName">{{ userName }}</div>
            <div class="commentBox__writeForm">
                <Textarea 
                    class="commentBox__writeFormInput"
                    v-model="mainCommentText"
                    :maxlength="maxLength"
                    placeholder="댓글을 입력하세요"
                    aria-label="메인 댓글 입력"
                    autoResize
                />
            </div>
            <div class="commentBox__writeFunction">
                <div class="commentBox__writeCount" aria-live="polite">
                    <span class="commentBox__writeNumber">{{ mainCommentText.length }}</span>/{{ maxLength }}
                </div>
                <div class="commentBox__writeRegistration">
                    <Button 
                        class="button-krds secondary small"
                        @click="handleCommentSubmit"
                        :disabled="!mainCommentText.trim()"
                        aria-label="메인 댓글 등록"
                    >
                        등록하기
                    </Button>
                </div>
            </div>
        </div>

        <!-- 댓글 리스트 -->
        <ul class="commentBox__replyList" role="list">
            <li v-for="comment in localComments" :key="comment.id" class="commentBox__replyListItem">
                <div class="commentBox__replyBox">
                    <div class="commentBox__replyHeader">
                        <strong class="commentBox__replyName">{{ comment.userName }}</strong>
                        <span class="commentBox__replyDate">{{ comment.date }}</span>
                    </div>
                    <p class="commentBox__replyText">{{ comment.content }}</p>
                    <div class="commentBox__replyFunction">
                        <Button 
                            class="button-krds tertiary small" 
                            @click="comment.showReplyForm = !comment.showReplyForm"
                            :aria-expanded="comment.showReplyForm"
                        >
                            댓글작성
                        </Button>
                        <Button 
                            type="button" 
                            :class="['commentBox__replyLike', { 'is-active': comment.isLiked }]"
                            :aria-pressed="comment.isLiked"
                            @click="handleLike(comment.id, false)"
                        >
                            <span class="blind">좋아요</span> <span aria-live="polite">{{ comment.likes }}</span>
                        </Button>
                    </div>
                </div>

                <!-- 대댓글 작성 영역 -->
                <template v-if="comment.showReplyForm">
                    <div v-if="!isLoggedIn" class="commentBox__login replyComment">
                        <button 
                            class="commentBox__loginButton"
                            @click="showAuthModal"
                            aria-haspopup="dialog"
                            aria-controls="auth-modal"
                        >
                            댓글을 작성하려면 로그인하세요.
                        </button>
                    </div>
                    <div v-else class="commentBox__inWrite">
                        <div class="commentBox__write">
                            <div class="commentBox__writeName">{{ userName }}</div>
                            <div class="commentBox__writeForm">
                                <Textarea 
                                    class="commentBox__writeFormInput"
                                    v-model="replyCommentText"
                                    :maxlength="maxLength"
                                    placeholder="답글을 입력하세요"
                                    aria-label="답글 입력"
                                    rows="3"
                                    autoResize
                                />
                            </div>
                            <div class="commentBox__writeFunction">
                                <div class="commentBox__writeCount" aria-live="polite">
                                    <span class="commentBox__writeNumber">{{ replyCommentText.length }}</span>/{{ maxLength }}
                                </div>
                                <div class="commentBox__writeRegistration">
                                    <Button 
                                        class="button-krds secondary small"
                                        @click="handleReplySubmit(comment.id)"
                                        :disabled="!replyCommentText.trim()"
                                        aria-label="답글 등록"
                                    >등록하기</Button>
                                </div>
                            </div>
                        </div>
                        </div>
                </template>

                <!-- 대댓글 리스트 -->
                <ul v-if="comment.replies && comment.replies.length > 0" 
                    class="commentBox__replyComment"
                    role="list"
                >
                    <li v-for="reply in comment.replies" :key="reply.id" class="commentBox__replyCommentItem">
                        <div class="commentBox__replyHeader">
                            <strong class="commentBox__replyName">{{ reply.userName }}</strong>
                            <span class="commentBox__replyDate">{{ reply.date }}</span>
                        </div>
                        <div class="commentBox__replyCommentDetail">
                            <p class="commentBox__replyText">{{ reply.content }}</p>
                            <button 
                                type="button" 
                                :class="['commentBox__replyLike', { 'is-active': reply.isLiked }]"
                                :aria-pressed="reply.isLiked"
                                @click="handleLike(reply.id, true, comment.id)"
                            >
                                <span class="blind">좋아요</span> <span aria-live="polite">{{ reply.likes }}</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- Authentication Modal -->
        <AuthenticationModal 
            id="auth-modal"
            class="loginAuthentication" 
            ref="authModalRef"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            @auth-success="handleAuthSuccess"
            @close="handleModalClose"
        />
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/scss/contents/table/comment';

    :deep(.p-inputtextarea) {
        min-height: 30px;
        max-height: 100px;
        overflow-y: auto;
        resize: none;
    }
</style> 