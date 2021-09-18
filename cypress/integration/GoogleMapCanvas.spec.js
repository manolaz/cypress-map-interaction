describe("GOOGLE MAP app", () => {
    it("get MAP canvas", () => {
      cy.visit("https://goo.gl/maps/xpE84cSewTG6RoqS7");
      cy.get("canvas").then($canvas =>{
        const canvasWidth = canvas.width();
        const canvasHeight = canvas.height();

        const canvasCenterHorizontal = canvasWidth/2;
        const canvasCenterVertical = canvasHeight/2;

        cy.wrap($canvas).scrollIntoView();
      });
        
    });
  });
  