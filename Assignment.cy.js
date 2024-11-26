describe('Automation Test', () => {
    it('Slider and Checkbox Test', () => {
        cy.visit('https://www.fitpeo.com/');

        cy.get("a[href='/revenue-calculator']").click({force:true}).wait(3000);

        cy.get('input[type="number"]').clear().type("820")

        cy.get('input[aria-orientation="horizontal"]').should('have.attr' , 'value', '820')

        let list_of_items = ['CPT-99091', 'CPT-99453', 'CPT-99454','CPT-99474']
        cy.get('div[class="MuiBox-root css-1eynrej"]').each(($el) => {
            cy.wrap($el).find('p[class="MuiTypography-root MuiTypography-body1 inter css-1s3unkt"]').then(($text) => {
                const trimmedText = $text.text().trim();
                if (list_of_items.includes(trimmedText)) {
                  cy.log(trimmedText, "Matched Ones");
                  cy.wrap($el).find('input[type="checkbox"]').click({force:true})
                }
            })
        }).wait(3000);

        cy.get('p[class="MuiTypography-root MuiTypography-body2 inter css-1msk7rm"]').last().should('have.text', 'Total Recurring Reimbursement for all Patients Per Month')
        //cy.get('p[class="MuiTypography-root MuiTypography-body1 inter css-2bch19"]').last().should('have.text', '$110700')
        cy.get('p[class="MuiTypography-root MuiTypography-body1 inter css-12bch19"]')
  .should('contain.text', '$110700');
  
    });
});

  
  
        