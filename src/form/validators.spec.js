import { expect } from 'chai';
import { required } from './validators';

describe('Validators', () => {
  describe('required', () => {
    it('raises error if no value', () => {
      const result = required(undefined);
      expect(result).to.equal('Required');
    });

    it('raises no error if value provided', () => {
      const anything = 'anything';
      const result = required(anything);
      expect(result).to.be.undefined;
    });
  });
});
