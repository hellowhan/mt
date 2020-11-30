<template>
    <!-- 只有一个div根元素
         分三行 
         每一行又嵌套一个组件
         组件可以重复使用，例如下面的例子
         就是把父子之间传递数据，利用props
     -->
    <div class="page-changeCity">
           <el-row>
          <province />
           </el-row>
           <el-row>
              <hot title="热门城市:" :list="hotList" />
           </el-row>
           <el-row>
                <hot title="最近访问:" :list="rencentList" />
           </el-row>
           <el-row>
              <category />
           </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
    data(){
        return {
            hotList:[],
            rencentList:[],
        }
    },
    // 钩子函数在初始化完成后调用，即可请求后端数据。
    //axios与接口地址皆封装在api处
    created(){
        api.getHotCity().then(res=>{
            console.log(res.data.data);
            this.hotList = res.data.data.map((item)=>item.name)

        });
        api.getRecentCity().then(res=>{
             this.rencentList = res.data.data.map((item)=>item.name)
        })

    },
 components: {
        Province,
        hot,
        Category

    }
}
</script>