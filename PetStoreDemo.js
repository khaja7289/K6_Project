import http from 'k6/http';
import { sleep,check } from 'k6';

export const options = {
    vus: 1,
    duration: '3s',
};
export default function() {
    const response=http.get('https://jpetstore.aspectran.com/');
    // console.log(response.status)
    // console.log('Response status: ' + response.status);
    check(response, {
        'is status 200': (r) => r.status === 200,
    });
    console.log('Response status: ' + response.status);
    console.log('Response body: ' + response.body);
    console.log("Body Length : " + response.body.length);
    console.log("Response Time : " + response.timings.duration);
    console.log('Response headers: ' + JSON.stringify(response.headers));
    console.log('Response cookies: ' + JSON.stringify(response.cookies));
    console.log('Response timings: ' + JSON.stringify(response.timings));
    console.log('Response size: ' + response.body.length + ' bytes');
    console.log('Response time: ' + response.timings.duration + ' ms');
    console.log('Response content type: ' + response.headers['Content-Type']);
    console.log('Response content length: ' + response.headers['Content-Length']);
    console.log('Response content encoding: ' + response.headers['Content-Encoding']);
    console.log('Response content language: ' + response.headers['Content-Language']);
    console.log('Response content location: ' + response.headers['Content-Location']);
    console.log('Response content disposition: ' + response.headers['Content-Disposition']);
    console.log('Response content range: ' + response.headers['Content-Range']);
    console.log('Response content security policy: ' + response.headers['Content-Security-Policy']);
    console.log('Response content type options: ' + response.headers['X-Content-Type-Options']);
    console.log('Response content length: ' + response.headers['Content-Length']);

    if (response.status !== 200) {
        console.error('Request failed with status: ' + response.status);
    }
    if (response.status === 200) {
        console.log('Request succeeded with status: ' + response.status);
    }
    sleep(1);
};