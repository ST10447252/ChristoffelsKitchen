[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y2Ereq0k)
MAST5112
Mobile App Scripting
Student: ST10447252- Angel Khumalo.
Lecturer: Adie Jansen Van Rensburg.
MAST5112-POE-PART 2
Table of Content 
Page 1................................................................................................................................................................................................................................Changes
Page 2....................................................................................................................................................................................Detailed Explanation : App Startup
Page 3......................................................................................................................................................................................Detailed Explanation: Home Page
Page 4....................................................................................................................................................................................Detailed Explanation : Chef Login
Page 5......................................................................................................................................................................................Detailed Explanation: Chef menu
Page 6....................................................................................................................................................................................Detailed Explanation : Chef Modal
Page 7....................................................................................................................................................................................Detailed Explanation: Menu Addition
Page 8....................................................................................................................................................................................Detailed Explanation: Full Menu
Page 9..................................................................................................................................................................................Detailed Explanation: Full Menu Filter
Changes:
Part 1 : The structure for part 1’s submission changed due to the focus of the application, this is due to the misdirection of the app’s intention, things like “order” , “delivery” were unnecessary as this isn’t the focus (‘its not uber eats’).

Key Changes : The application focuses on what the chef has to do as well as focus on the key aspects such as : 
                                         - Predefined list for course types.
                                         - Chef page.
                                         - Adding/Removing dishes.
                                         - No locations.

Design : Using Learner units 1 - 3, core components to create fully-featured user interface, layouts to position components, 

Structure : Again using learner units 1 - 3, applying colour schemes and images to the user interface, The pages will utilise and handle text inputs, using typescript to store data, handle button presses as well as navigation using {react-navigation}.

Design Considerations : Using Animations to improve user experience, user friendly design and precise navigation with clear text, font and size.

Programming logic : This is to ensure that the user of the application can navigate the application with precise programming logic such as : 
                                                 - allowing the program to function via user input
                                                 - allowing the program to handle user response
                                                 - loops
                                                 - logical operates for solving programming problems
                                                 - good programming concepts(data types and clear  declarations)

Detailed Explanation: Startup
The application starts off metro bundler, this is the terminal response to run the application, I will be running the application using expo the toolchain that routes react native non~CLI
In the terminal I run {npx expo start --clear}, we use clear to cleat any cache from the previous build 
Functionality: open’s application on native ios/android device.
When the application starts a splash screen with the restaurants logo as well as the colour of the application will be displayed, this application is using an SDK version of 51.0.0.
Detailed Explanation:  Home Page
The home page is designed, for both the chef and client, The navigation bar on top allows for navigation page to page with clear and creative buttons, the button on the top left is the for the chefs side, the button on the right is for client access for pages such as communication for the chef as well as viewing the menu items that the chef has prepared.
Chef button, navigates to the chefs page where the chef can login and add menu items 
Client button, this navigates to the client login page.
This is a menu card that highlights the chefs menu with the idea of letting clients see what courses are available.
The indicator icon lets the user know that they can scroll horizontally.
The menu button directs the client to the full menu page where items are in detail with each food item and course type.
Detailed Explanation:  Chef Login
The chef login page is a logical step in programming for clarity as well as safety a passage that lets the chef login safely into his section of the application to seamlessly add/remove and make any changes to the menu items.
The back button will take the chef back to the main page this is utilizing the {react-navigation} to navigate between pages.
Christoffel’s Kitchen.
The logo banner welcome the chef to the login page, this is part of user interaction and practicality ( using learner units 1-2).
Functionality: The chef enters their password: because the application does not retain chef info(such as their username) the logical step would be to take in just the password, should the password be entered wrong an alert box is displayed.
Detailed Explanation:  Chefs menu
The chefs menu: The chef requires full control over his menu, allowing flexibility to create personalized menus for clients on a daily basis.
The back button will take the chef back to the main page this is utilizing the {react-navigation} to navigate between pages.
The menu button opens a modal, Add to menu this allows the chef to add his meals to the page and view them
The delete button allows the chef to delete the meal from the menu.
Functionality: The chef will be able to select the course and add to the menu page he will have the option to edit/delete the course if he/she isn’t satisfied with the course added, the course will be added and immediately displayed on the other screens.
Detailed Explanation:  Chefs Modal
The Chefs modal is presented as a modal, a modal is a screen embedded within a scree, below is a clear animation that displays how this works 
{react-native-modal}

The chef will click the     button this will open up a modal, inside the modal the chef can choose from three course types using the {react-native-picker-select}, this utilizes the native ios/android dialog selector, then there are three text inputs where the chef can enter the dish name, description and the price (using the number-pad input type)
The back button will take the chef back to the menu page this is utilizing the {react-navigation} to navigate between pages.
Detailed Explanation:  Menu Addition
The menu addition is part of the modal, it has its own space, this give the user a detailed understanding of how the application navigates.
Selecting the Course Type: The chef uses the {react-native-picker-select}, to select out of three options(starter, main meal and dessert).
Dish name: The chef will be able to add the dish name using the Text Input, the text input will then retain the value (set as a string value), and store that inside the async storage const [ ], this stores the value in an array. 
Description:  The chef will be able to add the Description using the Text Input, the text input will then retain the value (set as a string value), and store that inside the async storage const [ ], this stores the value in an array. 
Price: The chef will be able to add the price of the meal, this uses the text input numpad response to utilise the devices numpad system.
The meals will be displayed: 

Chefs Menu page: The chef will be able to delete/make changes.
Home Page: The card will highlight the meals available.
Full Menu Page: The menu page will display the full page.
Detailed Explanation:  Full Menu
The full menu routes the entire process of all the dishes, because the array is saved as a use context, the application can retain the dishes in one page and display them in multiple pages, this is achieved using the page router using local files {local:angel:khumalo:file:base:router}, this is expo’s way of routing react native use-context to both the internet and connectivity of links.
The back button takes the client back to the home page using {react-navigation}.
The highlight card moves vertically to allow space for the individual cards that have extra information in regards to the meals displayed. the logic is implemented on this page as it is part of the user navigation index structure.
Functionality: The client will be able to use the full menu to their grasp as they can view all types of meals the chef has prepared, the client will also have an option to filter their view, this will allow them to view a selected course type that will only be displayed.
Detailed Explanation:  Full Menu Filter
The full menu will allow the user to filter their meals this is so they can differentiate between all three course types and see how many are available.
When the user clicks this button, the course types will pop-up giving the user access to filter and display only the the course type they would like to view
The default viewing structure is set to all, this will be the viewing that everyone will see and will only change accordingly to the users input.
This section utilises the learning units 2-3 the basic understanding of the users input determines the applications functionality.
Links:
GitHub
https://github.com/ST10447252/ChristoffelsKitchen.git
YouTube:
