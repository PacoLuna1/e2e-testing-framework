const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/global/movie.list.page');
const Movie = require('../page-objects/global/movie');
const pages = {
  home: HomePage
}


Given(/^I am on the (\w+) page$/, 
async (page) =>{ 
        await pages[page].open();        
    })

When(/^on the navbar I search "([^"]*)"$/, async (movie)=>{
    await NavBar.searchBar.searchText(movie)
});

Then(/^on the page I select "([^"]*)" movie$/, 
    async (name) => {
    await MovieList.selectMovie(name);
})

Then(/^I should see that the ranking is "([^"]*)"$/, 
    async (name) => {
    const { rankingMovie } = Movie;
    await rankingMovie.waitForDisplayed({
        timeout: 2500,
        timeoutMsg: 'The ranking was not displayed'
    });
    const text = await rankingMovie.getText();
    expect(text).toMatch(name);
    });