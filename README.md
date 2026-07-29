# K6_Project

## Today’s Learnings with K6

- Learned how to create basic K6 load test scripts for API testing.
- Understood the importance of defining requests, response checks, and test scenarios.
- Explored how to use thresholds to validate performance expectations.
- Learned that K6 can be used for smoke, load, and stress testing.
- Practiced running tests and reviewing results to understand application behavior under load.

## Project Files

- `PetStoreDemo.js`: Main K6 script for API performance testing of the PetStore demo.
- `K6_dummy.js`: Example or placeholder script for additional K6 test cases.

## How to Run

1. Install K6 if it is not already installed.
2. Run the demo script with:

```bash
k6 run PetStoreDemo.js
```

3. Review the output and check the results for request success rates and thresholds.

## Logs Used in `PetStoreDemo.js`

The script uses `console.log` and `console.error` statements to capture response details and execution flow:

- `console.log('Response status: ' + response.status)` logs the HTTP status code.
- `console.log('Response body: ' + response.body)` logs the full response body.
- `console.log('Body Length : ' + response.body.length)` logs the response payload size.
- `console.log('Response Time : ' + response.timings.duration)` logs the request duration.
- `console.log('Response headers: ' + JSON.stringify(response.headers))` logs all response headers.
- `console.log('Response cookies: ' + JSON.stringify(response.cookies))` logs response cookies.
- `console.log('Response timings: ' + JSON.stringify(response.timings))` logs detailed timing metrics.
- Additional logs extract header fields such as `Content-Type`, `Content-Length`, `Content-Encoding`, `Content-Language`, `Content-Location`, `Content-Disposition`, `Content-Range`, `Content-Security-Policy`, and `X-Content-Type-Options`.
- `console.error('Request failed with status: ' + response.status)` logs an error when the response status is not 200.
- `check(response, { 'is status 200': (r) => r.status === 200 })` records pass/fail validation results in K6 summary output.

These logs are used during test execution to debug issues, verify response payloads, and confirm successful API responses.