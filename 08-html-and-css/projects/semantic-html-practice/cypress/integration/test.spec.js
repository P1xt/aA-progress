describe("HTML elements on index.html", function () {

    before(function () {
        cy.visit("index.html");
    });

    describe("Phase 1: Creating the basic HTML5 structure", function () {

        it("has a _DOCTYPE_ declaration", function () {
            cy.document().then(doc => {
                expect(doc.doctype !== undefined).to.eq(true)
                expect(doc.doctype.name).to.eq('html')
            })
        });

        it("has an html element with a head and body element", function () {
            cy.get("html")
                .should.exist;
            cy.get("html head")
                .should.exist;
            cy.get("html body")
                .should.exist;
        });

        it("has a head element with the title 'My HTML Cheat Sheet'", function () {
            cy.get("head title")
                .should("contain", "My HTML Cheat Sheet");
        });

    });


    describe("Phase 2: Headings", function () {

        it("has an h1 heading with the text 'My HTML Cheat Sheet'", function () {
            cy.get("h1")
                .should("contain", "My HTML Cheat Sheet");
        });

        it("has an h2 subheading with the text 'Headings'", function () {
            cy.get("h2")
                .eq(0)
                .should("contain", "Headings");
        });

    });


    describe("Phase 3: Paragraphs", function () {

        it("has an h2 subheading with the text 'Paragraphs'", function () {
            cy.get("h2")
                .eq(1)
                .should("contain", "Paragraphs");
        });

        it("has two paragraphs", function () {
            cy.get("p")
                .should("contain", "Paragraphs")
                .should("contain", "Headings");
        });

    });


    describe("Phase 4: Lists", function () {

        it("has an h2 subheading with the text 'Lists'", function () {
            cy.get("h2")
                .eq(2)
                .should("contain", "Lists");
        });


        it("has an h3 subheading with the text 'Unordered Lists'", function () {
            cy.get("h3")
                .eq(0)
                .should("contain", "Unordered Lists");
        });

        it("has a paragraph describing unordered lists", function () {
            cy.get("p")
                .should("contain", "Unordered lists");
        });

        it("has an h4 heading with the text 'Types of lists:'", function () {
            cy.get("h4")
                .eq(0)
                .should("contain", "Types of lists:");
        });

        it("has an unordered list with two list items", function () {
            cy.get("ul")
                .eq(0)
                .should.exist;

            cy.get("ul li")
                .should("contain", "Unordered lists (`ul`)")
                .should("contain", "Ordered lists (`ol`)");
        });


        it("has an h3 subheading with the text 'Ordered Lists'", function () {
            cy.get("h3")
                .eq(1)
                .should("contain", "Ordered Lists");
        });

        it("has a paragraph describing ordered lists", function () {
            cy.get("p")
                .should("contain", "Ordered lists");
        });

        it("has an h4 heading with the text 'Polya's Problem Solving Framework'", function () {
            cy.get("h4")
                .eq(1)
                .should("contain", "Polya's Problem Solving Framework");
        });

        it("has an ordered list with four list items", function () {
            cy.get("ol")
                .eq(0)
                .should.exist;

            cy.get("ol li")
                .should("contain", "Understand the problem")
                .should("contain", "Come up with a plan")
                .should("contain", "Carry out the plan")
                .should("contain", "Go back and improve your solution");

        });

    });


    describe("Phase 5: Links", function () {

        it("has an h2 subheading with the text 'Anchors (i.e. links)'", function () {
            cy.get("h2")
                .eq(3)
                .should("contain", "Anchors (i.e. links)");
        });

        it("has a paragraph describing anchors", function () {
            cy.get("p")
                .should("contain", "links");
        });

        it("has an anchor element linking to DuckDuckGo", function () {
            cy.get("a")
                .eq(0)
                .should("have.attr", "href", "https://duckduckgo.com")
                .should("contain", "Go to DuckDuckGo to search for more information.");
        });

        it("has a second anchor element with a blank target attribute", function () {
            cy.get("a")
                .eq(1)
                .should("have.attr", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a")
                .should("have.attr", "target", "_blank")
                .should("contain", "MDN");
        });

    });


    describe("Phase 6: Images", function () {

        it("has an h2 subheading with the text 'Images'", function () {
            cy.get("h2")
                .eq(4)
                .should("contain", "Images");
        });

        it("has a paragraph describing images", function () {
            cy.get("p")
                .should("contain", "img").and("contain", "images");
        });

        it("has an image with src and alt attributes", function () {
            cy.get("img")
                .eq(0)
                .should("have.attr", "src", "http://wanderlord.com/wp-content/uploads/2015/11/Lemur-5-150x150.jpg")
                .should("have.attr", "alt", "A cute lemur");
        });

    });

    describe("Phase 7: Tables", function () {

        it("has an h2 subheading with the text 'Tables'", function () {
            cy.get("h2")
                .eq(5)
                .should("contain", "Tables");
        });

        it("has a table element with a thead, tbody, and tfoot element", function () {
            cy.get("table")
                .should.exist

            cy.get("table thead")
                .should.exist

            cy.get("table tbody")
                .should.exist

            cy.get("table tfoot")
                .should.exist
        });

        it("has rows, row headers, and data within the table", function () {
            cy.get("thead tr th")
                .should.exist

            cy.get("tbody tr td")
                .should.exist

            cy.get("tfoot tr td")
                .should.exist
        });

        it("has a paragraph describing tables", function () {
            cy.get("p")
                .should("contain", "tables")
        });

    });

});
