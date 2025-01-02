document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        var myHeaders = new Headers();
        myHeaders.append("apikey", "vHxK5yD9KsOBrld2bYar9j27VCaEJ3M8");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        const baseCurrency = 'USD'; // You can make this dynamic if needed
        const currency = document.querySelector('#currency').value.toUpperCase();

        fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrency}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[currency];

                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 ${baseCurrency} is equal to ${rate.toFixed(3)} ${currency}.`;
                } else {
                    document.querySelector('#result').innerHTML = 'Invalid Currency.';
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });

        return false; // Prevent form from refreshing the page
    };
});
