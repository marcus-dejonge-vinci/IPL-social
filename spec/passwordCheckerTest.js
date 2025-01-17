import { Main } from "../passwordChecker";

describe("Checking if a password is valid", function () {
    const main = new Main();

    it("Number of characters : when number of characters is 0", function(){
        const result = main.checkMin8chars("");
        expect(result).toBe(false);
    });

}); 