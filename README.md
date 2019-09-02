# AccessControl

This hybrid application allows people to register entries and exits on a location. It allows you to record every entrance and exit.

## Quickstart
#### Install
At the root of the project run

```$ npm install```

#### Deploy

Run ```$ ionic serve``` to start the application. 

If you want to create a production application file refer to the [ionic documentation](https://ionicframework.com/docs/publishing/progressive-web-app).

## Usage

When the application starts you have to select an access point to be able to register an entry or an exit.

When the user fill the entry or exit form, this is send to an API on a back-end server to further validate and sanitize the data, and then if it's all correct it stores the data in the database.

(The back-end server is not implemented in this repository)

This application has the minimum functionalities to be able to have an access control of your visitors. You can take this as a base to further develop more features to meet your needs.
