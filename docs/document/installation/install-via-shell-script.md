---
outline: deep
weight: 2
---

# 快速开始

如果您是在Windows环境下，请在cmd命令行下先运行如下命令：
```md
powershell wsl --install -d Ubuntu-20.04
```
如果以上命令无法自动完成安装WSL，可以手动执行如下消耗完成命令安装：
```md
dism.exe /Online /Enable-Feature /FeatureName:Microsoft-Windows-Subsystem-Linux /All /LimitAccess /All
dism.exe /Online /Enable-Feature /FeatureName:VirtualMachinePlatform /All /LimitAccess
```
在Ubuntu-20.04下完成安装：
```md
wget -c https://devstar.cn/assets/install.sh && chmod +x install.sh && sudo ./install.sh
devstar help
------------------------------------------------------------------------
DevStar usage help:
  help, -h, --help,     Help information
  start                 Start DevStar Studio
      --port=<arg>      Specify the port number (default port is 8080)
      --version=<arg>   Specify the DevStar Studio Image Version (default verson is latest)
  stop                  Stop the running DevStar Studio
  logs                  View the logs of the devstar-studio container
  clean                 Clean up the running DevStar Studio, including deleting user data. Please use with caution.
------------------------------------------------------------------------
sudo devstar start
...
-------------------------------------------------------
DevStar started in http://localhost:8080 successfully!
-------------------------------------------------------
```
然后通过浏览器打开http://localhost:8080完成后配置安装，默认第一个注册用户为管理员账户。
