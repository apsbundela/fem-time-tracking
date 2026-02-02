# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Desktop](desk.png)
![Mobile](/mob.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

🔴 Issue 3 Image alignment hack
.tck-category-img img {
  margin-left: auto;
}


This works, but it’s fragile.

Better:

.tck-category-img {
  display: flex;
  justify-content: flex-end;
}

🔴 Event Propogation -> event target -> event current target

🔴 event.target.dataset ---> is object of {} all data attribute of current dom.


🔴Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:1:1)

🔴eclipse Image was resizing on screen changes

PENDING 03 FEB

- OPTIMIZATION
- REVIEW 