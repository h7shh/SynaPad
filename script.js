const products = [
    {
        name: "SynaPad Core",
        description: "Affordable 6.8\" e-ink note-taker. Basic stylus, 16GB storage, 6-7 day battery, cloud sync. Ideal for students and casual users.",
        price: "AED 799 - 899",
        specs: [
            "6.8\" Matte Paper-like Display",
            "Basic Capacitive Stylus",
            "16GB Storage, Cloud Sync",
            "6-7 Day Battery"
        ]
    },
    {
        name: "SynaPad Plus",
        description: "Premium 10.3\" e-ink tablet. Pressure-sensitive stylus, 32GB storage (expandable), 7-11 day battery, advanced AI features. For professionals and students.",
        price: "AED 1499 - 1699",
        specs: [
            "10.3\" Matte Paper-like Display",
            "Pressure-sensitive Stylus",
            "32GB Storage (expandable), Advanced AI",
            "7-11 Day Battery"
        ]
    },
    {
        name: "SynaPad Pro",
        description: "High-end 13.3\" e-ink canvas. Pro stylus with AI handwriting-to-text, 64GB storage (expandable), 11-17 day battery, AI voice dictation. For creatives and professionals.",
        price: "AED 2199 - 2499",
        specs: [
            "13.3\" Matte Paper-like Display",
            "Pro Stylus with AI features",
            "64GB Storage (expandable), AI Voice Dictation",
            "11-17 Day Battery"
        ]
    }
];

function showDetails(index) {
    const product = products[index];
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productDescription').innerText = product.description;
    document.getElementById('productPrice').innerText = product.price;
    const specsList = document.getElementById('productSpecs');
    specsList.innerHTML = '';
    product.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
    document.getElementById('productDetails').style.display = 'block';
}

function closeDetails() {
    document.getElementById('productDetails').style.display = 'none';
}

 