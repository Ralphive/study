const err = require("../error");

describe("Random tests to see this working", () => {
    test("adding positive numbers is not zero", () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });

    it("Should not return a negative number when 2 positives are sum", () => {
        expect(1 + 3).toBeGreaterThan(0);
    });

    it("undefined should be false", () => {
        expect(err.getError(undefined)).toBeFalsy();
    });

    it("null should be false", () => {
        expect(err.getError(null)).toBeFalsy();
    });

    it("false should be false", () => {
        expect(err.getError(false)).toBeFalsy();
    });
});
