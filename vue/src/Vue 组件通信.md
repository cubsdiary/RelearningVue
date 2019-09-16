## vue中8种组件通信方式

---

### 一、  props / $emit
父组件通过props的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信。

1. 父组件向子组件传值

> 下面通过一个例子说明父组件如何向子组件传递数据：在子组件 <code style="color: #ff502c">article.vue</code> 中如何获取父组件<code style="color: #ff502c">section.vue</code> 中的数据 <code style="color: #ff502c">articles:['红楼梦', '西游记','三国演义']</code>

```
// section父组件
<template>
  <div class="section">
    <com-article :articles="articleList"></com-article>
  </div>
</template>

<script>
import comArticle from './test/article.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  }
}
</script>

```

```
// 子组件 article.vue
<template>
  <div>
    <span v-for="(item, index) in articles" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>
```
> 总结: <code style="color: #ff502c">prop</code> 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 <code style="color: #ff502c">prop</code> 只读，不可被修改，所有修改都会失效并警告。

2. 子组件向父组件传值

> 对于 <code style="color: #ff502c">$emit</code> 我自己的理解是这样的: <code style="color: #ff502c">$emit</code>绑定一个自定义事件, 当这个语句被执行时, 就会将参数 <code style="color: #ff502c">arg</code> 传递给父组件,父组件通过 <code style="color: #ff502c">v-on(@)</code> 监听并接收参数。 通过一个例子，说明子组件如何向父组件传递数据。
在上个例子的基础上, 点击页面渲染出来的 <code style="color: #ff502c">ariticle</code> 的 <code style="color: #ff502c">item</code> , 父组件中显示在数组中的下标。
```
// 父组件中
<template>
  <div class="section">
    <com-article :articles="articleList" @onEmitIndex="onEmitIndex"></com-article>
    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
import comArticle from './test/article.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      currentIndex: -1,
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    }
  }
}
</script>
```
```
<template>
  <div>
    <div v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>
```

---

### 二、 $children / $parent
