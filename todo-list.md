# Features to be thinking about

- Handle queries that include state and/or country codes (most examples I looked at were not able to serve a result for the search "Seattle, WA").
- the API provides UTC time for the time of calculation, sunrise, and sunset, so it would be really cool to change the color scheme based on if it's night, morning, daytime, or evening.
- API also provides the city's shift in seconds from UTC, so I could display local time as well.
- API provides its own icons, so I could either link to those (tired) or use those to determine which of my own icons to show (wired). I could get even more granular using the tables [listed here](https://openweathermap.org/weather-conditions), but that would probably be over-kill.
