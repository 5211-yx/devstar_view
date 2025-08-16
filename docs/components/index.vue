<!-- docs/index.vue -->
<template>
   <div id="header">
    <h2>我们的产品</h2>
   <div class="product-container">
  <ol class="product-list">
    <!-- 产品1 -->
    <li class="product-item">
      <div class="product-card">
        <img src="/DevStar.png" alt="产品1" class="product-image">
        <div class="product-info">
          <h3 class="product-title">Devstar</h3>
          <p class="product-desc">DevStar Studio 是一个Gitea 发行版，在Git代码仓库托管的基础上提供了开发环境DevEnv执行引擎，与VS Code插件或自定义IDE深度融合，形成灵活适配基础软件工具的生态平台，从而为开发者用户提供智能（代码大模型AI+）、安全（完全云原生）、一站式开箱即用的CI/CD全生命周期研发平台</p>
          <a href="/document/index" class="product-link">介绍文档</a>
        </div>
      </div>
    </li>
    
    <!-- 产品2 -->
    <li class="product-item">
      <div class="product-card">
        <img src="/DevStar.png" alt="产品2" class="product-image">
        <div class="product-info">
          <h3 class="product-title">Devstar</h3>
          <p class="product-desc">DevStar Studio 是一个Gitea 发行版，在Git代码仓库托管的基础上提供了开发环境DevEnv执行引擎，与VS Code插件或自定义IDE深度融合，形成灵活适配基础软件工具的生态平台，从而为开发者用户提供智能（代码大模型AI+）、安全（完全云原生）、一站式开箱即用的CI/CD全生命周期研发平台</p>
          <a href="/document/index" class="product-link">介绍文档</a>
        </div>
      </div>
    </li>
    
    <!-- 产品3 -->
    <li class="product-item">
      <div class="product-card">
        <img src="/DevStar.png" alt="产品3" class="product-image">
        <div class="product-info">
          <h3 class="product-title">Devstar</h3>
          <p class="product-desc">DevStar Studio 是一个Gitea 发行版，在Git代码仓库托管的基础上提供了开发环境DevEnv执行引擎，与VS Code插件或自定义IDE深度融合，形成灵活适配基础软件工具的生态平台，从而为开发者用户提供智能（代码大模型AI+）、安全（完全云原生）、一站式开箱即用的CI/CD全生命周期研发平台</p>
          <a href="/document/index" class="product-link">介绍文档</a>
        </div>
      </div>
    </li>
  </ol>
</div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    handleClick() {
      alert('按钮被点击！')
    }
  }
}
</script>

<style scoped>
  h2 {
    border-top: 0;
    margin: 0 0 0 16px;
  }
  .product-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Flex布局产品列表 */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 每个产品项 */
.product-item {
  flex: 1 1 300px; /* 最小宽度300px，可伸缩 */
}

/* 产品卡片 */
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center; /* 新增：使卡片内所有元素水平居中 */
  height: 100%;
  border: 1px solid #eaecef;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* 产品图片 */
.product-image {
  width: 180px;          /* 根据原图比例调整 */
  height: 180px;
  object-fit: contain;    /* 完整显示标志 */
  background: transparent; /* 去除白色背景 */
  padding: 0;             /* 去除内边距 */
  border: none !important; /* 强制去除边框 */
}

/* 产品信息区域 */
.product-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #333;
}

.product-desc {
  margin: 0 0 15px 0;
  color: #666;
  flex-grow: 1;
}

.product-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3eaf7c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s;
}

.product-link:hover {
  background-color: #2d9f6b;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .product-list {
    gap: 20px;
  }
  
  .product-item {
    flex: 1 1 100%;
  }
}
</style>