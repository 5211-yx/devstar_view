import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "梦宁软件",
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }], // 引入CSS
    ['link', { rel: 'icon', href: '/mengninglogo.png' }]      // 设置favicon
  ],
  description: "梦宁软件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录',
    outline: [2, 6],
    logo: {
      src: '/mnsoftware.png',
    },
    nav: [
      // { text: '文档', link: '/document/index' },
      {
        text: '文档',
        items: [
          {
            text: 'Devstar介绍文档',
            link: '/document/index'
          },
        ]
      },
      { text: 'API', link: 'https://docs.gitea.com/zh-cn/api/1.24/' },
      { text: 'Runner', link: 'runner/index' },
      { text: 'Enterprise', link: '/enterprise/index' },
    ],
    sidebar: {
      '/document/': sidebarDocument(),  // 直接返回 SidebarItem[]
      '/enterprise/': sidebarEnterprise()
    },
    socialLinks: [
      { icon: 'github', link: ' https://github.com/mengning/DevStar' }
    ],
    footer: {
      copyright: 'Copyright © 2025-present devstar contributors',
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})

function sidebarDocument(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Devstar是什么',
      link: '/document/index',
      items: []
    } as any,
    {
      text: '安装',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        { text: '对比Gitea与其它Git托管工具', link: 'https://docs.gitea.com/zh-cn/installation/comparison' },
        { text: '数据库准备', link: 'https://docs.gitea.com/zh-cn/installation/database-prep' },
        // { text: '数据库准备', link: '/document/installation/from-source' },
        { text: '使用shell脚本安装', link: '/document/installation/install-via-shell-script' },
        { text: '使用二进制文件安装', link: 'https://docs.gitea.com/zh-cn/installation/install-from-binary' },
        { text: '包管理器安装', link: 'https://docs.gitea.com/zh-cn/installation/install-from-package' },
        { text: '使用源代码安装', link: 'https://docs.gitea.com/zh-cn/installation/install-from-source' },
        { text: '在Linux中以service方式运行', link: 'https://docs.gitea.com/zh-cn/installation/linux-service' },//
        { text: '注册为Windows服务', link: 'https://docs.gitea.com/zh-cn/installation/windows-service' },
        { text: '使用Docker安装(rootless)', link: 'https://docs.gitea.com/zh-cn/installation/install-with-docker-rootless' },
        { text: '使用Docker安装', link: 'https://docs.gitea.com/zh-cn/installation/install-with-docker' },
        { text: '在Kubernetes中安装Gitea', link: 'https://docs.gitea.com/zh-cn/installation/install-on-kubernetes' },
        { text: '在云服务器上安装Gitea', link: 'https://docs.gitea.com/zh-cn/installation/install-on-cloud-provider' },
        { text: '从旧版Gitea升级', link: 'https://docs.gitea.com/zh-cn/installation/upgrade-from-gitea' },
      ]
    } as any,
    {
      text: '管理',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        { text: '命令行', link: 'https://docs.gitea.com/zh-cn/administration/command-line' },
        { text: '认证', link: 'https://docs.gitea.com/zh-cn/administration/authentication' },
        { text: '环境变量清单', link: 'https://docs.gitea.com/zh-cn/administration/environment-variables' },
        { text: '备份与恢复', link: 'https://docs.gitea.com/zh-cn/administration/backup-and-restore' },
        { text: 'Email设置', link: 'https://docs.gitea.com/zh-cn/administration/email-setup' },
        { text: 'Git LFS设置', link: 'https://docs.gitea.com/zh-cn/administration/git-lfs-setup' },
        { text: 'HTTPS配置', link: 'https://docs.gitea.com/zh-cn/administration/https-setup' },
        { text: '设置Fail2ban', link: 'https://docs.gitea.com/zh-cn/administration/fail2ban-setup' },
        { text: '反向代理', link: 'https://docs.gitea.com/zh-cn/administration/reverse-proxies' },
        { text: '嵌入资源提取工具', link: 'https://docs.gitea.com/zh-cn/administration/cmd-embedded' },
        { text: '配置说明', link: 'https://docs.gitea.com/zh-cn/administration/config-cheat-sheet' },
        { text: '日志配置', link: 'https://docs.gitea.com/zh-cn/administration/logging-config' },
        { text: '邮件模板', link: 'https://docs.gitea.com/zh-cn/administration/mail-templates' },
        { text: '仓库索引器', link: 'https://docs.gitea.com/zh-cn/administration/repo-indexer' },
        { text: 'GPG提交签名', link: 'https://docs.gitea.com/zh-cn/administration/signing' },
        { text: '外部渲染器', link: 'https://docs.gitea.com/zh-cn/administration/external-renderers' },
        { text: '搜索引擎索引', link: 'https://docs.gitea.com/zh-cn/administration/search-engines-indexation' },
        { text: '自定义Gitea配置', link: 'https://docs.gitea.com/zh-cn/administration/customizing-gitea' },
        { text: '添加法律页面', link: 'https://docs.gitea.com/zh-cn/administration/adding-legal-pages' }
      ]
    } as any,
    {
      text: '使用',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        {
          text: 'Actions',
          collapsible: true, // 使整个组可折叠
          collapsed: false, // 默认展开
          items: [
            { text: 'Overview', link: 'https://docs.gitea.com/zh-cn/usage/actions/overview' },
            { text: '快速入门', link: 'https://docs.gitea.com/zh-cn/usage/actions/quickstart' },
            { text: '与GitHub Actions的对比', link: 'https://docs.gitea.com/zh-cn/usage/actions/comparison' },
            { text: 'Act Runner', link: 'https://docs.gitea.com/zh-cn/usage/actions/act-runner' },
            { text: '变量', link: 'https://docs.gitea.com/zh-cn/usage/actions/actions-variables' },
            { text: 'Gitea Actions设计', link: 'https://docs.gitea.com/zh-cn/usage/actions/design' },
            { text: '密钥管理', link: 'https://docs.gitea.com/zh-cn/usage/actions/secrets' },
            { text: 'Gitea Actions常见问题解答', link: 'https://docs.gitea.com/zh-cn/usage/actions/faq' },
            { text: 'Badge', link: 'https://docs.gitea.com/zh-cn/usage/actions/badge' }
          ]
        },
        {
          text: '软件包',
          collapsible: true, // 使整个组可折叠
          collapsed: true, // 默认展开
          items: [
            { text: '软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/overview' },
            { text: 'Alpine 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/alpine' },
            { text: 'Arch package registry', link: 'https://docs.gitea.com/zh-cn/usage/packages/arch' },
            { text: 'Cargo 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/cargo' },
            { text: 'Chef 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/chef' },
            { text: '存储', link: 'https://docs.gitea.com/zh-cn/usage/packages/storage' },
            { text: 'Composer 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/composer' },
            { text: 'Conan 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/conan' },
            { text: 'Conda 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/conda' },
            { text: '容器注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/container' },
            { text: 'CRAN 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/cran' },
            { text: 'Go 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/go' },
            { text: 'Helm Chart 注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/helm' },
            { text: 'Maven 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/maven' },
            { text: 'NPM Package Registry', link: 'https://docs.gitea.com/zh-cn/usage/packages/npm' },
            { text: 'NuGet 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/nuget' },
            { text: 'Pub 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/pub' },
            { text: 'PyPI 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/pypi' },
            { text: 'RPM 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/packages/rpm' },
            { text: 'RubyGems 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/rubygems' },
            { text: 'Swift 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/swift' },
            { text: 'Vagrant 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/vagrant' },
            { text: '通用软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/generic' },
            { text: 'Debian 软件包注册表', link: 'https://docs.gitea.com/zh-cn/usage/packages/debian' }
          ]
        },
        { text: 'AGit', link: 'https://docs.gitea.com/zh-cn/usage/agit' },
        { text: '个人资料 README', link: 'https://docs.gitea.com/zh-cn/usage/profile-readme' },
        { text: 'Blame File View', link: 'https://docs.gitea.com/zh-cn/usage/blame' },
        { text: '邮件接收', link: 'https://docs.gitea.com/zh-cn/usage/incoming-email' },
        { text: '标签', link: 'https://docs.gitea.com/zh-cn/usage/labels' },
        { text: '合并请求', link: 'https://docs.gitea.com/zh-cn/usage/pull-request' },
        { text: '权限', link: 'https://docs.gitea.com/zh-cn/usage/permissions' },
        { text: '模板仓库', link: 'https://docs.gitea.com/zh-cn/usage/template-repositories' },
        { text: '从模板创建工单与合并请求', link: 'https://docs.gitea.com/zh-cn/usage/issue-pull-request-templates' },
        { text: '自动链接引用', link: 'https://docs.gitea.com/zh-cn/usage/automatically-linked-references' },
        { text: '合并消息模板', link: 'https://docs.gitea.com/zh-cn/usage/merge-message-template' },
        { text: '推送', link: 'https://docs.gitea.com/zh-cn/usage/push' },
        { text: 'Blocking a user', link: 'https://docs.gitea.com/zh-cn/usage/blocking-user' },
        { text: '克隆过滤器 (部分克隆)', link: 'https://docs.gitea.com/zh-cn/usage/clone-filters' },
        { text: 'Code Owners', link: 'https://docs.gitea.com/zh-cn/usage/code-owners' },
        { text: 'Webhooks', link: 'https://docs.gitea.com/zh-cn/usage/webhooks' },
        { text: 'Migration', link: 'https://docs.gitea.com/zh-cn/usage/migration' },
        { text: '受保护的标签', link: 'https://docs.gitea.com/zh-cn/usage/protected-tags' },
        { text: '仓库镜像', link: 'https://docs.gitea.com/zh-cn/usage/repo-mirror' },
        { text: 'Markdown', link: 'https://docs.gitea.com/zh-cn/usage/markdown' },
        { text: 'Multi-factor Authentication (MFA)', link: 'https://docs.gitea.com/zh-cn/usage/multi-factor-authentication' }
      ]
    } as any,
    {
      text: '开发',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        { text: '玩转 Gitea', link: 'https://docs.gitea.com/zh-cn/development/hacking-on-gitea' },
        { text: 'API 使用指南', link: 'https://docs.gitea.com/zh-cn/development/api-usage' },
        { text: 'OAuth2 提供者', link: 'https://docs.gitea.com/zh-cn/development/oauth2-provider' },
        { text: '迁移接口', link: 'https://docs.gitea.com/zh-cn/development/migrations-interfaces' },
        { text: '集成', link: 'https://docs.gitea.com/zh-cn/development/integrations' }
      ]
    } as any,
    {
      text: '贡献',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        { text: '后端开发指南', link: 'https://docs.gitea.com/zh-cn/contributing/guidelines-backend' },
        { text: '前端开发指南', link: 'https://docs.gitea.com/zh-cn/contributing/guidelines-frontend' },
        { text: '重构指南', link: 'https://docs.gitea.com/zh-cn/contributing/guidelines-refactoring' },
        { text: '本地化', link: 'https://docs.gitea.com/zh-cn/contributing/localization' }
      ]
    } as any,
    {
      text: '帮助',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        { text: '常见问题', link: 'https://docs.gitea.com/zh-cn/help/faq' },
        { text: '支持选项', link: 'https://docs.gitea.com/zh-cn/help/support' },
      ]
    } as any,
  ]
}

