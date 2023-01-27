import {
    Field, // The native "number" type in SnarkyJS
    SmartContract, // The class that creates zkApp smart contracts
    state,
    State,
    method, 
    // a convenience decorator used within zkApp smart contracts to 
    // create new smart contract methods (i.e. functions). 
    // Methods that uses this decorator are the end user's entry points to 
    // interacting with our smart contract.
    DeployArgs,
    Permissions,
  } from 'snarkyjs';

  export class Square extends SmartContract {
    @state(Field) num = State<Field>();

    @method initState() {
        super.init();
        this.num.set(Field(3));
    }

    @method update(square: Field) {
        const currentState = this.num.get();
        this.num.assertEquals(currentState);
        square.assertEquals(currentState.mul(currentState));
        this.num.set(square);
    }
  }