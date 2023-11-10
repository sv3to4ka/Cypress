describe('Download Report Test', () => {
    it('should download the EPAM Corporate Overview 2023 report', () => {
      cy.visit('https://www.epam.com/about');
  
      cy.contains('DOWNLOAD').click();
  
      cy.wait(10000);
  
      cy.exec('dir "C:\\Users\\Svitlana_Hlynianska\\Downloads"').then(({ stdout }) => {
        expect(stdout).to.contain('EPAM_Corporate_Overview_Q3_october.pdf');
      });
    });
  });
  