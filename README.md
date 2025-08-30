# week_03_assignment

What requirements did you achieve?
I managed to achive the requirements of using the provided apo to have upgrades that cant update the cookie count how ever I struggeled a lot with getting it to work and used some tutorial videos jsut to get basic out line of the cookie cliker working before I tried to tackle the issues I had with the api. the tutorials I used to give me an idea on what to do are https://www.youtube.com/watch?v=WxdF5D7WFVY and I had a look at this codepen some one made to give me a visual of what a simple cookie clicker looked like https://codepen.io/marisdu/pen/ZJKzRG.
as I stated above I had a lot of difficulty with getting the functions to work with the api and ended up asking chatGpt for some advice which lead me to swapping the const cpsValue = number (stats.cps) to a parseFloat as that may have been causing some issues and it also sugested the reson the auto clicker was not initially showing a change when purchased was due to the cps value orgiginally being labled upgrade.cps rather than stats.cps as such the function failed.

I also initially forgot to set the fetch as async which also lead to issues.

I tried to ensure that I used appropriate functions to make sure the code worked effectivly. and used event listeners to mae sure the upgrades feature worked I implemented the local storage to all the player to be able to leave and revisit the game this part was possibly the most straight forward outside of the initial set up.
I used the setInterval to increase the cookiecount every second once the auto clicker has been purchased this also increases the cps(cookies per second) counter as well.

while i believe I managed to meet each requirement i struggled a lot the the implementation of the Api and as referenced above had to go to chatgpt to try and troubleshoot my issue as I didnt understand the best way to describe my issue. going forward I will aim to further increase my understanding of API's as this showed me that I lack a good enough understanding to use them in even a basic fashion.
