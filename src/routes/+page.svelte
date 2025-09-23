<div class="blog-content">
  <h1 class="mb-0">使用Tailwind为页面添加样式</h1>
  <small class="block text-right mr-4">2025-09-23</small>
  <p>
    这是一个使用Svelte构建的博客网站，这是他一开始的样子。对，一个简陋的容器。
  </p>
  <img src="/images/initial-page.png" alt="Initial Page Screenshot" />
  <p>
    目前为其添加了<a href="https://tailwindcss.com/">Tailwindcss</a
    >用于控制文章样式，此时页面看起来更加美观。大概做了以下改动：
  </p>
  <ul class="list-disc list-inside">
    <li>引入Tailwindcss</li>
    <li>为页面添加背景颜色</li>
    <li>为文章标题、时间、段落等添加样式</li>
    <li>调整图片的圆角与边距</li>
  </ul>
  <p>
    目前的页面是手搓Svelte文件写出来的，我不想每次创建新文章都手搓Svelte代码，需要考虑为站点引入Markdown解析器。这样就可以直接写Markdown文档，并由解析器渲染为HTML。
  </p>
  <h3 class="text-orange-700">TODOS</h3>
  <ul class="list-disc list-inside">
    <li>引入Markdown解析器</li>
    <li>还没想好...</li>
  </ul>
</div>
