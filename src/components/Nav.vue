<template>
  <div class="navDiv">
    <div class="nav">
      <div style="float:left;margin-left:10px"> <h1>某某小说网</h1></div>
      <div style="float:right;margin-right:10px">
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
    width: 1000px;
    background-color: cadetblue;
        margin: 0 auto;
  }
  .nav{
    margin: 0 auto;
    height: 80px;
    width: 1000px;
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
