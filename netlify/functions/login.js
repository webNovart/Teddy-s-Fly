exports.handler = async function(event, context) {
    // Verificamos que sea una petición POST
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'No permitido' };

    // Extraemos los datos que envió tu frontend
    const body = JSON.parse(event.body);
    const { username, password } = body;

    // Netlify leerá esto de tu caja fuerte invisible
    const adminUser = process.env.ADMIN_USER; 
    const adminPass = process.env.ADMIN_PASS; 

    // Validamos
    if (username === adminUser && password === adminPass) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, token: "token_seguro_123" })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false })
        };
    }
}
