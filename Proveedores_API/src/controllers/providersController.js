const pool = require('../database')
const { encryptPassword } = require('../helpers/hashing');

//---------------------------------------------------------------------------------------
//                                       Providers
//---------------------------------------------------------------------------------------


const getAllProviders = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM "providersProfile" WHERE "isDeleted" = false');
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

const getProviderById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM "providersProfile" WHERE "id" = $1', [id]);
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
}


//---------------------------------------------------------------------------------------

const createProvider = async (req, res) => {
  try {
    const { providerName, socialReason, discountSale, address, col, rfc, city, state, postalCode, country, contact, phone, email } = req.body;
    const responsibleUser = 'admin';
    
    try {
      const resp = await createAuth(email);
      const providerId = resp.id;
      const password = resp.password;
      
      await pool.query('SELECT insert_provider_profile($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [providerId, providerName, socialReason, discountSale, address, col, rfc, city, state, postalCode, country, contact, phone, email, responsibleUser]);
      
      console.log('Usuario creado correctamente: ' + email + ', password: ' + password);
      
      return res.status(200).json({
        message: 'Proveedor creado correctamente',
        data: {
          email,
          password
        }
      });
    } catch (createAuthError) {
      // Maneja el error en createAuth
      console.error(createAuthError);
      return res.status(500).json({ error: createAuthError.message });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
}


 //   ------------------------------------------------------------------------

 const updateProvider = async (req, res) => {
  const id = req.params.id;
  const { providerName, socialReason, discountSale, address, col, rfc, city, state, postalCode, country, contact, phone, email } = req.body;
  const responsibleUser = 'admin';

  try {
    // Verificar si el correo electrónico está siendo utilizado por otro proveedor
    const existingProvider = await pool.query('SELECT * FROM "providersProfile" WHERE "email" = $1 AND "id" != $2', [email, id]);

    if (existingProvider.rows.length > 0) {
      return res.status(400).json({
        message: 'El correo electrónico ya está registrado por otro proveedor',
      });
    }

    try {
      await pool.query('SELECT update_provider_profile($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [id, providerName, socialReason, discountSale, address, col, rfc, city, state, postalCode, country, contact, phone, email, responsibleUser]);

      res.status(200).json({
        message: 'Proveedor actualizado correctamente',
      });
    } catch (updateProfileError) {
      console.error(updateProfileError);
      return res.status(500).json({ error: 'Error al actualizar el proveedor' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};



//---------------------------------------------------------------------------------------

const deleteProvider = async (req, res) => {
  try {
    const id = req.params.id;
    const responsibleUser = 'admin';
    await pool.query('SELECT delete_provider_profile($1, $2)', [id, responsibleUser]);
    res.status(200).json({
      message: 'Proveedor eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
}




//---------------------------------------------------------------------------------------

const createAuth = async (username) => {
  try {
    const response = await pool.query('SELECT * FROM "providerLI" WHERE "userName" = $1', [username]);
    if (response.rows[0]) {
      throw new Error('El correo electronico ya esta registrado');
    }
  }
  catch (error) {
    throw new Error('El correo electronico ya esta registrado');
  }
  try {
      const password = crypto.randomBytes(4).toString('hex');
      const hashedPassword = await encryptPassword(password);
      const response = await pool.query('INSERT INTO "providerLI" ("userName", "password") VALUES ($1, $2) RETURNING id', [username, hashedPassword]);
      const resp = {
        id: response.rows[0].id,
        password: password
      };
      return resp;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
};


//---------------------------------------------------------------------------------------

module.exports = {
  getAllProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider
}