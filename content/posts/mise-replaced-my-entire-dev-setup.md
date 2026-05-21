---
title: Mise replaced my entire dev setup
date: 2026-05-20T22:36:22-07:00
categories: ["Code"]
tags: ["Mise", "Dev Tools", "Productivity"]
keywords: ["Mise", "Dev Environment", "Package Manager"]
image: ["https://raw.githubusercontent.com/ampproject/docs/master/assets/img/logo-og-image.jpg"]
---

[Mise](https://mise.jdx.dev/) has truly revolutionized my development workflow. Before Mise, managing dependencies felt like a chaotic juggling act. I had n for Node.js versions, SDKMAN! for Java versions, and Homebrew (Linuxbrew) handling everything from Hugo to scattered utilities across various systems. Each tool operated in their own silos, leading to environment drift and constant setup frustration.

Now everything I need is one unified command with `mise`:

![mise-list](./mise-list.webp "673x235")

Mise unifies this mess. For example in my [previous post]({{< relref "posts/react-native-wsl2-setup-without-android-studio-in-windows.md" >}}) I used wget to get the Android Studio command line tools. Then use it to get the Android SDK. Manually add all the environment variables. Not to forget that Java is assumed to be installed in the env already. With `mise`:

```bash
mise use -g java@17
mise use -g android-sdk
```

And thats it! `$JAVA_HOME` and `$ANDROID_HOME` are already added to your `PATH`. `sdkmanager` command is now universally available, and ready to use as:

```bash
sdkmanager "build-tools@36.1.0" "platform-tools" "platforms;android-36" "tools"
```

Now go build Android apps. Thank you Mise. :thumbsup: