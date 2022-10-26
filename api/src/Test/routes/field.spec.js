const { Field, conn } = require('../../src/db.js');
const { expect } = require('chai');

const field1 = {
    name: "cancha 1",
    image: "img",
    state: "PENDING",
    price: 1000,
    address: "calle 14 #205",
};

const field2 = {
    name: "cancha 2",
    image: "img",
    state: "PENDINGG",
    price: 1000,
    address: "calle 14 #205",
};
describe('Field model', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    describe('Validators', () => {
      beforeEach(() => Field.sync({ force: true }));
      describe('Field', () => {     
        it('should throw an error if id is invalid', async ()=>{
            var errorMessage = "";
            try{
              await Field.create({})
            }catch(error){
              errorMessage = error.errors[0].message;
            }
            expect(errorMessage).to.be.equals("type.name cannot be null");
        });
        it("should throw an error if state is invalid", async ()=>{
            var errorMessage = "";
            try{
              await Field.create(field2)
            }catch(error){
              errorMessage = error.errors[0].message;
            }
            expect(errorMessage).to.be.equals("field.name cannot be null");
        })

      });
    });
  });