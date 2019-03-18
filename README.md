## react-native-maps
"react-native-maps": "^0.23.0"

cd rntest
npm install react-native-maps --save
react-native link react-native-maps
react-native run-ios
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/idriuk2/rntest.git
git push -u origin master

### successfull sync
[issues/2695](https://github.com/react-native-community/react-native-maps/issues/2695) 

добавить в node_modules/react-native-maps/lib/android/build.gradle
// This line made Gradle sync successfully
implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"

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
[maps documentation](https://developers.google.com/maps/documentation/android-sdk/signup)
[google console](https://console.cloud.google.com/apis/credentials?project=rntest-234913&supportedpurview=project)
errors in simulator console with ``` <cert_fingerprint>;<package_name> ```
restrictions for key (android, cert fingerprint, package)
enable google maps for project