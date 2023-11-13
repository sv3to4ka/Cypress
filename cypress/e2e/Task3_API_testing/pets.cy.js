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
// update_pet_image_spec.js

describe('Update Pet Image Test', () => {
  it('should update a pet\'s image using POST request and log the response', () => {
    // Assuming 'Long_hair_dog_photo.jpg' is in the 'fixtures' folder
    const imagePath = 'fixtures/Long_hair_dog_photo.jpg';

    // The pet ID to update (assuming pet with ID 101 exists)
    const petId = 101;

    cy.fixture(imagePath, 'base64').then((fileContent) => {
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
        encoding: 'multipart/form-data',
      }).then((response) => {
        // Log the response to the browser console
        console.log('Update Pet Image Response:', response);

        // Assertions on the response status and structure
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('code', 200);
        expect(response.body).to.have.property('type', 'unknown');
        expect(response.body).to.have.property('message', 'Long_hair_dog_photo.jpg');
      });
    });
  });
});


//Task7: Verify that allows updating Pet’s name and status


//Task8: Verify that allows deleting Pet
