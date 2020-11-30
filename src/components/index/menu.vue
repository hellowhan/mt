<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuleave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
           
        </dl>
        <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            //v-for v-if 永远不要把 v-if 和 v-for 同时用在同一个元素上。
             <template v-for="(item,index) in curDetail.items">
                   <h4 :key="index">{{item.title}}</h4>
                    <span v-for="(v,i) in item.items" :key="v+'_'+i">{{v}}</span>
             </template>
        </div>
    </div>
</template>

<script>
 import api from '@/api/index.js'
export default {
 data(){
     return {
         curDetail:null,
         menuList:[{
             title:'美食',
             icon:'food',
             children:[{
                 title:'美食',
                 children:['代金券','代金券','代金券',]
             }]
         },{
             title:'外卖',
             icon:'takeout',
             children:[{
                 title:'外卖',
                 children:['代金券','代金券','代金券',]
             }]
         },{title:'酒店',
             icon:'hotel',
             children:[{
                 title:'酒店星级',
                 children:['代金券','代金券','代金券',]
             }]

         }]
     }
  },
  created(){
      api.getMenuList().then(res=>{
          this.menuList = res.data.data
      })
  },
  methods:{
      menuEnter(item){
           this.curDetail = item
      },
      menuleave(){
        //   这里稍微有点不理解
          var self =this
          this.timer= setTimeout(function(){
                self.curDetail = null
          },200)
      },
      detailEnter(){
         clearTimeout(this.timer)
      },
      detailLeave(){
          this.curDetail = null
      }
  }
}
</script>