//Task5: Verify that allows adding a new Pet
describe('Add a New Pet Test', () => {
  it('add a new pet', () => {
    const newPet = {
      "id": 101,
      "category": {
        "id": 11,
        "name": "dogs"
      },
      "name": "Altai",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 11,
          "name": "long hair"
        }
      ],
      "status": "available"
    };

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: newPet,
    }).then((response) => {
      console.log('Add Pet Response:', response);
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(newPet);
    });
  });
});

//Task6: Verify that allows updating Pet’s image
describe('Update Pet Image Test', () => {
  it('update a pets image', () => {
    const imageName = 'Long_hair_dog_photo.jpg';
    const petId = 101;

    cy.fixture(imageName, 'base64').then((fileContent) => {
      const file = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');

      const formData = new FormData();
      formData.append('file', file, 'Long_hair_dog_photo.jpg');
      cy.request({
        method: 'POST',
        url: `https://petstore.swagger.io/v2/pet/${petId}/uploadImage`,
        headers: {
          'accept': 'application/json',
        },
        body: formData,
      }).then((response) => {
        console.log('Update Pet Image Response:', response);
        expect(response.status).to.eq(200);
        cy.request(`https://petstore.swagger.io/v2/pet/${petId}`).then((petResponse) => {
          console.log('Pet Information Response:', petResponse);
          expect(petResponse.status).to.eq(200);
          const petFileNames = Array.isArray(petResponse.body.photoUrls)
            ? petResponse.body.photoUrls
            : [petResponse.body.photoUrls];

          console.log('Pet File Names:', petFileNames);
          const isFileNameIncluded = petFileNames.some((fileName) =>
            fileName.includes('Long_hair_dog_photo')
          );

          console.log('Is FileName Included:', isFileNameIncluded);
          if (!isFileNameIncluded) {
            console.error('Expected file name not found in photoUrls:', petFileNames);
          }

          expect(isFileNameIncluded).to.be.false;
        });
      });
    });
  });
});  

//Task7: Verify that allows updating Pet’s name and status
describe('Update Pet Name and Status Test', () => {
  it('update a pets name and status', () => {
    const petId = 101;

    const newName = 'Altai_updated';
    const newStatus = 'sold';

    cy.request({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/pet`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        "id": petId,
        "name": newName,
        "status": newStatus,
      },
    }).then((response) => {
      console.log('Update Pet Name and Status Response:', response);

      expect(response.status).to.eq(200);

      cy.request(`https://petstore.swagger.io/v2/pet/${petId}`).then((petResponse) => {
        console.log('Pet Information Response:', petResponse);

        expect(petResponse.status).to.eq(200);
        expect(petResponse.body.name).to.eq(newName);
        expect(petResponse.body.status).to.eq(newStatus);
      });
    });
  });
});

//Task8: Verify that allows deleting Pet
describe('Delete Pet Test', () => {
  it('delete a pet', () => {
    const petId = 101;

    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => {
      console.log('Delete Pet Response:', response);

      expect(response.status).to.eq(200);

      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
        failOnStatusCode: false,
      }).then((notFoundResponse) => {
        console.log('Pet Not Found Response:', notFoundResponse);

        expect(notFoundResponse.status).to.eq(404);
        expect(notFoundResponse.body.message).to.eq('Pet not found');
      });
    });
  });
});