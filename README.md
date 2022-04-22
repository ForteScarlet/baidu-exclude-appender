# Baidu Exclude Appender
[![](https://img.shields.io/chrome-web-store/v/fdanehilpddgjmmngflpecmmmgmkfjmn)](https://chrome.google.com/webstore/detail/baidu-exclude-appender/fdanehilpddgjmmngflpecmmmgmkfjmn)
[![](https://img.shields.io/chrome-web-store/stars/fdanehilpddgjmmngflpecmmmgmkfjmn)](https://chrome.google.com/webstore/detail/baidu-exclude-appender/fdanehilpddgjmmngflpecmmmgmkfjmn)
[![](https://img.shields.io/chrome-web-store/users/fdanehilpddgjmmngflpecmmmgmkfjmn)](https://chrome.google.com/webstore/detail/baidu-exclude-appender/fdanehilpddgjmmngflpecmmmgmkfjmn)
[![](https://img.shields.io/chrome-web-store/price/fdanehilpddgjmmngflpecmmmgmkfjmn)](https://chrome.google.com/webstore/detail/baidu-exclude-appender/fdanehilpddgjmmngflpecmmmgmkfjmn)


[GitHub](https://github.com/ForteScarlet/baidu-exclude-appender) | [Gitee镜像](https://gitee.com/ForteScarlet/baidu-exclude-appender)

<hr />

在你进行百度搜索的时候，自动为你填充结尾处的排除参数的谷歌浏览器插件。例如 `-csBn`。

## 使用
### 安装
#### 方式一 谷歌商店(推荐)
前往谷歌商店的 [Baidu Exclude Appender](https://chrome.google.com/webstore/detail/baidu-exclude-appender/fdanehilpddgjmmngflpecmmmgmkfjmn/related?hl=zh-CN)
安装插件到您的浏览器。

#### 方式二 releases
前往 [releases](https://github.com/ForteScarlet/baidu-exclude-appender/releases) 下载 `.crx` 文件并安装。


#### 方式三 使用源码(不推荐)
下载源码包并通过chrome开发者模式安装。


### 配置

配置页面进入方法：

方法一: 右上角找到插件 `Baidu Exclude Appender`, 点击呼出菜单并选择 **`选项`** 跳转。

方法二: 在谷歌浏览器的 **`扩展程序`** 页面，点击进入 `Baidu Exclude Appender` 详情页，点击 **`扩展程序选项`** 跳转。

<br />

![option1](.github/readme/option_1.gif)


![option1](.github/readme/option_2.gif)


![option1](.github/readme/option_3.gif)

### 搜索
![use1](.github/readme/use_1.gif)


![use1](.github/readme/use_2.gif)

## 说明
- 额外拼接的属性会拼接于输入内容的 **结尾处**。
- 当出现重复的排除参数时，不会重复添加。例如你的查询内容为 `红烧肉 -foo`，则不会在结尾处重复拼接 `-foo`。 
- **不会** 检测查询内容的 **非结尾处** 参数。
  例如如果你的查询内容为 `红烧肉 -foo 炸鸡块`，<br/>
  则会导致在结尾处拼接一个重复的 `-foo`，变成 `红烧肉 -foo 炸鸡块 -foo`。
- 不会移除任何其他参数。例如你的查询内容为 `红烧肉 -bar`，但是你在本插件中仅配置了 `-foo`，那么查询内容会变成 `红烧肉 -bar -foo`。
- 不保证参数顺序。例如你的查询内容为 `红烧肉 -bar`，但是你在本插件中仅配置了 `-foo`，那么查询内容可能会变成 `红烧肉 -bar -foo`，也可能会变成 `红烧肉 -foo -bar`。

## 注意事项
可能会有各种各样的问题，例如：
- 有时候会不生效，可以在进入查询页面后刷新页面，或者硬性刷新页面。
- 直接点击联想词不会填充
- 填充后可能需要在手动点击一次查询
- 其他未知问题

## 协助与反馈
欢迎通过 [pr](https://github.com/ForteScarlet/baidu-exclude-appender/pulls) 贡献您的力量，非常感谢！

如果您遇到什么问题或者有什么建议意见，可以通过 [issue](https://github.com/ForteScarlet/baidu-exclude-appender/issues) 进行反馈喔～

## 免责声明
本插件仅供学习交流使用，请勿用于非法活动，开发者不承担任何责任。

