const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  }


//had to refernce solution to complete this one, where did we get startsWith? 

  function fuzzyMatch(drivers, string){
    return drivers.filter(driver => {
      return driver.startsWith(string)
    })
  }