describe('Test Suite', () => {
    it('Add Pet', () => {
        const requestBody = 
        {
        id: 1,
        category: {
          id: 1,
          name: 'Cat'
        },
        name: 'Alfred',
        photoUrls: ['string'],
        tags: [
          {
            id: 1,
            name: 'British'
          }
        ],
        status: 'available'
      };  
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: requestBody,
      }).then((response) => {        
        cy.log('API Response:', response.body);
        expect(response.status).to.equal(200);  
        expect(response.body).to.deep.equal(requestBody);
      });
    });
  });

      it('Update Pet Image', () => {
        const requestBody = {
        id: 1,
        category: {
          id: 1,
          name: 'Cat'
        },
        name: 'Alfred',
        photoUrls: ['./Downloads/8750110_g2015-112-curly-tail-02.jpg'],
        tags: [
          {
            id: 1,
            name: 'British'
          }
        ],
        status: 'available'
      };  
          cy.request({
          method: 'PUT',
          url: 'https://petstore.swagger.io/v2/pet/1',
          body: requestBody,
        }).then((response) => {          
          cy.log('API Response:', response.body);
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal(requestBody);
        })
      



    });

  ///// 	Verify that allows updating Pet’s name and status
/////Verify that allows deleting Pet 