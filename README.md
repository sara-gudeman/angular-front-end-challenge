# fe-test

###Feature Requirements:
Build the UI as represented in the mockups included in the “screenshots” folder.
Included are a ’mobile' view and a 'desktop' view, so please think about responsive design in
your solution as well as cross-browser compatibility for the latest versions of major browsers (Chrome, Firefox and IE).

- The 'mobile' view has a menu icon, which when clicked, opens the menu and reveals the 3 menu items.
- The 'desktop' view shows the 3 menu items inline, and the menu icon is not needed.
- Don’t worry about persistence of data entered from the form above.  
- Always consider site speed and accessibility in your solution.
- Consider writing reusable code/component when building this application.

##### Assets
- The icons for the mobile view have been attached for your convenience.
- Font used: http://www.google.com/fonts#UsePlace:use/Collection:Roboto

####Interaction Requirements:
1. In the “Welcome back!” component:
	* a. Clicking yes will bring up a form to enter information about the book (Title, Author, etc)
	* b. Clicking no will close the component
2. When the form from 1a is submitted, populate a new component for that book, and render it on the page.
	* c. Do some simple validation on the content to prevent duplicate entries.

#####Optional: 
1. Add the ability to add reviews and create a star indicator based on those reviews (1 to 5 scale);
2. Add sorting based on different attributes of the data (e.g., book title)

####Technical Requirements:
1. Create JSON representations of the content.
2. Use templates which will provide the markup and populate the content on the page.
3. Identify and use a commonly used breakpoint for your responsive styles.
