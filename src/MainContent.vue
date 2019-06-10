<template>
  <div id="app">
    <Nav></Nav>
    <div id="content">
      <HotBook></HotBook>
      <BookSearch></BookSearch>
    </div>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HotBook from './components/HotBook.vue'
import BookSearch from './components/BookSearch.vue'

export default {
  name: 'app',
  components: {
    Nav,
    HotBook,
    BookSearch,
  }
}
</script>

<style>
  body{
    color: cadetblue;
  }
  #content{
    width:64%;
    padding-left: 1%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
</style>
