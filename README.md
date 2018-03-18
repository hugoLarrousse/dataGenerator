# DataGenerator
The idea is to provide Data exactly how the user want it.

ex : "I want 100 json with a name and a surname"
## TO DO

### First Step
- Open question as starting point
  * [ ] which data I want to generate automatically
  * [ ] should I let the user choose what he want?
  * [ ] create "Type of data" and expose to the user?
  * [ ] should I use external api to get data?
  * [ ] what is the point of all of this?
  * [ ] depends on the language?

- How develop the bot?
  * [x] technology?
  * [x] time per week?
  * [ ] alone?


### What I want?
#### First iteration :
- allow the user to choose basic data (name, surname, city) following the *uinames* API 
- type available : name, surname, country, age? , more info (don't controlled
- + number of document you want
- create a simple interface ( only 1 server who display html/js) to let the user choose what it wants, send him back data directly on a second page

### Second Iteration :
* Create our own db with own data (stop depending to an api)
* create types or data to customize as much as possible the data generate(name, surname, int, ...)

### Technology
I want a nodeJS app with a front
* Back-end : nodeJS + Express
* Front-end: html/css/javascript (typically a survey + an extract zone + download ?)

### How much time per week?
15 minutes per week

### Alone? 
alone for now
