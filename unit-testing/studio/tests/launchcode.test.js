// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("testing organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("testing executive director", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("cool employees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programs offered", function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function(){
    expect(launchcode.launchOutput(4)).toBe('Launch!');
  })

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", function(){
    expect(launchcode.launchOutput(9)).toBe('Code!');
  })

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", function(){
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  })

  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'", function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  })

  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  })

  test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)'", function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  })

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  })

  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function(){
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
  })
}); 

  
