---
title: Quickstart
description: Quickstart guide for web-core.
slug: quickstart
tags: [web-core, quickstart, setup]
---

# Quickstart

The DyteClient is the root class of the SDK. It is the main entry point of the SDK. It is the only class that you need to instantiate in order to use the SDK. To instantiate DyteClient, you can run the following command:

```js
const meeting = await DyteClient.init({
    roomName,
    authToken
});
await meeting.joinRoom();
```

You can get the roomName and authToken using our backend APIs and then pass it to the init method of DyteClient.

Now at this point you have joined the meeting, the next steps would be configuring local media publishing and participant's media playback