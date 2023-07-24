/// <reference types='Cypress' />

describe("Handling WebdriverUniversity mouse actions", () => {
    it("Scroll into view", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
      });
  
    it("Drag and drop", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get('#draggable').trigger('mousedown', {which: 1});
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
  });

  it("Double click", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get('#double-click').dblclick();
  });

  it("Mouse hover", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });

  it("Click and hold", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element)=> {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
    });
  });
});
