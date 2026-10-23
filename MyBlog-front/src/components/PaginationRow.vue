<script setup>
import { computed } from 'vue';
import LeftIcon from "@/assets/icons/left-arrow.svg?component"
import RightIcon from "@/assets/icons/right-arrow.svg?component"

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    },
    maxVisible: {
        type: Number,
        default: 1
    },
    modelValue: {
        type: Number,
        required: true
    },
})

const emit = defineEmits(['update:modelValue']);

const currentPage = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

const pageNumbers = computed(() => {
    const pages = []
    const total = props.totalPages
    const max = props.maxVisible
    const current = currentPage.value

    if (total <= max) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }

        return pages
    }

    let start = current - Math.floor(max / 2)
    let end = current + Math.floor(max / 2)

    if (start < 1) {
        start = 1
        end = max
    }

    if (end > total) {
        end = total
        start = total - max + 1
    }

    if (start === 1 && end < total) {
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        pages.push('...')
        return pages
    }

    if (end === total && start > 1) {
        pages.push('...')

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        return pages
    }

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    if (end < total) {
        pages.push('...')
    }

    return pages
})

function goToPage(page) {
    if (typeof page === 'number') {
        currentPage.value = page
    }
}

function goToPrevious() {
    currentPage.value > 1 && currentPage.value--
}

function goToNext() {
    currentPage.value < props.totalPages && currentPage.value++
}
</script>

<template>
    <div class="pagination-content">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="goToPrevious">
                    <LeftIcon/>
                </a>
            </li>
            <li
                v-for="(page, index) in pageNumbers"
                :key="index"
                class="page-item"
                :class="{ active: page === currentPage }"
            >
                <span v-if="page === '...'" class="page-link dots">...</span>
                <a v-else class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>

            <li class="page-item" :class="{ disabled: currentPage === props.totalPages }">
                <a class="page-link" href="#" @click.prevent="goToNext">
                    <RightIcon/>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.page-link {
    border-radius: 6px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #495057;
    font-weight: 700;
}

.page-link:hover:not(.disabled) {
    background-color: #e9ecef;
    border-color: #dee2e6;
    color: #495057;
}

.page-item.active .page-link {
    background-color: #6f42c1;
    border-color: #6f42c1;
    color: white;
}

.page-item.active .page-link:hover {
    background-color: #6f42c1;
    border-color: #6f42c1;
}

.page-item.disabled .page-link {
    opacity: 0.4;
    pointer-events: none;
}

.page-link.dots {
    border: none;
    color: #6c757d;
    cursor: default;
    pointer-events: none;
    background: transparent;
}

.page-link {
    max-width: 40px;
    min-width: 36px;
}
</style>
