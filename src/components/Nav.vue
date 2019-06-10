<template>
  <div class="navDiv">
    <div class="nav">
      <div><h1>某某小说网</h1></div>
      <div >
        <a href="">登录</a>
        &nbsp;
        <a href="">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .navDiv{
    width: 100%;
    background-color: cadetblue;
  }
  .nav{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    height: 80px;
    width: 60%;
    color: honeydew;
  }
  .nav h1{
    margin: 0;
    line-height: 80px;
    font-size: 40px;
  }
  .nav a{
    color: honeydew;
    text-decoration: none;
    line-height: 100px;
    font-size: 20px;
  }
  .nav a:hover{
    color: blue;
  }
</style>
