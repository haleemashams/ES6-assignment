async function delayedGreeting(name) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Hello, ${name}!`);
    alert(`Hello, ${name}!`);
  }
   ////////////////////////////////////////////////////////////////////////////
   async function ques2() {
    // Simulating an asynchronous API call using a Promise
    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = { key: "value" }; // Replace this with your actual data object
          resolve(data);
        }, 3000); // Resolves after 3 seconds
      });
    }

    try {
      const dataObject = await fetchData();
      console.log("Data Object:", dataObject);
      alert("Data Object:", dataObject);
      // You can use the dataObject here or do other operations with it
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  ///////////////////////////////////////////////////////////////
  async function ques3() {
    // Simulating an asynchronous API call to fetch users using a Promise
    function fetchUsers() {
      return new Promise((resolve) => {
        // Replace this with the actual API call to fetch users
        setTimeout(() => {
          const users = [
            { id: 1, name: "John" },
            { id: 2, name: "Jane" },
            { id: 3, name: "Bob" },
          ]; // Replace this with the actual list of users from the API
          resolve(users);
        }, 4000); // Resolves after 4 seconds
      });
    }

    try {
      const userList = await fetchUsers();
      alert("List of Users:", userList);
      // You can work with the userList here or do other operations with it
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function ques4() {
    // Simulating an asynchronous API call to fetch data based on the given `id` using a Promise
    function fetchData(id) {
      return new Promise((resolve, reject) => {
        // Replace this with the actual API call to fetch data based on the given `id`
        setTimeout(() => {
          // For demonstration purposes, let's assume the API call is successful with some data
          const data = { id: id, title: "Sample Data" };
          resolve(data);
          // In case of an error, reject the Promise like this:
          // reject(new Error("Failed to fetch data"));
        }, 2000); // Resolves after 2 seconds
      });
    }

    const idToFetch = 123; // Replace this with the actual `id` you want to fetch

    try {
      const fetchedData = await fetchData(idToFetch);
      alert("Fetched Data:", fetchedData);
      // You can work with the fetchedData here or do other operations with it
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
///////////////////////////////////////////////////////
async function ques5() {
    // Simulating an asynchronous API call to fetch data using a Promise
    function fetchData() {
      return new Promise((resolve) => {
        // Replace this with the actual API call to fetch data
        setTimeout(() => {
          // For demonstration purposes, let's assume the API call is successful with some data
          const data = { key: "value" };
          resolve(data);
        }, 5000); // Resolves after 5 seconds
      });
    }

    try {
      const fetchedData = await fetchData();
      alert("Fetched Data:", fetchedData);
      alert("Fetched Data:", fetchedData);
      // You can work with the fetchedData here or do other operations with it
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  ///////////////////////////////////////////////////////////
  // a. Create a global value for a counter.
  let globalCounter = 1;

  // b. Create a function that takes one argument. Return the result of a new Promise,
  // setting a setTimeout() function that will contain the resolve instance.
  function delayIncrement(value) {
    return new Promise((resolve) => {
      // c. Increment the counter within setTimeout(), adding one every second.
      setTimeout(() => {
        globalCounter++;
        // Resolve the Promise with the value of the counter and the value of the argument.
        resolve({ counter: globalCounter, argumentValue: value });
      }, 1000);
    });
  }

  // d. Create an asynchronous function that outputs into the console the value of
  // the global counter and the value of the argument of the function.
  async function asyncFunction(value) {
    const result = await delayIncrement(value);

    alert("Global Counter:", result.counter);
    alert("Function Argument Value:", result.argumentValue);

    // e. Create a variable to capture the returned resolve value from the await function.
    return result;
  }

  // f. Create a loop to iterate 10 times, incrementing the value and invoking the
  // async function, passing the value of the increment variable as the parameter in the function.
  async function ques6() {
    for (let i = 1; i <= 10; i++) {
      const result = await asyncFunction(i);
      alert("Resolved Value:", result);
    }
  }