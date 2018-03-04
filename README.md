# Timestamp Convert Time JS
Convert Timestamp to range time { days, hours, minutes, seconds, milliseconds }

___
## Installation
#### วิธีติดตั้ง
```bash
npm install convert-time --save
```
##### or
```bash
yarn add convert-time
```
## Usage
#### วิธีการใช้งาน

#### Javascript ES5

```javascript
const timeStamp = require('convert-timestamp') // for ES5
let startTime = new Date().getTime()
let endTime = new Date().getTime() + 30 * 60 * 1000 // 15 minutes
let range = timeStamp.diff(startTime, endTime)
console.log(range) // { days: 0, hours: 0, minutes: 30, seconds: 0 }
```
