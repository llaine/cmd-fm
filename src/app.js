#!/usr/bin/env node
import request from 'request';
import { settings } from './environment';

let usersArgs = process.argv.slice(2);
let gender = usersArgs[0];


request(settings.api.v1.gender_url, (err, response, body) => {
    console.log(response.statusCode);
});