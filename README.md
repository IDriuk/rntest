## react-native docs
- [docs](https://developer.android.com/studio/run/device.html)

## react-native-maps
- "react-native-maps": "^0.23.0"

```
cd rntest
npm install react-native-maps --save
react-native link react-native-maps
react-native run-ios
```

### successfull sync
[issues/2695](https://github.com/react-native-community/react-native-maps/issues/2695) 

- добавить в node_modules/react-native-maps/lib/android/build.gradle
```
// This line made Gradle sync successfully
implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
```

### manifest
```
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```

### getting api key
- [maps documentation](https://developers.google.com/maps/documentation/android-sdk/signup)
- [google console](https://console.cloud.google.com/apis/credentials?project=rntest-234913&supportedpurview=project)
- errors in simulator console with ``` <cert_fingerprint>;<package_name> ```
- restrictions for key (android, cert fingerprint, package)
- enable google maps for project

- package name in AndroidManifest.xml.
- keytool -list -keystore my-release-key.keystore
- keytool -list -keystore my-release-key.keystore -alias my-key-alias

### run on device
- [android studio run device](https://developer.android.com/studio/run/device.html)
- [dev options](https://developer.android.com/studio/debug/dev-options.html)
- settings -> system -> about phone -> tap build number 7 times
- settings -> developer options -> usb debugging
- plug phone -> allow connection
- [react-native docs running on device](https://facebook.github.io/react-native/docs/running-on-device)
- react-native run android

### building app for production
- [signed apk android](https://facebook.github.io/react-native/docs/signed-apk-android)
- /usr/libexec/java_home
- /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home

- sudo keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
- password: 111111
- my-release-key.keystore to /Users/ivandriuk/rntest/android
- /Users/ivandriuk/rntest/android/gradle.properties
- app/build gradle

- cd android
- ./gradlew assembleRelease
- android/app/build/outputs/apk/release/app-release.apk

### building app for android 9
```
dependencies {
  def googlePlayServicesVersion = safeExtGet('googlePlayServicesVersion', DEFAULT_GOOGLE_PLAY_SERVICES_VERSION)
  // Variable lookup order : googlePlayServicesMapsVersion > googlePlayServicesVersion > DEFAULT_GOOGLE_PLAY_SERVICES_MAPS_VERSION
  def googlePlayServicesMapsVersion = safeExtGet('googlePlayServicesMapsVersion', safeExtGet('googlePlayServicesVersion', DEFAULT_GOOGLE_PLAY_SERVICES_MAPS_VERSION))
  def androidMapsUtilsVersion = safeExtGet('androidMapsUtilsVersion', DEFAULT_ANDROID_MAPS_UTILS_VERSION)

  compileOnly "com.facebook.react:react-native:+"
  implementation "com.google.android.gms:play-services-base:+"
  implementation "com.google.android.gms:play-services-maps:+"
  implementation "com.google.maps.android:android-maps-utils:+"

  // ⬇️This line made Gradle sync successfully
  implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
}
```

- maps works only on real device

### useful links
- [debug react native android](https://blog.pusher.com/debugging-react-native-android/)