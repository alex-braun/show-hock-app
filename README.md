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

Users have many shows, through calendars (inner join).
Shows have many performers.
Calendars belongTo users, shows.

If a user would like to track a show and the show does not exist yet:
 POST => shows, validating again an `event_id` attribute.  This attribute is the link between songkick and my API.
 POST => calendars,
 POST => performers.

If the show already exists (`event_id` from POST matches in the db), a 302 found response is returned, containing the show data, then:
 GET that same show (Ember Data `belongsTo/hasMany` needs to see a returned InternalModel class, or it WILL NOT allow you to use the error response data to POST to calendars.
 POST => calendars,
 GET => Explicitly get the show yet again so that the store has the updated calendars/users.  Otherwise, I found ED makes GET requests to ALL of the calendars associated with the show if I wrote something like  (show.get('calendars').pushObject(calendar)).

## Other stuff

The calendar filters past events, and calendar dates are removed 3 days after they occured.

User location is determined by client IP info.  I used `https://ipinfo.io/json` in my geo location service.

If the user would like to specify a different location, they can select `change location` and set a preferred locale to browser cookies.

Calendar events will take on a past event label post event date, and the calendar event will be removed completed 3 days after the event date.  This is achieved via Rails rake tasks.

Alex Braun 2017.
