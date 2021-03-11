import { defineFeature, loadFeature } from '../../../../src/';
import { stringCalculator } from '../../src/string-calculator';

const feature = loadFeature('./examples/typescript/specs/features/string_calculator.feature');

defineFeature(feature, (test) => {
    let op : stringCalculator;
    let str: string;
    let res: number;

    beforeEach(() => {
        op = new stringCalculator();
        str = "";
        res = 0;
    });

    test('Pass as argument "" and outputs zero', ({ given, when, then }) => {
        given('""', () => {
            str = "";
        });

        when('add ""', () => {
            res = op.add(str);
        });

        then('the output is 0', () => {
            expect(res).toBe(0);
        });
    });

     test('Pass as argument 1,2 and outputs 3', ({ given, when, then }) => {
        given('1,2', () => {
            str = "1,2";
        });

        when('sum them', () => {
            res = op.add(str);
        });

        then('the output is 3', () => {
            expect(res).toBe(3);
        });
    });
});