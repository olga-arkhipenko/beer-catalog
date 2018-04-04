<template>
    <ul class="pagination">
        <li v-if="hasPrev">
            <button
                href="#"
                class="link pagination__page"
                @click.prevent="changePage(prevPage)">
                <span>&laquo;</span>
            </button>
        </li>
        <li
            v-for="(page, index) in totalPages"
            :key="index">
            <button
                :class="isActive(page)"
                href="#"
                class="link pagination__page"
                @click.prevent="changePage(page)"
            >{{ page }}</button>
        </li>
        <li v-if="hasNext">
            <button
                href="#"
                class="link pagination__page"
                @click.prevent="changePage(nextPage)">
                <span>&raquo;</span>
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pageOffset: 2
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
        pageRange() {
            const pageRange = [];
            for (let i = this.pageRangeBefore; i <= this.pageRangeAfter; i++) {
                pageRange.push(i);
            }
            return pageRange;
        },
        pageRangeBefore() {
            const before = this.currentPage - this.pageOffset;
            return before > 0 ? before : 1;
        },
        pageRangeAfter() {
            const after = this.current + this.pageRange;
            return after < this.totalPages ? after : this.totalPages;
        },
        prevPage() {
            return this.currentPage - 1;
        },
        nextPage() {
            return this.currentPage + 1;
        },
        hasPrev() {
            return this.currentPage > 1;
        },
        hasNext() {
            return this.currentPage < this.totalPages;
        }
    },
    methods: {
        changePage(pageNumber) {
            this.$emit('pageChanged', pageNumber);
        },
        isActive(pageNumber) {
            return this.currentPage === pageNumber ? 'active' : '';
        }
    }
};
</script>

<style>
.pagination {
    display: inline-flex;
    flex-direction: row;

    list-style: none;
}

.pagination__page {
    display: block;

    padding: 15px 20px;

    color: #ffffff;
    background-color: #31364c;

    font-family: "Courier New", Courier, monospace;
}

.pagination__page:hover {
    background-color: #464568;
}

.active {
    background-color: #6d6c97;
}
</style>

