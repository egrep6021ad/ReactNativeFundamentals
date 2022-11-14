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

- https://github.com/egrep6021ad/ReactNativeFundamentals/blob/master/React%20Native.pdf

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

## Execution Instructions:

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
