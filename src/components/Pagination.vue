<template>
<ul class="pagination">
  <li>
    <a href="#" @click.prevent="changePage($event, prevPage)">
      <span>&laquo;</span>
    </a>
  </li>
  <li v-for="(page, index) in totalPages" :key=index>
    <a href="#" @click.prevent="changePage($event, page)">{{page}}</a>
  </li>
  <li>
    <a href="#" @click.prevent="changePage($event, nextPage)">
      <span>&raquo;</span>
    </a>
  </li>
</ul>
</template>

<script>
export default {
    // data() {
    // },
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
      prevPage() {
        return this.currentPage++;
      },
      nextPage() {
        return this.currentPage--;
      }
    },
    methods: {
      changePage(event, pageNumber) {
        this.$emit('changePage', pageNumber);
      }
    }
}
</script>
