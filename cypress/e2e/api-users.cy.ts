describe("Users API", function () {
    context('GET /users',() => {
        it("gets a list of users", () => {
            cy.request("GET", "/users").then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.results).length.to.be.greaterThan(1)
            })
        })
    })
})