const bcrypt = require('bcrypt');

const getSalt = async () => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash('1234', salt);
    console.log(hashPassword);
}

getSalt();