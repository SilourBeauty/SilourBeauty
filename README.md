## Hi there 👋

<!--
**SilourBeauty/SilourBeauty** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
// netlify/functions/create-checkout.js
const crypto = require('crypto');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    // espera { amountInCents: 10260000, reference: 'ref_12345', currency: 'COP' }
    const amount = body.amountInCents;
    const reference = body.reference || `ref_${Date.now()}`;
    const currency = body.currency || 'COP';

    const publicKey = process.env.WOMPI_PUBLIC_KEY; // ej: pub_test_...
    const integritySecret = process.env.WOMPI_INTEGRITY_SECRET; // ej: test_integrity_...

    if (!publicKey || !integritySecret || !amount) {
      return { statusCode: 400, body: 'Faltan parámetros o variables de entorno' };
    }

    const concatenated = `${reference}${amount}${currency}${integritySecret}`;
    const signature = crypto.createHash('sha256').update(concatenated).digest('hex');

    const url = `https://checkout.wompi.co/p/?public-key=${encodeURIComponent(publicKey)}&currency=${encodeURIComponent(currency)}&amount-in-cents=${amount}&reference=${encodeURIComponent(reference)}&signature:integrity=${signature}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ checkoutUrl: url })
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error interno: ' + err.message };
  }
};
