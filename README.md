# cypress-map-interaction
cypress-map-interaction

AUTHOR: TRISTAN NGUYEN

We are interested in automated tests (Cypress) to test the following actions:

1. Click and drag to pan the map in canvas
2. Mouse click 'Marina Bay Sands Singapore' from the map to select it.
3. The rivers, parks, and beaches are correctly drawn on the canvas.

====
CYPRESS TEST SPEC file:
==> cypress/integration/GoogleMapCanvas.spec.js

======================
Details actions:

1/ VISITE the MAP 
2/ Find CANVAS
3/ Claculate it center
4/ Click on the CAAVAS center
5/ CLICK ,Keep pressing MOVE
6/ drag to a little top up => (a quarter from TopUp , a quarter from LeftMostborder of the canvas ), LEAVE
7/ Click on this point
8/ find 'Marina Bay Sands Singapore' name content on the PANE 

