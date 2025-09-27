document.addEventListener('DOMContentLoaded', function() {
            const inventoryData = [
                {
                    title: '2023 Tata Harrier XZA+',
                    imageSrc: '/test/img/2023 Tata Harrier XZA+.jpeg',
                    specs: '18,000 km | Automatic | Diesel',
                    price: '₹ 22,50,000',
                    detailsLink: '#',
                    isAvailable: true
                },
{
    title: '2022 Hyundai Creta SX(O)',
    imageSrc: '/test/img/2022 Hyundai Creta SX(O).jpeg',
    specs: '25,000 km | Automatic | Petrol',
    price: '₹ 17,80,000',
    detailsLink: '#',
    isAvailable: true
},
{
    title: '2023 Kia Seltos GTX+',
    imageSrc: '/test/img/2023 Kia Seltos GTX+.jpeg',
    specs: '12,500 km | Automatic | Petrol',
    price: '₹ 19,20,000',
    detailsLink: '#',
    isAvailable: true
},
                {
                    title: '2024 Mahindra Scorpio-N',
                    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
                    specs: '9,000 km | Manual | Diesel',
                    price: '₹ 24,00,000',
                    detailsLink: '#',
                    isAvailable: false
                },
                {
                    title: '2023 Maruti Suzuki Vitara Brezza',
                    imageSrc: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
                    specs: '15,000 km | Automatic | Petrol',
                    price: '₹ 11,50,000',
                    detailsLink: '#',
                    isAvailable: false
                }
            ];

            const inventoryContainer = document.getElementById('inventory-container');

            for (let i = 0; i < inventoryData.length; i++) {
                const car = inventoryData[i];
                if (car.isAvailable === true) {
                    const tile = document.createElement('div');
                    tile.className = 'vehicle-tile'; 
                    tile.innerHTML = `
                        <img src="${car.imageSrc}" alt="Image of ${car.title}">
                        <div class="vehicle-tile-content">
                            <h3>${car.title}</h3>
                            <p class="details">${car.specs}</p>
                            <p class="price">${car.price}</p>
                            <a href="${car.detailsLink}" class="details-link">View Details →</a>
                        </div>
                    `;
                    inventoryContainer.appendChild(tile);
                }
            }
            
            // Simple form submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will contact you soon.');
                this.reset();
            });
        });