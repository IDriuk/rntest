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

