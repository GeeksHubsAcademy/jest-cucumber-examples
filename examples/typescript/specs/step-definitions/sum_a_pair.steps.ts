import { defineFeature, loadFeature } from '../../../../src/';
import { Operation } from '../../src/sum';

const feature = loadFeature('./examples/typescript/specs/features/sum_a_pair.feature');

defineFeature(feature, (test) => {
    let op : Operation;
    let x: number;
    let res: number;

    beforeEach(() => {
        op = new Operation();
        x = 0;
        res = 0;
    });

    test('Adds 1 + 2 to equals 3', ({ given, when, then }) => {
        given('1', () => {
            x = 1;
        });

        when('add 2', () => {
            res = op.sum(x,2);
        });

        then('the sum is 3', () => {
            expect(res).toBe(3);
        });
    });
});