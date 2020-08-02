### Overview

**Void's Virtual Grimoire** is a digital version of parts of my Grimoire that I have deemed appropriate to share publicly. It consists of correspondences, recipes, DIY instructions, and resources I have found or created for use in my craft. Many of the items listed are of a mundane nature and may be useful to anyone, not just spiritual people. 

The project will make use of React.js, React Router, Axios, Airtable and the Airtable API in order to build an interactive webapp. I will be taking a mobile-first approach, but I do intend to try to make it look aesthetically pleasing and interesting on all devices, with visual assets suited to a Grimoire. 

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

The **Void's Virtual Grimoire** MVP will focus on creating a web application that works on small screen sizes, mainly smartphones, without looking or feeling clunky. The application will be built in React.js and it will use Axios requests to GET content from and POST new content to its Airtable database. The content will be organized into categories, which can be used as search criteria or to view only certain types of content.

The project will utilize at least 6 components, some of which may for different pages while others may be reusable code. The project will utilize React Router to link the page components together.

<br>

#### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                                       |
| :--------------: | :---------------------------------------------------------------- |
|   React Router   | _Used to link pages together in the application._                 |
|   Axios          | _Used to interface with an external API, performs CRUD commands._ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

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

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ NavBar.jsx
      |__ Search.jsx
      |__ Posts.jsx
      |__ ViewPost.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will appear at the top of the page and contain the NavBar and my logo._               |
|  NavBar      | functional |   n   |   n   | _The NavBar will provide links to each category, the home page, and contain the Search bar._       |
|   Search     |   class    |   y   |   n   | _The Search component will provide a way to search the content saved to the Airtable database via either keyword or category.._
|   Posts      |   class    |   y   |   n   | _The Posts component will render the posts using flexbox. It will display either all posts or Search results in order of most recent to oldest._      |
| ViewPost     | functional |   n   |   y   | _Takes props to render a single post with all its info._                 |
|    Footer    | functional |   n   |   n   | _The footer will contain contact info and link back to my portfolio._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |      ---      |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |      ---      |     TBD     |
|
|
|
|
| TOTAL               |          |     - hrs      |      ---      |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.