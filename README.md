# Polls And Votes

Application that user can list, search for more items, enter item pages and share response by email!

## Authors

- [@guilhermealvestavares](https://www.github.com/guilhermealvestavares)
- [Linkedin](https://www.linkedin.com/in/guilhermealvestavares/)

  
## 🚀 About Me
Since my first contact with development, I have always a very interest to develop layouts, experiences and see analysis and user behavior. In the college, I've always been skewed to code in the back-end, but my desire is to have contact with the final user, the usability and others datas.

Among my experience, used diverse technologies: Web development (HTML, css and pré processors, JS and tests auto, React and other technologies used in front-end development.

In my current experience, we think a lot about performance, user experience and best practices in write our codes.

Technologies used: HTML (Jekyll), CSS (Stylus, emotion, styled-components, Bootstrap), Javascript (React, react-testing-library, jQuery), Test Automation (Jest, react-tests) (Unit Tests, TDD) Gatsby, Git, Google AMP

Platforms used: Google Optmize, Github, Jira

  
## Run

to run the project:

```bash
  npm install && npm start
```

the application to open at 
```bash
  http://localhost:3000/
```

  
## Features

- Popup error case request fail
- Component List (Search items for search bar, search items for url, load more items and click in items)
- Click items page (With react router)
- Share screen for email
- Online and offline toggle



  
## Stack

- React (and hooks)
- Styled components
- External libs (lodash, react-detect-offline, react-router and axios)
- Postman



  
## Uses

**Case 1:**

*The user digit in the url:*

```bash
/questions/7
```

should return an item page with id 7


**Case 2:**

*The user digit in the url:*

```bash
/?filter=lorem
```

should fill the searchBar and return datas that matches with lorem *(the filter api not working)*

**Case 3:**

*The user lost the connection:*


should show messageError connection

**Case 4:**

*The user fill email adress*


should show request message status (sucess or error)



## Components

- AlertError
- List
- Offline
- SendEmail


## Pages

- PageItem
- Home
