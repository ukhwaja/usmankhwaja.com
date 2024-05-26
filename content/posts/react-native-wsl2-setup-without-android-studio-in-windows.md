---
title: React Native WSL2 setup without Android Studio in Windows
date: 2024-05-26T00:45:50-04:00
categories: ["Code"]
tags: ["React Native", "WSL2", "Android Studio"]
keywords: ["WSL", "Setup", Development]
image: ["https://raw.githubusercontent.com/ampproject/docs/master/assets/img/logo-og-image.jpg"]
---

Setting up a project's foundation can be demanding. A well-structured environment leads to a much more productive development process. Many Android Studio projects built for other operating systems encounter issues when running on Windows. This often necessitates the installation of Node.js and Git on the Windows machine.

While Windows Subsystem for Linux (WSL) provides an excellent solution for using Node.js and Git in Windows, Android Studio struggles to interact seamlessly with the Linux filesystem. Here's a guide to setting up the Android SDK on WSL and enabling adb functionality for connected devices.

Please note: Even thout Android Studio is not required to be installed on Windows for developemnt, this approach is not compatible with emulators. Emulator setup requires using Android Studio on Windows.

```bash
# get latest Android SDK
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
mkdir -p android-sdk/cmdline-tools
unzip -d android-sdk/cmdline-tools/ commandlinetools-linux-11076708_latest.zip 
rm commandlinetools-linux-11076708_latest.zip
mv android-sdk/cmdline-tools/cmdline-tools android-sdk/cmdline-tools/latest

```

For next steps Java 8 is required. Best practice is to installed it using [Sdkman](https://sdkman.io/) which enables quickly switching between different Java version.

```bash
# install Android SDK
cd android-sdk/cmdline-tools/latest
./sdkmanager "build-tools;28.0.3" "platform-tools" "platforms;android-28" "tools"
./sdkmanager --licenses # accept all

# add environment variables
export ANDROID_HOME=$HOME/android-sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools/bin:$PATH
```

Now tools like adb should be available in bash. Check by running `adb --version`.

The following phase is for getting the connected usb devices to be seen by the adb installed in WSL. By default usb devices are not exposed to WSL. For that we have to use a tool in Windwos calles [usbipd](https://github.com/dorssel/usbipd-win).

```bash
# in powershell as administrator
winget install usbipd
usbipd list
usbipd bind --busid=<BUSID>
usbipd attach --wsl --busid=<BUSID>

```
Then in WSL, run adb server as root and the connected device should be visible on the list.

```bash
sudo ./android-sdk/platform-tools/adb start-server
adb devices

```

Enjoy development with :atom_symbol: