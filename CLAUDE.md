# CLAUDE.md

本文件为在此代码库中工作的 Claude Code (claude.ai/code) 提供操作指导。

## 项目概览

这是一个专注于编码面试准备的 JavaScript 算法练习仓库，主要包含：

- **排序算法**: `sort/` 目录下的各种排序算法实现
- **编程面试题**: `js/` 和 `face/` 目录下的 LeetCode 风格题目解答
- **公司面试题**: `face/` 目录下的百度、哔哩哔哩、大疆等公司的面试题目

## 项目结构

```
├── sort/           # 排序算法实现
├── js/             # LeetCode 题目解答
├── face/           # 公司面试题目和编程挑战
├── html/           # HTML 相关文件
├── css/            # CSS 样式表
└── index.html      # 主 HTML 文件
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产环境构建
npm run build

# 运行测试（当前未配置测试）
npm test
```

## 核心目录和文件

### 排序算法 (`sort/`)
包含各种排序算法的实现：
- 快速排序 (`quickSort快排.js`)
- 归并排序 (`mergeSort归并.js`)
- 堆排序 (`heapSort堆.js`)
- 冒泡排序 (`bubbleSort冒泡.js`)
- 插入排序 (`InsertionSort插入.js`)
- 选择排序 (`selectSort选择.js`)
- 计数排序 (`countingSort计数.js`)
- 基数排序 (`radixSort基数.js`)
- 希尔排序 (`shellSort希尔.js`)
- 桶排序 (`bucketSort桶.js`)
- 猴子排序 (`bogoSort猴子.js`)
- 鸽巢排序 (`pigeonholeSort鸽巢.js`)
- 二叉树排序 (`binaryTreeSort二叉树.js`)
- 侏儒排序 (`gnomeSort侏儒.js`)

### LeetCode 解答 (`js/`)
包含 LeetCode 题目的解答：
- LeetCode 118: 杨辉三角
- LeetCode 150: 逆波兰表达式求值
- LeetCode 2103: 环和杆
- LeetCode 1268: 搜索推荐系统
- LeetCode 1558: 得到目标数组的最少函数调用次数
- LeetCode 2525: 根据规则将箱子分类

### 公司面试题 (`face/`)
包含来自不同公司的编程挑战：
- 百度面试题 (`BAIDU.js`)
- 哔哩哔哩面试题 (`BILIBILI.js`)
- 大疆面试题 (`DJIOne.js`)
- CVTE 面试题 (`CVTEBefore.js`)
- 各种算法挑战和 JavaScript 概念题

## 技术栈

- **JavaScript**: 主要编程语言
- **HTML/CSS**: 前端结构和样式
- **Parcel**: 打包构建工具
- **Element UI**: UI 组件库
- **Axios**: HTTP 客户端库

## 开发规范

1. **文件命名**: 采用中英文结合的描述性名称
2. **代码注释**: 详细的中文注释，解释算法逻辑
3. **算法重点**: 强调理解时间和空间复杂度
4. **面试准备**: 解答包含详细的解题思路和优化方案

## 常见任务

- **添加新排序算法**: 在 `sort/` 目录创建新文件
- **解答 LeetCode 题目**: 在 `js/` 目录添加带题目编号的解答
- **公司面试准备**: 在 `face/` 目录添加带公司名的解答
- **测试算法**: 直接使用 Node.js 运行单个 JavaScript 文件

## 构建和开发工具

- Parcel 打包工具用于前端资源
- Modernizr 用于特性检测
- Google Analytics 集成
- 使用 normalize.css 的响应式设计