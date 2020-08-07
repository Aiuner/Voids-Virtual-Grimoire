## Overview

**Void's Virtual Grimoire** is a digital version of parts of my Grimoire that I have deemed appropriate to share publicly. It consists of correspondences, recipes, DIY instructions, and resources I have found or created for use in my craft. Many of the items listed are of a mundane nature and may be useful to anyone, not just spiritual people. 

The project will make use of React.js, React Router, Axios, Airtable and the Airtable API in order to build an interactive webapp. I will be taking a mobile-first approach, but I do intend to try to make it look aesthetically pleasing and interesting on all devices, with visual assets suited to a Grimoire. 

<br>

### Wireframes

![Mobile Wireframes](https://media.discordapp.net/attachments/447199538105810945/739826698970988604/image0.jpg?width=681&height=908)

- Displays four wireframes for the mobile version. Desktop will look very similar.

<br>

### MVP

The **Void's Virtual Grimoire** MVP will focus on creating a web application that works on small screen sizes, mainly smartphones, without looking or feeling clunky. The application will be built in React.js and it will use Axios requests to GET content from and POST new content to its Airtable database. The content will be organized into categories, which can be used as search criteria or to view only certain types of content.

The project will utilize at least 6 components, some of which may for different pages while others may be reusable code. The project will utilize React Router to link the page components together.

<br>

#### Goals

- _Create an interactive webapp to display content sourced from an Airtable database._
- _Utilize React.js to make at least 6 components which will be used to collect and display information from the database._
- _Follow a mobile-first approach to make an intuitive webapp._
- _Navigate objects returned from the Airtable API via axios requests._

<br>

#### Libraries

> Defines Libraries used.

|     Library      | Description                                                       |
| :--------------: | :---------------------------------------------------------------- |
|   React Router   | _Used to link pages together in the application._                 |
|   Axios          | _Used to interface with an external API, performs CRUD commands._ |

<br>

#### Data

> Defines APIs used.

|     API      | Quality Docs? | Website        | Sample Query                            |
|  :--------:  | :-----------: | :------------- | :-------------------------------------- |
| Airtable API |      yes      | _airtable.com_ | _https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201/recoCi3kPqFyptlDm_ |

_Example Response_
```
{
    "id": "recoCi3kPqFyptlDm",
    "fields": {
        "Categories": [
            "recipe",
            "herbs",
            "beverages"
        ],
        "Title": "Elderberry Mint Sun Tea",
        "Materials or Ingredients": "- 1/4 cup of dried mint leaves\n- 1/2 cup of crushed dried elderberries\n- 2 Tbsp of dried orange or lemon peel\n- 1 quart of pure filtered water\n- A con...",
        "Directions": "- Add the ingredients in a large tea bag or infuser. If you do not have either of these, you can skip this step. You will have to strain out the ingre...",
        "Text": "Sun Tea is a fun little treat to make during the summer, where you can use the heat of the sun to steep the herbs. \n\nYou can use any herbal blend you ..."
    },
    "createdTime": "2020-08-02T19:46:54.000Z"
}
```

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ styles
      |__ images (not contained in a folder)
|__ components/
      |__ FixLists.jsx
      |__ Footer.jsx
      |__ NavBar.jsx
      |__ NewPost.jsx
      |__ Posts.jsx
      |__ Search.jsx
      |__ ViewPost.jsx
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| FixLists     | class      |   n   |   n   | _Reusable function to correct formatting error with retrieving lists from airtable._ |
| Footer       | functional |   n   |   n   | _The footer will contain contact info and link back to my portfolio._ |
| NavBar       | functional |   y   |   y   | _The NavBar will provide links to each category, the home page, and contain the Search bar. It will appear in the page Header in app.js._       |
| NewPost      | functional |   y   |   n   | _Used to create new posts to the airtable. Has its own page._               |
| Posts        |   class    |   y   |   y   | _The Posts component will render the posts using flexbox. It will display either all posts, some posts or Search results in order of most recent to oldest depending on the pathname._      |
| Search       |   class    |   y   |   y   | _The Search component will provide a way to search the content saved to the Airtable database via keyword. Searches only one field in the content._ |
| ViewPost     | functional |   y   |   n   | _Takes params to render a single post with all its info._                 |

<br>

#### Component Estimates

>Original timetable for this project.

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------  | :------: | :------------: | :-----------: | :---------: |
| Header Section            |    H     |     <1 hr      |     <1 hr     |    <1 hr    |
| NavBar                    |    H     |     <1 hr      |      1 hr     |   1.5 hrs   |
| Search                    |    -     |     -----      |      ---      |     TBD     |
| - Set Up Search functions |    M     |     2 hrs      |     2 hrs     |   3.5 hrs   |
| - Set up Axios requests   |    M     |     6 hrs      |     2 hrs     |   5.5 hrs   |    
| Posts                     |    -     |     -----      |      ---      |     TBD     |
| - Set Up Axios request    |    H     |     6 hrs      |     4 hrs     |   9.5 hrs   |
| - Render data to the DOM  |    H     |     2 hrs      |     2 hrs     |  11.5 hrs   |
| ViewPost                  |    H     |     2 hrs      |      1 hr     |  12.5 hrs   |
| Footer                    |    L     |     <1 hr      |     <1 hr     |    13 hrs   |
| Add to airtable           |    M     |     6 hrs      |     3 hrs     |    16 hrs   |
| FixLists                  |    L     |     <1 hr      |      1 hr     |    17 hrs   |
| Clean Up Code/Components  |    M     |     2 hrs      |      1 hr     |    18 hrs   |
| Styling                   |    M     |     8 hrs      |     8 hrs     |    26 hrs   |
| TOTAL                     |   ---    |    36 hrs      |      ---      |    26 hrs   |

<br>

#### Helper Functions

> Section to document all helper functions– generic functions that can be reused in other applications.

|  Function    | Description                                |
| :--------:   | :----------------------------------------- |
| FixLists | _Corrects error with retrieving data from airtable where lists become large blocks of texts._ |

<br>

### Post-MVP

>Potential additions to the project.

- _Add user account and auth capabilities._
- _Show thumbnails for image embeds on posts._
- _Change over the post layout to a Masonry style layout, (i.e. Pinterest.)_

<br>

***

## Project Delivery

### Code Showcase

This code handles changing the url used for post axios requests based on which part of the site you're on. It's a neat little way that allows me to reuse the Posts component instead of making a different component to do the same thing on each path.

```
  let url = null;
  if (window.location.pathname === "/") {
    //shows most recent 7 posts in order of newest to oldest
    url = "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?maxRecords=7&view=Grid%20view&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
  }
  else if (window.location.pathname === "/posts") {
    //shows all posts in order of most recent
    url = "https://api.airtable.com/v0/appVtcDvltW4WweAs/Table%201?view=Grid%20view&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc";
  }
  else if (window.location.pathname === "/search_results") {
    //this url is passed around from the Search component's generated search url
    url = props.searchurl;
  }
  else { //error handler for url
    console.log("Error: The Posts component has been called but I don't know what to do for this pathname.")
  }```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.