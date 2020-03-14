# TurkeySuperLeagueStandingsApp
Turkey Super League Standings Android and IOS app. Written with React Native

## Server Side
This project is using [XnCN's repo](https://github.com/XnCN/superligpuandurumu) to get Super League data.
Upload all files to hosting and create cron job to run CreateJson.php. After do this, you will see new file in hosting called cache.json.
I created Json file because if application request directly get data, your server will be highly load.

## Application Side
Open project directory in terminal and just type npm install.
Don't forget to change remote host in app.js

<img src="https://github.com/ugurrdemirel/TurkeySuperLeagueStandingsApp/blob/master/Screenshot_1573516923.png" width="540" height="960"/>
