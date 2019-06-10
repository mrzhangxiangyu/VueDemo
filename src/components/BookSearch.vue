<template>
  <div class="bookSearchDiv">
    <div style="margin-top:10px">
      <div>
        <input class="bookSearchInput" v-model="inputValue" @keyup.enter="handleSearchClick"/>
        <div class="bookSearchBtn"  @click="handleSearchClick">搜索</div>
      </div>
      <div style="clear:both">没有喜欢的？搜索一下！</div>
    </div>
    <ul class="bookSearchUl">
      <SearchBookLi 
        v-for="(item) of list" 
        :key="item"
        :item="item"
       ></SearchBookLi>
    </ul>
  </div>
</template>
<script>
import SearchBookLi from './SearchBookLi.vue'
  export default{
    data(){
      return({
        inputValue:'',
        list:[]
      })
    },
    updated(){
      
    },
    components:{
      SearchBookLi
    },
    methods:{
      handleSearchClick(){
        const a = this.inputValue;
        if(a === null||a === ""||a === undefined)
        {
          alert('不能为空哦');
          this.list=[];
        }
        else{
          this.axios.get("https://www.apiopen.top/novelSearchApi",{params:{
            name:a.replace(/\s*/g,""),
          }})
          .then(res=>{
            const a = res.data.data;
            this.list=a;
          })
          .catch();
        }
      }
    }
    
  }
  
</script>
<style>
div{
  cursor: default;
}
.bookSearchDiv{
  width: 60%;
  float: right;
}
  .bookSearchUl{
    padding: 0;
  }
  .bookSearchInput{
    font-size: 18px;
    padding-left: 5px;
    float:left;
    margin: 0;
    padding: 0;
    width: 86%;
    height: 40px;
  }
  .bookSearchBtn{
    float:left;
    height: 42px;
    line-height: 40px;
    text-align: center;
    width: 50px;
    margin: 0;
    padding: 0;
    border: 1px #ccc solid;
  }
  .bookSearchBtn:hover{
    background-color: cadetblue;
    color:#fff;
  }
  /* .bookSearchLi{
    list-style: none;
    height: 50px;
    width: 100%;
    background-color: lavender;
    line-height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;

  } */
</style>