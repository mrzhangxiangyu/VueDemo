<template>
<li class="bookSearchLi">
  <div  @click="handleLiClick">
    {{item}} 
    <span style="float:right;margin-right:10px" v-text="clickContent"></span>
  </div>
  <div class="alertDiv" v-show="show">
    <div>
      <div style="float:left;width:30%">
        <img v-show='srcImg' :src="book_img" width="100%"/>
        <img v-show='defaultImg' src="../assets/img.jpg" width="100%"/>
      </div>
      <div style="float:left;width:68%">
        作者：<a v-text="book_author"></a><br/>
        分类：<a v-text="book_category"></a><br/>
        标签：<a v-text="book_tags"></a><br/>
        来源：<a v-text="book_host"></a><br/>
        简介：<a v-text="book_desc"></a><br/>
      </div>
    </div>
  </div>
</li>
</template>
<script>
  export default{
    data(){
      return({
        clickContent:'展开',
        show:false,
        book:null,
        book_img:null,
        book_author:'',
        book_category:'',
        book_tags:'',
        book_host:'',
        book_desc:'',
        srcImg:1,
        defaultImg:0
      })
    },
    props:[
      'item'
    ],
    methods:{
      handleLiClick(){
        if(this.show)
          this.clickContent="展开";
        else
          this.clickContent="收起";
        this.show=!this.show;
        const a = this.item;
        this.axios.get('https://www.apiopen.top/novelInfoApi',{params:{
          name:a
        }})
        .then(res=>{
          this.book = res.data.data.aladdin;
          if(this.book.cover===''){
            this.srcImg=0;
            this.defaultImg=1;
          }
          this.book_img=this.book.cover;
          this.book_author=this.book.author;
          this.book_category=this.book.category;
          this.book_tags=this.book.tags;
          this.book_host=this.book.host;
          this.book_desc=this.book.desc;
        })
        .catch();
      }
    }
  }
</script>
<style>
  .bookSearchLi{
    list-style: none;
    width: 100%;
    background-color: lavender;
    line-height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    z-index: 1;
    padding-left: 5px;
  }
  .alertDiv{
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: lavender;
    border-radius: 10px;
  }
</style>