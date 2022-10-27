/* const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Field, conn } = require('../../db');

const agent = session(app);

const pokemon ={
  name: 'pikachu'
}
describe('POST /pokemon route', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  //beforeEach(()=>conn.sync({force: true}));
    it('should create pokemon', (done)=>{
      agent.post('/pokemons').send(pokemon).end((err, res)=>{
        expect(res.body.name).to.equal(pokemon.name);
        done();
      });
    });
    it('should throw error when null name', (done)=>{
      agent.post('/pokemons').send({}).expect(200).end((req, res)=>{
        expect(res.body.error).to.equal("pokemon.name cannot be null");
        done();
      })
    });
});
 */