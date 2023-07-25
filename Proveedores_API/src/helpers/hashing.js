const  bcrypt  = require('bcryptjs');


async function encryptPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
}

async function verifyPassword(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error(`Error al verificar la contraseña: ${error.message}`);
  }
}




module.exports = {
    encryptPassword,
    verifyPassword
}