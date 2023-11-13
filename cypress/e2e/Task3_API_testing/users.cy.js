//Task1: Verify that allows creating a User
describe('API Test', () => {
  it('creates a user with array', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithArray',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: [
        {
          "id": 102,
          "username": "fd_bidarling",
          "firstName": "Bianca2",
          "lastName": "Darling2",
          "email": "bdarling2@gmail.com",
          "password": "Password1!",
          "phone": "10979797979",
          "userStatus": 0
        }
      ],
    }).then((response) => {
      console.log('API Response:', response);
      expect(response.status).to.eq(200);
      const createdUserData = response.body[0];
      console.log('Created User Data:', createdUserData);
    });
  });
});

//Task2: Verify that allows login as a User
describe('User Login Test', () => {
  it('log in a user using GET request and log the response', () => {
    const username = 'bdarling2@gmail.com';
    const password = 'Password1!';

    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => {
      console.log('Login Response:', response);
      expect(response.status).to.eq(200);
      const loggedInUserData = response.body;
      console.log('Logged-in User Data:', loggedInUserData);
    });
  });
});

//Task3: Verify that allows creating the list of Users
describe('Create Users with List Test', () => {
  it('creats a list of users', () => {
    const usersList = [
      {
        "id": 103,
        "username": "fd_bidarling3",
        "firstName": "Bianca3",
        "lastName": "Darling3",
        "email": "bdarling3@gmail.com",
        "password": "Password1!",
        "phone": "10979797973",
        "userStatus": 0
      },
      {
        "id": 104,
        "username": "fd_bidarling4",
        "firstName": "Bianca4",
        "lastName": "Darling4",
        "email": "bdarling4@gmail.com",
        "password": "Password1!",
        "phone": "10979797974",
        "userStatus": 0
      },
      {
        "id": 105,
        "username": "fd_bidarling5",
        "firstName": "Bianca5",
        "lastName": "Darling5",
        "email": "bdarling5@gmail.com",
        "password": "Password1!",
        "phone": "10979797975",
        "userStatus": 0
      }
    ];

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: usersList,
    }).then((response) => {
      console.log('Create Users Response:', response);
      expect(response.status).to.eq(200);
      if ('code' in response.body) {
        console.log('Response body is not an array:', response.body);
      } else {
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((item, index) => {
            console.log(`Item ${index + 1}:`, item);
          });
        } else {
          console.log('No items in the response body.');
        }
      }
    });
  });
});

//Task4: Verify that allows Log out User
describe('User Logout Test', () => {
  it('log out a user', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/logout',
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => {
      console.log('Logout Response:', response);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('code', 200);
      expect(response.body).to.have.property('type', 'unknown');
      expect(response.body).to.have.property('message', 'ok');
    });
  });
});

