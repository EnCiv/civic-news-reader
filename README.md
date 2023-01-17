# Civic News Reader

For users, this is a web app that shows you the latest civic-election-district relevant updates from the civic tech apps that are relevant to them, and allows you to open the update
and use the app from within the civic news reader. You don't have to know all the links to all civic tech apps that are relevant to you, they are all gather here in one place waiting.
And you don't have to check all the civic tech apps for updates, the updates come to you in one place.

For Civic Tech Apps (and their developers :-), you can work on the app and the data, the civic-news-reader brings the users to you.

# Geting started
This project is build using the [civil-server](https://github.com/EnCiv/civil-server). At this time this repo is just an empty template.

We can get started by buidling stories in storybook. The React components will be built in app/components and the stories to show, interact, and test them will be
placed in the stories directory.

node version 16.16 is required.  
I am using [nvs](https://github.com/jasongin/nvs) to make it easy to use different versions of node on different projects.

```
git clone github.com/EnCiv/civic-news-reader.git
cd civic-news-reader
npm install
# go get coffee the install takes a while
npm run storybook
```
## MongoDB

To develope on the server side (not required for storybook above), MongoDB is required. It's possible to do this with a (free) hosted database or with a localy running one. The advantage of hosted is that if you move between local development and cloud deployment like on heroku, the hosted database allows you to access the same data from both places.

### To setup MongoDB hosted (recommended)

Go to these [slides](https://docs.google.com/presentation/d/1HzXSX_fo0qr8ozC9rLGaWc965vM9IGEpCuIx8jmcUxI/present) to setup a free MongoDB Atlas account and database, and create a MONGODB_URI in your .bashrc file

### To setup MongoDB locally

-   on PC Get the [MongoDb Community Server](https://www.mongodb.com/try/download/community) for your system.
-   on Mac do `brew tap mongodb/brew` and then `brew install mongodb-community@5.0`

After it has been installed, use `dbup` to bring up the datbase. It will store the data in a **tmp** directory in your project that is .gitignore'd so it won't get pushed to the repo.
`dbdown` will shut down the database

**Note:** that these scripts for running the database locally will erase the database every time. If there are database recordes that should be made a permanent part of the project, put them in iotas.json.
