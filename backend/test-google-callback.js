const axios = require('axios');

async function testGoogleCallback() {
    try {
        // This simulates what Google does when it redirects back
        const response = await axios.get('http://localhost:5001/api/auth/google/callback', {
            params: {
                code: 'fake_test_code',
                state: 'STUDENT'
            },
            maxRedirects: 0,
            validateStatus: () => true // Don't throw on redirect
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        console.log('Redirect location:', response.headers.location);
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
}

testGoogleCallback();
