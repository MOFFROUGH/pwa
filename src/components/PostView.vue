<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="url" v-model="catUrl" type="text" class="mdl-textfield__input"/>
          <label for="url" class="mdl-textfield__label">Cat image url</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  // import parse from 'xml-parser'
  import postCat from '../mixins/postCat'
  export default {
    mixins: [postCat],
    data () {
      return {
        catUrl: '',
        title: ''
      }
    },
    mounted () {
      // this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      //   this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      // })
    },
    methods: {
      postCat () {
        this.$root.$firebaseRefs.cat.push(
          {
            'url': this.catUrl,
            'comment': this.title,
            'info': 'Posted by Moff on Today',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'))
      }
    }
  }
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
