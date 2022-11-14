<img src='./final_product.png'/>

# Context:

---

This project is a teaching aid for a presentation about "React Native." Specifically, I teach the fundamentals of React Native through the creation of a workout and diet tracking application.
The "React Native" framework is built with the use of the "React JS" library at its core, so there a lot of potentially new concepts to cover. In this presentation I teach how to easily create a new React Native application, as well as give it the ability to fulfill most of the major requirements expected from a workout / diet tracking application using the following API's (and more, if time permits):

        Geolocation API: https://reactnative.dev/docs/0.63/geolocation
        AsyncStorage API: https://reactnative.dev/docs/asyncstorage
        Fetch API: https://reactnative.dev/docs/network
        Alert API: https://reactnative.dev/docs/alert
        Background Timer: https://github.com/ocetnik/react-native-background-timer#readme

# DOCS:

---

- https://github.com/egrep6021ad/ReactNativeFundamentals/blob/master/ReactNative.pdf

OR

- https://docs.google.com/presentation/d/1xkL1z9Y9wWIdfnLYfAYGJFkhvp7CjUOqijD_8PYPHhE/edit?usp=sharing

# Environment Setup:

---

PLEASE USE THE FOLLOWING LINK TO PROPERLY SETUP THE REACT NATIVE ENVIORNMENT ON YOUR OS:
https://reactnative.dev/docs/environment-setup

This guide contains two options, "Expo Go Quickstart" and "React Native CLI Quickstart". Please follow the instructions in the "React Native CLI Quickstart" tab.

Then choose the OS you are using, "macOS", "Windows" or "Linux"

After that, you need to install the needed dependencies for both target OS's, "iOS" and "Android".
This is things like Node, Watchman, Xcode, Android Studio, and more (dependent on development OS and target OS).

The steps involved in setting up the React Native environment are different depending on if you are using a Mac or a Windows computer and if you want to run the iPhone version or Android version of the demonstration application. In either case, THESE STEPS ARE CRITICAL. In both cases you will need "Node" (version 16 or greater) at a minimum.

# Execution Instructions:

---

1. Open the whole "ReactNativeFundamentals" folder in VS code.

Android:

2. In VS code, navigate to the "AndroidManifest.xml" (ReactNativeFundamentals > android > app > src > main > AndroidManifest.xml)

3. Replace the text "YOUR API KEY HERE" with your own google maps enabled API key

4. From the "ReactNativeFundamentals" directory, open the directory "android" in Android studio

5. Press the play button in Android Studio to run the app

6. In VS code press "command + j" to open a new terminal

7. In the terminal type the command "npx react-native run-android"
   (This will run the Metro Server / send bundle to Android emulator)

Iphone:

2. In VS code press "command + j" to open a new terminal

3. Option 1: - Type the command "xed ios" - This will open the ios folder in Xcode - Press the xcode play button to run the app
   (This will start Metro Server automatically)
   </br>
   Option 2: - Type the command 'npx react-native run-ios --simulator="iPhone 14"'
   (Most common method)

<i><b> Either scenario, a terminal should open to run the "Metro Server" This needs to stay open to see live updates and changes in the app while developing. Press "r" in the terminal window at anytime to reload the app.</b></i>

# Troubleshooting:

---

If you successfully run the application for the first time, and navigate to the workout screen and get a location error... just restart the application. This is because you did not accept "location permission" before it tried to gather location information. Restarting the application will allow it to get location information at the correct point in the application lifecycle, and properly load the workout screen.

If you get errors when trying to initially run the application on either Android or iPhone, first go to VS code and ensure that the "nodemodules" directory is in the main project's (ReactNativeFundamentals) directory. If it is not, you need to open a new terminal in the "ReactNativeFundamentals" directory and run the command "npm install".

If you get errors when trying to initially run the application on either Android or iPhone, and you have followed all the steps in the "Environment setup" guide, AND the "nodemodule" directory is in the projects main directory, try deleting the entire "nodemodules" folder, then open a new terminal in the "ReactNativeFundamentals" directory and run the command "npm install", this will re-install the node packages needed based on the package.json file.

If you are using a Mac and get the pop-up warning saying: "“fsevents.node” cannot be opened because the developer cannot be verified" upon downloading and opening the application in VScode, please just ignore it and click "cancel" every time it pops up. DO NOT CLICK "move to trash".
(Trusting the application folder, as well as its parent folder should rid of this pop-up)

If you are getting warning's related to fsevents.node” cannot be opened because the developer cannot be verified" and you are clicking "cancel" instead of "move to trash" and continue to run the command 'npx react-native run-ios --simulator="iPhone 14"', you will have a successful launch of the app, but the Metro Server is likely not running. You will see a waning saying "launchPackager.command” cannot be opened because it is from an unidentified developer". Just click "OK" and allow the application to fully launch. The emulator will then show the error "No bundle URL present". Navigate back to the terminal in VScode, in the main project directory and type the command "npx react-native start". Once the Metro Server is running in the terminal, go back to the application and click the "reload" button at the bottom the screen. This will link the running application with Metro server, and correctly run the application.

Common errors displayed in the terminal or debugger when trying to execute the application can often be found / solved by typing the error message directly in Stack Overflow. In this case, these errors are almost guaranteed to be related to the setup of the environment and the link: "https://reactnative.dev/docs/environment-setup", should be referenced.
