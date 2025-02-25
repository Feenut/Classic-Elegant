// Service details data
const serviceDetails = {
    alterations: {
        title: "Clothing Alterations",
        content: `
            <h3>Our Alteration Services Include:</h3>
            <ul>
                <li>Hem adjustments (pants, skirts, dresses)</li>
                <li>Waist adjustments</li>
                <li>Sleeve length modifications</li>
                <li>Taking in/letting out seams</li>
                <li>Dress alterations</li>
                <li>Suit alterations</li>
            </ul>
            <p class="pricing">Starting from $20</p>
            <a href="./contact.html" class="cta-button">Book Consultation</a>
        `
    },
    wedding: {
        title: "Wedding Services",
        content: `
            <h3>Wedding Alteration Services:</h3>
            <ul>
                <li>Wedding dress alterations</li>
                <li>Bridesmaid dress alterations</li>
                <li>Formal wear adjustments</li>
                <li>Custom modifications</li>
                <li>Rush services available</li>
                <li>Free consultation</li>
            </ul>
            <p class="pricing">Starting from $150</p>
            <a href="./contact.html" class="cta-button">Book Consultation</a>
        `
    },
    hemming: {
        title: "Expert Hemming Services",
        description: "Professional hemming services for all types of garments",
        priceList: [
            { service: "Pants/Trousers", price: "$15-20" },
            { service: "Skirts", price: "$20-25" },
            { service: "Dresses", price: "$25-35" },
            { service: "Sleeves", price: "$20-30" }
        ],
        features: [
            "Same-day service available",
            "Expert measurement taking",
            "Original hem preservation option",
            "All fabric types handled"
        ]
    },
    suit: {
        title: "Suit Tailoring Services",
        description: "Professional suit alterations for the perfect fit",
        priceList: [
            { service: "Jacket Alterations", price: "$45-75" },
            { service: "Pants Alterations", price: "$35-50" },
            { service: "Waist Adjustment", price: "$30-45" },
            { service: "Full Suit Alteration", price: "$100-150" }
        ],
        features: [
            "Detailed measurements",
            "Multiple fittings available",
            "Premium materials used",
            "Expert tailoring techniques"
        ]
    },
    dress: {
        title: "Dress Alteration Services",
        description: "Expert alterations for all types of dresses",
        priceList: [
            { service: "Simple Alterations", price: "$35-50" },
            { service: "Evening Gown", price: "$75-150" },
            { service: "Wedding Dress", price: "$150-300" },
            { service: "Rush Service", price: "+50%" }
        ],
        features: [
            "Bridal specialists",
            "Formal wear experts",
            "Detailed consultations",
            "Premium materials"
        ]
    },
    repairs: {
        title: "Clothing Repair Services",
        description: "Professional repairs to restore your garments",
        priceList: [
            { service: "Seam Repair", price: "$20-30" },
            { service: "Zipper Replacement", price: "$25-40" },
            { service: "Patch Work", price: "$30-50" },
            { service: "Button Replacement", price: "$5-10" }
        ],
        features: [
            "Quick turnaround time",
            "Quality materials used",
            "Expert craftsmanship",
            "All types of repairs"
        ]
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return; // Exit if modal doesn't exist

    const closeBtn = modal.querySelector('.close-modal');
    
    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Function to open modal with service details
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const modalTitle = modal.querySelector('.modal-header h2');
    const modalBody = modal.querySelector('.modal-body');
    const details = serviceDetails[serviceId];

    if (details) {
        modalTitle.textContent = details.title;
        
        const content = `
            <div class="modal-service-details">
                <h3>${details.description}</h3>
                
                <div class="price-list">
                    <h4>Service Pricing</h4>
                    <ul>
                        ${details.priceList.map(item => `
                            <li>
                                <span>${item.service}</span>
                                <span>${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="features">
                    <h4>Service Features</h4>
                    <ul>
                        ${details.features.map(feature => `
                            <li>${feature}</li>
                        `).join('')}
                    </ul>
                </div>

                <a href="./contact.html" class="cta-button">Book Consultation</a>
            </div>
        `;
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    const allDetails = document.querySelectorAll('.service-details');
    
    // Close any open details first
    allDetails.forEach(detail => {
        if (detail.id !== detailsId && detail.classList.contains('active')) {
            detail.classList.remove('active');
        }
    });
    
    // Toggle the clicked details
    detailsElement.classList.toggle('active');
} 