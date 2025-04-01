:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --dark-color: #292f36;
    --light-color: #f7fff7;
    --accent-color: #ff9f1c;
    --success-color: #2ecc71;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: var(--dark-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    color: var(--dark-color);
    font-size: 1.1rem;
}

.progress-steps {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    position: relative;
}

.progress-steps::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #e0e0e0;
    z-index: 1;
}

.progress-steps .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}

.progress-steps .step span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    font-weight: bold;
}

.progress-steps .step p {
    color: #999;
    font-size: 0.9rem;
}

.progress-steps .step.active span {
    background-color: var(--primary-color);
    color: white;
}

.progress-steps .step.active p {
    color: var(--dark-color);
    font-weight: 500;
}

section {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: none;
}

section.active-section {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

h2 {
    color: var(--primary-color);
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #e0e0e0;
    color: var(--dark-color);
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active {
    background-color: var(--primary-color);
    color: white;
}

.filter-btn:hover {
    background-color: #d0d0d0;
}

.filter-btn.active:hover {
    background-color: #ff5252;
}

.menu-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.menu-item {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.menu-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.menu-item .item-info {
    padding: 15px;
}

.menu-item h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--dark-color);
}

.menu-item p {
    color: #666;
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.menu-item .item-price {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-bottom: 15px;
    display: block;
}

.menu-item .item-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 5px;
}

.quantity-control button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: var(--secondary-color);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quantity-control button:hover {
    background-color: #3dbeb6;
}

.quantity-control span {
    width: 30px;
    text-align: center;
}

.add-to-cart {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: #ff5252;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    margin: 0 auto;
}

.btn-primary:hover {
    background-color: #ff5252;
}

.btn-secondary {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    margin: 0 auto;
}

.btn-secondary:hover {
    background-color: #fff0f0;
}

.order-summary {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

#order-items {
    margin-bottom: 20px;
}

.order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}

.order-item:last-child {
    border-bottom: none;
}

.order-item-info {
    flex: 1;
}

.order-item-name {
    font-weight: 500;
}

.order-item-price {
    color: var(--primary-color);
    font-weight: bold;
}

.order-item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.remove-item {
    color: #ff6b6b;
    cursor: pointer;
    font-size: 1.2rem;
}

.order-total {
    text-align: right;
    font-size: 1.2rem;
    padding-top: 10px;
    border-top: 2px solid #e0e0e0;
}

.order-total span {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.4rem;
}

.action-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.payment-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.payment-method {
    background-color: #f9f9f9;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.payment-method i {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

.payment-method p {
    font-weight: 500;
}

.payment-method:hover, .payment-method.selected {
    border-color: var(--primary-color);
    background-color: #fff0f0;
}

.hidden {
    display: none;
}

.pix-info {
    display: flex;
    gap: 30px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.pix-qr {
    text-align: center;
    flex: 1;
    min-width: 200px;
}

.pix-qr img {
    width: 200px;
    height: 200px;
    border: 1px solid #e0e0e0;
    margin-bottom: 10px;
}

.pix-key {
    flex: 2;
    min-width: 300px;
}

.pix-key-box {
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pix-key-box span {
    font-family: monospace;
    word-break: break-all;
}

#copy-pix-btn {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    white-space: nowrap;
}

#copy-pix-btn:hover {
    background-color: #3dbeb6;
}

.pix-warning {
    background-color: #fff3cd;
    color: #856404;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
}

#troco-section {
    margin-top: 20px;
}

#troco-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 1rem;
}

#troco-result {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.confirmation-box {
    text-align: center;
    padding: 40px 20px;
}

.confirmation-box i {
    font-size: 5rem;
    color: var(--success-color);
    margin-bottom: 20px;
}

.confirmation-box h2 {
    color: var(--success-color);
    margin-bottom: 20px;
}

#order-details {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin: 30px auto;
    max-width: 600px;
    text-align: left;
}

footer {
    text-align: center;
    padding: 20px;
    color: #666;
    font-size: 0.9rem;
}

footer p {
    margin-bottom: 5px;
}

footer i {
    margin-right: 5px;
}

@media (max-width: 768px) {
    .menu-items {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
    
    .pix-info {
        flex-direction: column;
    }
    
    .pix-qr, .pix-key {
        min-width: 100%;
    }
    
    .action-buttons {
        flex-direction: column;
    }
    
    .btn-primary, .btn-secondary {
        width: 100%;
    }
}