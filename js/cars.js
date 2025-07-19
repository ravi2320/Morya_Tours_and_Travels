// Car data
const cars = [
    {
        id: 1,
        name: "Toyota Land Cruiser",
        category: "suv",
        price: 2500,
        perKm: 15,
        seats: 7,
        transmission: "Automatic",
        fuel: "Diesel",
        ac: true,
        luggage: "Large",
        description: "Perfect for long trips and family outings with ample space and comfort.",
        features: ["7 Seats", "AC", "Large Luggage", "Diesel", "Automatic"],
        image: "images/car1.jpg"
    },
    {
        id: 2,
        name: "Maruti Suzuki Ertiga",
        category: "suv",
        price: 1800,
        perKm: 12,
        seats: 6,
        transmission: "Manual",
        fuel: "Diesel",
        ac: true,
        luggage: "Medium",
        description: "Ideal for medium-sized groups with good fuel efficiency and comfort.",
        features: ["6 Seats", "AC", "Medium Luggage", "Diesel", "Manual"],
        image: "images/car2.jpg"
    },
    {
        id: 3,
        name: "Maruti Swift",
        category: "sedan",
        price: 1200,
        perKm: 10,
        seats: 4,
        transmission: "Manual",
        fuel: "Petrol",
        ac: true,
        luggage: "Small",
        description: "Compact and fuel-efficient, perfect for city trips and small groups.",
        features: ["4 Seats", "AC", "Small Luggage", "Petrol", "Manual"],
        image: "images/car3.jpg"
    },
    {
        id: 4,
        name: "Honda City",
        category: "sedan",
        price: 1500,
        perKm: 12,
        seats: 5,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
        luggage: "Medium",
        description: "Premium sedan with great comfort and features for business or leisure.",
        features: ["5 Seats", "AC", "Medium Luggage", "Petrol", "Automatic"],
        image: "images/car4.jpg"
    },
    {
        id: 5,
        name: "Mercedes-Benz E-Class",
        category: "luxury",
        price: 5000,
        perKm: 25,
        seats: 4,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
        luggage: "Medium",
        description: "Experience luxury and performance with our premium Mercedes sedan.",
        features: ["4 Seats", "AC", "Medium Luggage", "Petrol", "Automatic", "Premium Sound"],
        image: "images/car5.jpg"
    },
    {
        id: 6,
        name: "Toyota Innova Crysta",
        category: "suv",
        price: 2200,
        perKm: 14,
        seats: 7,
        transmission: "Automatic",
        fuel: "Diesel",
        ac: true,
        luggage: "Large",
        description: "Spacious and comfortable MPV with premium features for family trips.",
        features: ["7 Seats", "AC", "Large Luggage", "Diesel", "Automatic"],
        image: "images/car6.jpg"
    }
];

// Load cars on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCars();
    setupFilterButtons();
});

function displayCars(filter = 'all') {
    const fleetGrid = document.querySelector('.fleet-grid');
    
    if (!fleetGrid) return;
    
    // Filter cars if needed
    const filteredCars = filter === 'all' 
        ? cars 
        : cars.filter(car => car.category === filter);
    
    fleetGrid.innerHTML = filteredCars.map(car => `
        <div class="car-card" data-id="${car.id}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge">${car.category.toUpperCase()}</span>
            </div>
            <div class="car-details">
                <h3 class="car-name">${car.name}</h3>
                <p class="text-muted">${car.description}</p>
                <div class="car-meta">
                    <span class="car-meta-item">
                        <i class="fas fa-users"></i> ${car.seats} Seats
                    </span>
                    <span class="car-meta-item">
                        <i class="fas fa-gas-pump"></i> ${car.fuel}
                    </span>
                    <span class="car-meta-item">
                        <i class="fas fa-cog"></i> ${car.transmission}
                    </span>
                </div>
                <div class="car-price">
                    ₹${car.price.toLocaleString()}/day <span>or ₹${car.perKm}/km</span>
                </div>
                <div class="car-actions">
                    <a href="tel:+919503598098" class="btn btn-outline-primary">
                        <i class="fas fa-phone-alt"></i> Call
                    </a>
                    <a href="https://wa.me/919503598098?text=I'm interested in booking ${car.name}" class="btn btn-primary">
                        <i class="fab fa-whatsapp"></i> Book
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Display filtered cars
            displayCars(filter);
        });
    });
}