function sidebarEnterprise(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Gitea Enterprise 是什么',
      link: '/enterprise/index',
      items: [

      ]
    },
    {
      text: '特征',
      collapsible: true, // 使整个组可折叠
      collapsed: true, // 默认展开
      items: [
        {
          text: '可继承分支保护',
          link: 'https://docs.gitea.com/enterprise/features/inheritable-branch-protection'
        },
        {
          text: '依赖关系扫描',
          link: 'https://docs.gitea.com/enterprise/features/dependency-scan'
        },
        {
          text: 'IP 允许列表',
          link: 'https://docs.gitea.com/enterprise/features/ip-allowlist'
        },
        {
          text: '企业主题',
          link: 'https://docs.gitea.com/enterprise/features/enterprise-theme'
        },
        {
          text: '强制2FA身份验证',
          link: 'https://docs.gitea.com/enterprise/features/mandatory-2fa'
        },
        {
          text: '审计日志',
          link: 'https://docs.gitea.com/enterprise/features/audit-log'
        },
        {
          text: 'SAML',
          link: 'https://docs.gitea.com/enterprise/features/saml-auth'
        },
        {
          text: '发布节奏和版本控制',
          link: 'https://docs.gitea.com/enterprise/features/release-cadence'
        }
      ]
    } as any,
    {
      text: '安装',
      link: 'https://docs.gitea.com/enterprise/installation',
      items: []
    },
    {
      text: '常见问题',
      link: 'https://docs.gitea.com/enterprise/faq',
      items: []
    },
  ]
}

function sidebarRunner(): DefaultTheme.SidebarItem[] {
  return [
    {
      link: '/runner/index',
    },
  ]
}

