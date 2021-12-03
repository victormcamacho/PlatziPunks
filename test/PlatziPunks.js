const {expect} = require("chai")

describe("Platzi Punks Contract",()  => {
    const setup = async ({maxSupply = 10000}) => {
        const [owner] = await ethers.getSigners();
        const contract = await ethers.getContractFactory("PlatziPunks");
        const deployed = await contract.deploy(maxSupply);

        return {
            owner,
            deployed
        };
    };

    describe("Deployment", () => {
        it("Set max supply to passed param", async () => {

        })
    })
})