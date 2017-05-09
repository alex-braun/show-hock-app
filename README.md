# show-hock-app

A full stack application allowing users to find concerts/shows by artist, region, or venue.

Users can choose shows they would like to track, and store them in their calendar.

The deployed application:
https://alex-braun.github.io/show-hock-app/

## Tech

front-end: Ember.js
   deployed front-end: https://alex-braun.github.io/show-hock-app/

back-end: Ruby on Rails
   back-end repo: https://github.com/alex-braun/show-hock-rails
   deployed back-end: https://obscure-inlet-58315.herokuapp.com/

I utilized the SongKick API for all concert data.
  https://www.songkick.com/developer

## Database information and Ember Data issues
* `Users` have many `shows` and `shows` have many `users`.
* Users have many `shows` through their `calendars` (each user's tracked event is a calendar).
* Users can create a show if it doesn't exist in the db, but once it has been created a user only destroys their associated `calendar` when untracking, while the `show` remains.
* Each show has many `performers`.

If a user would like to track a show and the show does not exist yet:
*`POST => shows`, validating an `event_id` attribute.  `event_id` is the songkick event id.
* `POST => calendars`.
* `POST => performers`.

* If the show already exists (the `event_id` mentioned above from the above POST matches an 'event_id' in the db), a `302 found` response is returned, containing the show data. then:
 * `GET` that same `show`, as Ember Data `belongsTo/hasMany` needs to see a returned object of the InternalModel class, and Ember error responses are not returned in such a manner.
 * `POST => calendars`,
 * `GET` => Get the `show` yet again so that the store has the updated calendars/users.  Otherwise, I found Ember Data makes GET requests to ALL of the calendars associated with the show, ie `show.get('calendars').pushObject(calendar)` does not work how I expected it to.

## Other stuff

User location is determined by client IP info.  I use `https://ipinfo.io/json` in a client-side geo-location service.

If the user would like to specify a different location, they can select `change location` and set a preferred locale to browser cookies.

Calendar events will take on a past event label post event date, and the calendar event will be removed completed 3 days after the event date.  This is achieved via Rails rake tasks.

Alex Braun 2017.
