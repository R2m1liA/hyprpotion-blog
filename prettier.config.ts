import { type Config } from 'prettier';

const config: Config = {
  // 打印宽度
  printWidth: 80,
  // 缩进空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进
  useTabs: false,
  // 句尾添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 尾随逗号
  trailingComma: 'es5',
  // 对象大括号内的空格
  bracketSpacing: true,
  // 箭头函数参数括号
  arrowParens: 'always',
  // 括号行位置
  bracketSameLine: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // HTML 空格敏感度
  htmlWhitespaceSensitivity: 'css',
  // Vue 文件脚本和样式缩进
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      // 对 CSS 文件使用双引号
      files: '*.css',
      options: { singleQuote: false },
    },
    {
      // 对 SCSS 文件使用双引号
      files: '*.scss',
      options: { singleQuote: false },
    },
  ],
};

export default config;
