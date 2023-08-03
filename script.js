let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  
  
  //set pointerEvents for quote-title children to none
  const myQuoteTitle = document.querySelector('#quote-title').children;
  //myQuoteTitle.style.pointerEvents='none';
  for(k=0; k<myQuoteTitle.length; k++){
    myQuoteTitle[k].style.pointerEvents = 'none';
   }
  
  // Part 1
  const changeTitle = function() {
    document.querySelector('#main-title').textContent = 'DOM Toretto Homepage';
    }
    changeTitle();

  // Part 2
  const changeBackground = function (){
  document.querySelector('body').style.backgroundColor = "blue";
  }
  changeBackground();
  
  // Part 3
  const favoriteThings = function(){
  let parent = document.querySelector('#favorite-things')
  console.log(parent);
  parent.removeChild(parent.lastElementChild);
  }
  favoriteThings();

  // Part 4
  const specialTitleFont = function(){
  const specialTitle = document.querySelectorAll('.special-title')
  console.log(specialTitle);
  for(i=0; i<specialTitle.length; i++){
    specialTitle[i].style.fontSize = '2rem';
     }
  }
  specialTitleFont();

//global variables for Part 5 and Part 6
  const pastRacesUL = document.querySelector('#past-races'); //returns <ul> itself
  console.log(pastRacesUL);
const pastRacesLI = pastRacesUL.getElementsByTagName('li'); //returns iterable HTMLCollection of <li> items
  console.log(pastRacesLI);
  
  // Part 5
  const removeChicago = function(){
  for(i=0; i<pastRacesLI.length; i++){
      if(pastRacesLI[i].innerText.toLowerCase()=="chicago"){
        console.log(pastRacesLI[i].innerText +' is a removed child') //output removed child to console
        pastRacesUL.removeChild(pastRacesLI[i]);
     }
  }
  console.log(pastRacesUL); 
  console.log(pastRacesLI); //pastRacesLI will also have 5 items, the same as pastRacesUL
  //although no item has been removed from pastRacesLI 
  //because the contents of pastRacesLI is not cached, it is based on calling getElementsByTagName('li')
  //on pastRacesUL. So the contents of pastRacesUL will affect the contents of pastRacesLI. 
}
removeChicago();

//global variable addCity used in Part 6 and Part 7
const addCity = document.createElement('li');
addCity.innerHTML = `Owusu's City`;

// Part 6
  const addMyCity = function(){  
  pastRacesUL.appendChild(addCity);
  console.log(pastRacesUL)
  }
  addMyCity();

  // Part 7 
  const createNewBlogPost = function(){
  const newBlogPost = document.createElement('div');
  newBlogPost.className = 'blog-post purple';
  
  const h1 = document.createElement('h1');
  h1.innerHTML = addCity.innerText;
  
  const p = document.createElement('p');
  p.textContent = 'Hello World. This is Owusu here.'

  newBlogPost.appendChild(h1);
  newBlogPost.appendChild(p);
  console.log(newBlogPost);
  
  const blogPostsContainer = document.querySelector('.main');
  blogPostsContainer.appendChild(newBlogPost);
  //uncomment to get HTMLCollection of blog posts if desired 
  //const blogPosts = document.getElementsByClassName('blog-post purple');
  }
  createNewBlogPost();

  // Part 8
 const randomQuoteEventHandler = function(){
      const randomQuoteQuerySelector = document.querySelector('#quote-title');
      randomQuoteQuerySelector.addEventListener('click', function(){
        randomQuote();
      });  
 }
       randomQuoteEventHandler();


  // Part 9
 const blogPostsEventHandler = function (){
    const blogPostsClassElements = document.querySelectorAll('.blog-post');
    console.log(blogPostsClassElements); //log out to make sure an HTML collection
    
    for(i=0; i<blogPostsClassElements.length; i++){
      const mouseOutHandler  = blogPostsClassElements[i];
      const mouseEnterHandler = blogPostsClassElements[i];
      const classElementParent = blogPostsClassElements[i];
      console.log(mouseOutHandler); //log to see if collection
        
        const classElementChild = classElementParent.children;
        console.log(classElementChild); //log to see if collection
        
        //inner for loop to set pointerEvents to none for
        //child elements of blogPosts
        for(j=0; j<classElementChild.length; j++){
         classElementChild[j].style.pointerEvents = 'none';
        }
      
      mouseOutHandler.addEventListener('mouseout', function(){
            mouseOutHandler.classList.add('purple');
            mouseOutHandler.classList.remove('red');
      });
      
      console.log(mouseEnterHandler); //log to see if collection
      mouseEnterHandler.addEventListener('mouseenter', function(){
        mouseEnterHandler.classList.add('red');
        mouseEnterHandler.classList.remove('purple');
      
      })
    } //for loop closing
 
}
  blogPostsEventHandler();


});
