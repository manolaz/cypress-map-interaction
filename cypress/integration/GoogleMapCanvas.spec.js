describe("GOOGLE MAP app", () => {
    it("get MAP canvas, to find hotel <Marina Bay Sands Singapore> ", () => {
      cy.visit("https://goo.gl/maps/xpE84cSewTG6RoqS7");
      cy.get("canvas").then($canvas =>{
        const canvasWidth = canvas.width();
        const canvasHeight = canvas.height();

        const canvasCenterHorizontal = canvasWidth/2;
        const canvasCenterVertical = canvasHeight/2;

        const marinaX = canvasWidth/4;
        const marinaY = canvasHeight/4;
        
        cy.wrap($canvas)
        .scrollIntoView({ duration: 2000 })
        .trigger("mousedown", canvasCenterVertical, canvasCenterHorizontal)
        .trigger("mousemove", marinaX, marinaY)
        .trigger('mouseup', { force: true })
        .click()
        ;      
        // canvas.trigger("mousedown", canvasCenterVertical, canvasCenterHorizontal );
        // id="pane"
      });

      // .trigger('mouseup', 15, 40)

      cy.get("#pane").find("Marina Bay Sands Singapore").should.be(visible);
        
    });
  });
  