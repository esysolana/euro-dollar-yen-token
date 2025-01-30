document.getElementById('buyButton').addEventListener('click', function () {
    alert('Thank you for your interest in €$¥! Redirecting to the purchase page...');
    window.location.href = 'https://pump.fun/coin/HzhdH8FTQSfNHeQQf1oueqwTzw7qSXxncPixmJnopump';
});

function copyLink() {
    const link = "https://coinmarketcap.com/dexscan/solana/6JkKyjvc78mbDA8nr1JjzBCp2tEFZYtUEnaf9BpCAft9/";
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    });
}

function copyText() {
    const text = "HzhdH8FTQSfNHeQQf1oueqwTzw7qSXxncPixmJnopump";
    navigator.clipboard.writeText(text).then(() => {
        alert("TOKEN copied to clipboard!");
    });
}