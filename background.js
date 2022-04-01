'use strict';
chrome.runtime.onInstalled.addListener((details) => {
    console.log(details)

    // web请求监听，最后一个参数表示阻塞式，需单独声明权限：webRequestBlocking
    chrome.webRequest.onBeforeRequest.addListener((details) => {
        console.log('onBeforeRequest')
        console.log(details)
        // details.url = 'https://www.baidu.com/s?wd=java拼接字符串 -csdn'
        // // cancel 表示取消本次请求
        // if(!showImage && details.type == 'image') return {cancel: true};
        // // 简单的音视频检测
        // // 大部分网站视频的type并不是media，且视频做了防下载处理，所以这里仅仅是为了演示效果，无实际意义
        // if(details.type == 'media') {
        //     chrome.notifications.create(null, {
        //         type: 'basic',
        //         iconUrl: 'img/icon.png',
        //         title: '检测到音视频',
        //         message: '音视频地址：' + details.url,
        //     });
        // }
        if (details.url.startsWith('https://www.baidu.com/s?')) {
            if (!details.url.endsWith('-csdn')) {
                chrome.tabs.update(details.tabId, { url: 'https://www.baidu.com/s?wd=java拼接字符串 -csdn' })
            }
        }

        // console.log(tab)
        // return {
        //     redirectUrl: 'https://www.baidu.com/s?wd=java拼接字符串 -csdn'
        // }
    }, {urls: ["*://*.baidu.com/s*"]}, []);

    console.log("In before request")

    // web请求监听，最后一个参数表示阻塞式，需单独声明权限：webRequestBlocking
    // chrome.webRequest.onBeforeRedirect.addListener((details) => {
    //     console.log('onBeforeRedirect')
    //     console.log(details)
    // }, {urls: ["*://*.baidu.com/s*"]}, ['blocking']);

    console.log("In before redirect")

});

console.log("H!")

