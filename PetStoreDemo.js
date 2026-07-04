import http from 'k6/http';
import { sleep,check } from 'k6';

export const options = {
    vus: 2000,
    duration: '30s',
};
export default function() {
    const response=http.get('https://jpetstore.aspectran.com/');
    // console.log(response.status)
    console.log('Response status: ' + response.status);
    check(response, {
        'is status 200': (r) => r.status === 200,
    });
    if (response.status !== 200) {
        console.error('Request failed with status: ' + response.status);
    }
    if (response.status === 200) {
        console.log('Request succeeded with status: ' + response.status);
    }
    sleep(1);
};