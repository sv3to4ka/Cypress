describe('API Test Suite', () => {
    it('Create User Test', () => {
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: {
          id: 0,
          username: 'shagen',
          firstName: 'Scarlett',
          lastName: 'Hagen',
          email: 'shagen@gmail.com',
          password: 'Password1',
          phone: '19079797979',
          userStatus: 0,
        },
      }).then((response) => {
             console.log(response);       
        expect(response.status).to.eq(200);
      });


        it('User Logs In', () => {
          cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/login',
            qs: {
              username: 'shagen',
              password: 'Password1'
            },
          }).then((response) => {
               expect(response.status).to.eq(200);                
          });
        });
      });


      it('Create User With List', () => {
        const requestBody = [
          {
            id: 0,
            username: 'sdodd',
            firstName: 'Samantha',
            lastName: 'Dodd',
            email: 'sdodd@gmail.com',
            password: 'Password1',
            phone: '19089898989',
            userStatus: 0
          }
        ];
    
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user/createWithList',
          body: requestBody,
        }).then((response) => {
          cy.log('API Response:', response.body);    
          expect(response.status).to.equal(200);
          expect(response.body.code).to.equal(200);
          expect(response.body.type).to.equal('unknown');
          expect(response.body.message).to.equal('ok');
        });
      });
      

      
  });
  