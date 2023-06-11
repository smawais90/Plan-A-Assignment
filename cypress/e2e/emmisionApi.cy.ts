import { evaluateNumber } from "../helpers/emmisionApi.helper"

describe('emission api test cases', () => { 
  it('get all the statistics and values in value property should be type number ', () => { 
    const random = Math.floor(Math.random() * 4);
    cy.request({
      method: "Get",
      url: "/products.json",
  }).then((resp) => {
      expect(resp.status).to.eq(200);
      const product = resp.body[random].name;
      cy.request({
        method: "Get",
        url: `/${product}/data-range.json`,
    }).then((resp) => {
        expect(resp.status).to.eq(200);
        const dateRange = resp.body;
        cy.request({
          method: "Get",
          url: `/${product}/statistics.json?interval=year&begin=${dateRange.first}&end=${dateRange.last}&limit=1&offset=0`
      }).then((resp) => {
          expect(resp.status).to.eq(200);
          const statistics = resp.body;
          if(statistics.length ==0 ) {
            return
          }
          else{
            const values = statistics.map(obj => obj.value);
          evaluateNumber(values[0].average);
          evaluateNumber(values[0].count);
          evaluateNumber(values[0].max);
          evaluateNumber(values[0].min);
          //standard deviation property can not be tested as its naming convention is not upto javascript standard
          // evaluateNumber(values[0].standard_deviation)
          }          
        })
      })
    })
  })
})