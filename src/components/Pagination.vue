<template>
    <ul class="pagination">
        <li v-if="hasPrev">
            <a href="#" @click.prevent="changePage($event, prevPage)">
                <span>&laquo;</span>
            </a>
        </li>
        <li v-for="(page, index) in totalPages" :key=index>
            <a href="#" @click.prevent="changePage($event, page)" :class="isActive(page)">{{page}}</a>
        </li>
        <li v-if="hasNext">
            <a href="#" @click.prevent="changePage($event, nextPage)">
            <span>&raquo;</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            pageOffset: 2
        };
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
            default: 1
        },
        totalBeers: {
            type: Number,
            required: true
        },
        beersPerPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        totalPages() {
            console.log(this.totalBeers);
            return Math.ceil(this.totalBeers / this.beersPerPage);
        },
        pageRange() {
            let pageRange = [];
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
        changePage(event, pageNumber) {
            this.$emit("changePage", pageNumber);
        },
        isActive (pageNumber) {
            return this.currentPage === pageNumber ? 'active' : '';
        }
    }
};
</script>

<style>
    .active {
        color: green;
    }
</style>

