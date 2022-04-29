const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/global/movie.list.page');
const Moviepage = require('../page-objects/global/moviepage');

const pages = {
    home: HomePage
}

/*Given(/^I am on the (\w+) page$/, 
    async (page) => await pages[page].open());

And(/^on the navbar I search "(\s+)"$/, (movie)=>{
    NavBar.searchBar.searchText(movie)
})

When(/^on the page I select (\w+)$/, 
    async () => {
      await MovieList.movieName();
    })*/

Given(/^I am on the (\w+) page$/,
    async (page) => await pages[page].open());

When(/^on the navbar I select category "(All|Titles|TV Episodes)"$/,
    async (category) => await NavBar.searchBar.selectCategory(category));

When(/^on the navbar I search "([^"]*)"$/, (movie) => {
    //   MovieList.rowHyperlink(movie);
    NavBar.searchBar.searchText(movie)
});

When(/^on the page I select "([^"]*)"$/,    //"(\w+)"
    async (name) => {
        await MovieList.movieName(name);
    })


Then(/^I should see the director "([^"]*)"$/,
    async (name) => {
        const { directorName } = Movie;
        await directorName.waitForDisplayed({
            timeout: 2500,
            timeoutMsg: 'The director name was not displayed'
        });
        const text = await directorName.getText();
        expect(text).toMatch(name);
    });

Then(/^And  I should see the star "([^"]*)"$/,
    async (name) => {
        const { starName } = Movie;
        await starName.waitForDisplayed({
            timeout: 2500,
            timeoutMsg: 'The star name was not displayed'
        });
        const text = await starName.getText();
        expect(text).toMatch(name);
    }
)