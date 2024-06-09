DESCRIPTION:
Android Automation Suite for teamrh fitness sample app
    In this framework, I have used Appium + Webdriver.io + Javascript + Mocha

INSTALLATION:
-Clone from github directory to your prefered location
-Start your IDE (I used VSCode)
-Open the extracted folder

FOLDER STRUCTURE:
Most important folder/files details below:
\test\specs\teamRH-Android-Home.specs.js - This contain all the testcases that have been automated.
Package.json- This contains all dependencies that have been installed.
app folder- apk is located here
wdio-config.js- This contains all the configuration required to run the test, pls change capabilities details to whatever device you will be using.

RUNNING THE TESTS:
Once all dependencies have been successfully installed,appium and emulator running, use the comment below:
-npx wdio  -This will run the wdio.config.js

TEST Cases Covered:
1-user click on the first button
2-user get the title of the second button
3-user get the description of the second button
4-user check the title of all button on the screen
5-User scrolls to the bottom of the screen

WHAT IMPROVEMENTS TO MAKE IF I HAD MORE TIME:
1-Automate more test cases
2-Introduce screen object model
 -I will create a new class for the selector for each screen and replace all the long selector in teamRH-Android-Home.specs.js with the shorter name given to the function.
3-Implement proper reporting
4-Have Utility folder to handle all helper related functions that are not part of the screen objects
5-Have Data folder to handle all test related data that will be used eg documents, images, random data etc


ASSUMPTIONS:
I am assuming user has their system already setup for mobile automation, if not pls install the following and set environment variable and path:
-Node JS
-Appium
-Appium Doctor(not mandatory)
-UIautomator 2
-Java JDK
-Visual Studio

