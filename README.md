# Web Scraper
1. In a git branch, write a script that will scrape the content of three websites that you define and saves them on the local disk as .html pages. 
2. Branch Name: scraper
3. Checkout the branch, navigate the the api folder and run `npm run start` from the command line. node v12.16.3 was used.

# API
1. In a second branch, convert your script into a rest API that can be passed a url and return the homepage content as a string
2. Branch Name: api
3. Checkout the branch, navigate the the api folder and run `npm run start` from the command line. node v12.16.3 was used.
4. Access using `localhost:5000` or whatever port you specified in the .env file.
5. Make a request using query parameters such as: `http://localhost:5000/api/scrape?website=https://www.google.com/`
6. **Note:** only the homepage will be returned if the website argument is: `https://www.google.com/query/test/alpha`, only `https://www.google.com`'s html will be returned.

# UI
1. In a third branch, build an interface with a text box that accepts one or more urls, and a button to submit the form. Use your api from step 2 to display the content of each url as a raw html string in a results area of the interface. I should be able to tell which url corresponds with which html string. 
2. Branch Name: ui
3. Checkout the branch, navigate the the **ui** folder and run `npm run start` from the command line. node v12.16.3 was used.
4. Checkout the branch, navigate the the **api** folder and run `npm run start` from the command line. node v12.16.3 was used.
5. **Note:** Both the API and UI must be running to use the ui successfully.
