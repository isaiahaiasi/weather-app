# Features to be thinking about

- Make sure to add a favicon, the lack of icon is starting to look pretty jank.
- Handle queries that include state and/or country codes (most examples I looked at were not able to serve a result for the search "Seattle, WA").
- the API provides UTC time for the time of calculation, sunrise, and sunset, so it would be really cool to change the color scheme based on if it's night, morning, daytime, or evening.
- API also provides the city's shift in seconds from UTC, so I could display local time as well.
- API provides its own icons, so I could either link to those (tired) or use those to determine which of my own icons to show (wired). I could get even more granular using the tables [listed here](https://openweathermap.org/weather-conditions), but that would probably be overkill.
- Animating SVGs for the weather icons... I just feel like those would be really cool. This probably means inlining them with a special webpack loader, but I'm not sure what else is involved? Theoretically I could also use CSS to make the graphics, but that could be really difficult.
  - svgontheweb.com
  - <object> vs inline
  - animation libraries: snap.svg (js), animate.style (css)
  - for <object> svgs, can link a stylesheet in svg body.
  - how does svg masking work???
- Maybe check the general moon phase (new, waning, gibbous, full) & change icons based on that? Probably overkill again, tbh. Also, _accurately_ calculating moon phases is apparently quite complicated.
