# Rocket.Chat.ChatGPT.App
A simple App to integrate with ChatGPT unnoficial API

# **UPDATE!!!** 
this App was using an unnoficial API, which was always updating.

With the release of the OpenAi Completions API, we can now do it the proper way. Check it out:
https://github.com/dudanogueira/Rocket.Chat.OpenAI.Completions.App


Notice: This app need to update the external dependency in order to work.

![image](https://user-images.githubusercontent.com/1761174/206304501-505c1031-30c8-4f9c-817f-aec2427395ca.png)


## Getting Started
- Install this App at your Rocket.Chat instance: [How to do it here](https://docs.rocket.chat/air-gapped-workspaces/manual-app-installation#installing-an-app) and [Versions here](https://github.com/dudanogueira/Rocket.Chat.ChatGPT.App/tree/master/dist)
- Get your ChatGPT token [following this doc](https://github.com/acheong08/ChatGPT/wiki/Setup)
- Configure your app with it, and choose how you want the answer to be presented

## NOTICE
due to the ammount of requests, ChatGPT may not answer the question and it will silently fail :(

## DISCLAIMER
This App uses an unofficial API for ChatGPT and is meant only for reserach (and fun) purposes. Use it at your own risk.

## KNOWN ISSUES
for some reason the build/deploy process fails. You need to change:
```
//import ExpiryMap from 'expiry-map';
import ExpiryMap = require('expiry-map');
```
at node_modules/chatgpt/build/index.d.ts

Also, check out this issue and workaround if you have problems while deploying:
[Failed to call the method "http.STATUS_CODES](https://github.com/dudanogueira/Rocket.Chat.ChatGPT.App/issues/1)


## Documentation from Rocket.Chat side:
Here are some links to examples and documentation:
- [Rocket.Chat Apps TypeScript Definitions Documentation](https://rocketchat.github.io/Rocket.Chat.Apps-engine/)
- [Rocket.Chat Apps TypeScript Definitions Repository](https://github.com/RocketChat/Rocket.Chat.Apps-engine)
- [Example Rocket.Chat Apps](https://github.com/graywolf336/RocketChatApps)
- Community Forums
  - [App Requests](https://forums.rocket.chat/c/rocket-chat-apps/requests)
  - [App Guides](https://forums.rocket.chat/c/rocket-chat-apps/guides)
  - [Top View of Both Categories](https://forums.rocket.chat/c/rocket-chat-apps)
- [#rocketchat-apps on Open.Rocket.Chat](https://open.rocket.chat/channel/rocketchat-apps)
