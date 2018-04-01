# react-redux

## 概述

迁移 flux 状态管理至 redux

## 关键步骤

- FluxStore 改造为纯函数实现的 reducers
- 去掉 actions 中触发 FluxDispatcher，直接返回 action type及payload
- top container 注入生成的 store
- container 中通过 FluxContainer 实现的部分替换为 connect

## 特点

UI组件零变动
