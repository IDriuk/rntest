### eact-native-maps
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
