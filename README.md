# OLA2 - System Quality

### Made by

## Objective of assignment: 
Students will build a simple REST API, implement tests for its endpoints, ensure code 
coverage, and conduct basic performance testing. This will involve using tools like 
HTTP files, Rest Clients, and JMeter (or similar). Additionally, students will perform 
basic benchmarking of their API’s performance.

## Deliverables: 

### Source code for REST API
We used Javalin to implement a simple REST API - all the code is found [here](src/main/java/com/kfisk).
The application is a simple prototype of a task manager, providing endpoints to cover the basic CRUD operations needed for a task.

### Unit tests, integration tests and HTTP test files
Unit tests and integration tests are found [here](src/test/java/com/kfisk/AppTest.java) and is being tested up against a test SQLite DB, located [here](src/test/java/com/kfisk). The test DB doesn't have any data, as data is initialized on a per test level. The test DB therefore only contains the metadata and schema needed for a Task table reflecting the [Task class](src/main/java/com/kfisk/Task.java).

There is automated endpoint tests located [here](src/test/java/com/kfisk/HTTPEndpointTest.java). These tests also uses the test DB, however for this case the API has been build as a docker image and the tests are the conducted on a closed test environment. So keep in mind a docker installation or docker desktop (for windows) is needed to run these tests.

### Code coverage report, minimum 80% coverage


### JMeter Test plan and load rest results
The JMeter test plan is located [here](perf-tests/test-plan.jmx) and is boiled down to 4 steps:
1. The test plan wrapper - used for configuring and containing the test plan.
2. Thread Group - used for defining the number of users we are simulating, the ramp up time and how to handle errors.
3. Loop Controller - used for defining how many times we want to loop through requests per user.
4. HTTP Request - used for defining the actual request we want to send to the API.

#### Results of the load test:
Raw results are located [here](perf-tests/results.jtl)

HTML report is located [here](perf-tests/report/index.html)

### Reflection page

### Test plan
