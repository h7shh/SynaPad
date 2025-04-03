const products = [
    {
        name: "SynaPad Pro",
        description: "The premium digital notebook, offering advanced features, best for professionals.",
        price: "AED 2,499",
        specs: [
            "10.2-inch 4K display",
            "1TB storage",
            "12GB RAM",
            "Magnetic stylus",
            "Voice dictation support"
        ]
    },
    {
        name: "SynaPad Plus",
        description: "Perfect for students and professionals who need a balance of power and portability.",
        price: "AED 1,799",
        specs: [
            "10.1-inch Full HD display",
            "512GB storage",
            "8GB RAM",
            "Magnetic stylus"
        ]
    },
    {
        name: "SynaPad Basic",
        description: "Affordable and efficient for everyday use, ideal for note-taking and light work.",
        price: "AED 1,199",
        specs: [
            "9.7-inch HD display",
            "256GB storage",
            "4GB RAM",
            "Basic stylus"
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
