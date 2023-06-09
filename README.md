# Plan-A-Assignment

- Clone the project in local directory from github
- Open console with the path to your project folder
- Run command "npm install" in your console to install all dependencies
- After installing the depedencies run command (`npx cypress open`) Or (`npm run test`) to run the tests.

## Test Case Strategy:

- I have divided my test cases to different files to make them indepedent of each other.

- You can find helpers files in the helpers folder, which I have used to write reusable functions in test cases files.

- I have made data.json file and selector.json files separately in Fixtures folder to increase reusability and reduce overwork if somehing is changed in future.

- I have kept the test cases simple and tried to put as much assertions as I can for given scenerios.

- The API test cases are flaky for now, as per requirement we had to use the data dynamically from previous call. So for methane the test case is running fine, but for rest it is giving time out, because API has to fetch a lot of data for the time interval we are getting from data-range Api.
