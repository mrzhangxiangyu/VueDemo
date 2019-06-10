<template>
  <div class="hotBookDiv">
    &nbsp;
    <span style="font-size:24px">热门小说</span>
    &emsp;
    <span @click="this.handleUpdate" >刷新</span>
    <ul class="hotBookUl">
      <li class="hotBookLi" v-for="(item,index) of list" :key="index">
        <img class="hotBookImg" :src="item.book_cover" width="100%">
        <span> 
          <h4>{{item.bookname}}</h4>
          <p>作者：{{item.author_name}}</p>
          <p class="hotBookIntro">简介：{{item.book_info}}</p>
        </span>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data(){
    return({
      list:[]
    })
  },
  methods:{
    handleUpdate(){
      this.axios.get("https://www.apiopen.top/novelApi")
    .then(res=>{
      const a = res.data.data;
      this.list=a;
    }
    )
    .catch();
    }
  },
  mounted(){
    this.axios.get("https://www.apiopen.top/novelApi")
    .then(res=>{
      const a = res.data.data;
      this.list=a;
    }
    )
    .catch();
  }
}
</script>

<style>
  .hotBookDiv{
    float: left;
    margin-left: 10px;
    width: 20%;
    margin-top: 10px;
  }
  .hotBookUl{
    padding: 0;
  }
  .hotBookLi{
    position: relative;
    list-style: none;
    background-color:lightcyan;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .hotBookLi:hover span{
    display:block;
    transition:  opacity 2s;
  }
  .hotBookLi span{
    color:#fff;
    height: 100%;
    width:100%;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    bottom: 0;
    display: none;
    z-index: 10;
  }
  .hotBookImg{
    width: 100%;
    z-index: 1;
  }
  .hotBookIntro{
    height: 50%;
    width: 100%;
    white-space: wrap;
    overflow: hidden;
    text-overflow: clip;
  }
</style>