---
title: Gitea Enterprise 介绍
sidebar: auto
---

# Gitea Enterprise

## 什么是 Gitea Enterprise？

Gitea Enterprise 是基于开源 Gitea 项目开发的增强版，为企业级用户提供更可靠的体验。

## 与开源版的关系

- 基于开源 Gitea 项目开发，操作和配置方式几乎相同
- 熟悉 Gitea 的用户可以快速上手 Gitea Enterprise
- 企业版专为企业用例需求构建
- **注意**：企业版功能需要付费激活

> 如果您对价格有疑问，可以申请30天免费试用，试用期结束后可选择继续使用（功能将恢复为开源版相同）

## 定价方案

您可以在客户门户自主购买 Gitea Enterprise 许可证：

- 价格基于用户数量，可按实际需求购买
- 支持随时"调整"许可证规模（增减用户数或调整时长）
  - 示例：可将20人12个月许可调整为40人6个月或10人24个月
  - 调整不产生额外费用
- 许可证到期前可选择续订延长有效期
- 随时续订可享受促销优惠

## 版本规则

Gitea Enterprise 与 Gitea 项目的版本号不同但相互对应：

- 企业版版本格式：`v21.6.*`
  - `v21.6` 表示基于 Gitea 1.21.6 版本开发
  - `.*` 包含企业版特有的补丁或功能更新

### 版本切换指南

1. **切换条件**：所有数据和配置完全兼容
2. **操作步骤**：只需替换可执行文件或 Docker 镜像
3. **版本对应规则**：
   - 从 Gitea v1.21.6 → 需选择 Gitea Enterprise v21+
   - 从 Gitea Enterprise v23.1.0 → 需选择 Gitea v1.23+

## 问题反馈

大多数问题已在 [FAQ](https://docs.gitea.com/enterprise/faq) 中解答，如需进一步帮助请联系：

**邮箱**: [support@example.com](mailto:support@example.com)