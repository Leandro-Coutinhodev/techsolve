// Dados do cardápio
const menuItems = [
    // {
    //     id: 1,
    //     name: "Bruschetta",
    //     description: "Pão italiano torrado com tomate fresco, manjericão e azeite",
    //     price: 18.90,
    //     category: "entrada",
    //     image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 2,
    //     name: "Carpaccio",
    //     description: "Finas fatias de carne crua com rúcula, parmesão e molho de mostarda",
    //     price: 32.50,
    //     category: "entrada",
    //     image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 3,
    //     name: "Filé Mignon",
    //     description: "Filé mignon grelhado, acompanha batatas rústicas e legumes",
    //     price: 68.90,
    //     category: "principal",
    //     image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 4,
    //     name: "Risoto de Cogumelos",
    //     description: "Risoto cremoso com cogumelos frescos e parmesão",
    //     price: 42.90,
    //     category: "principal",
    //     image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 5,
    //     name: "Salmão Grelhado",
    //     description: "Salmão grelhado com molho de maracujá e arroz de açafrão",
    //     price: 58.50,
    //     category: "principal",
    //     image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 6,
    //     name: "Água Mineral",
    //     description: "Garrafa de 500ml",
    //     price: 5.00,
    //     category: "bebida",
    //     image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 7,
    //     name: "Refrigerante",
    //     description: "Lata 350ml - Escolha o sabor",
    //     price: 6.50,
    //     category: "bebida",
    //     image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 8,
    //     name: "Suco Natural",
    //     description: "Copo 300ml - Laranja, abacaxi ou maracujá",
    //     price: 8.90,
    //     category: "bebida",
    //     image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 9,
    //     name: "Tiramisu",
    //     description: "Sobremesa italiana com café, mascarpone e biscoitos",
    //     price: 22.90,
    //     category: "sobremesa",
    //     image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // },
    // {
    //     id: 10,
    //     name: "Petit Gateau",
    //     description: "Bolo de chocolate com recheio cremoso e sorvete",
    //     price: 25.50,
    //     category: "sobremesa",
    //     image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    // }
    {
        "id": 1,
        "name": "Pão de Queijo",
        "description": "Deliciosos pãezinhos de queijo crocantes por fora e macios por dentro",
        "price": 14.90,
        "category": "entrada",
        "image": "https://images.unsplash.com/photo-1598373182136-ade6c58017d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 2,
        "name": "Bolinho de Bacalhau",
        "description": "Tradicional bolinho de bacalhau frito, crocante por fora e macio por dentro",
        "price": 29.90,
        "category": "entrada",
        "image": "https://images.unsplash.com/photo-1550617931-e17a7e80c2f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 3,
        "name": "Feijoada Completa",
        "description": "Feijão preto com carnes suínas, arroz, couve refogada, laranja e farofa",
        "price": 54.90,
        "category": "principal",
        "image": "https://images.unsplash.com/photo-1587452202170-018d3c1630f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 4,
        "name": "Picanha na Chapa",
        "description": "Suculenta picanha grelhada, servida com arroz, feijão tropeiro e mandioca frita",
        "price": 79.90,
        "category": "principal",
        "image": "https://images.unsplash.com/photo-1608032076980-bd67ed48b4de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 5,
        "name": "Moqueca de Peixe",
        "description": "Peixe cozido com leite de coco, azeite de dendê, tomate, pimentão e coentro",
        "price": 62.50,
        "category": "principal",
        "image": "https://images.unsplash.com/photo-1627309301744-dfdcf0c45dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 6,
        "name": "Guaraná",
        "description": "Refrigerante típico brasileiro, lata 350ml",
        "price": 7.50,
        "category": "bebida",
        "image": "https://images.unsplash.com/photo-1600185365927-3d5b70a5ce65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 7,
        "name": "Caipirinha",
        "description": "Cachaça, limão, açúcar e gelo",
        "price": 18.90,
        "category": "bebida",
        "image": "https://images.unsplash.com/photo-1592211982444-28530f22d1fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 8,
        "name": "Suco de Açaí",
        "description": "Suco natural de açaí batido com banana e guaraná",
        "price": 12.90,
        "category": "bebida",
        "image": "https://images.unsplash.com/photo-1525059337994-6f2a1311b4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 9,
        "name": "Pudim de Leite",
        "description": "Pudim cremoso de leite condensado com calda de caramelo",
        "price": 19.90,
        "category": "sobremesa",
        "image": "https://images.unsplash.com/photo-1592233448407-08fcb6b6f7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        "id": 10,
        "name": "Brigadeiro Gourmet",
        "description": "Clássico brigadeiro brasileiro feito com chocolate belga",
        "price": 9.90,
        "category": "sobremesa",
        "image": "https://images.unsplash.com/photo-1600891964091-35b37ab84b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

// Variáveis globais
let cart = [];
let currentOrder = {};
let paymentMethod = '';

// Elementos do DOM
const menuItemsContainer = document.getElementById('menu-items');
const orderItemsContainer = document.getElementById('order-items');
const totalValueElement = document.getElementById('total-value');
const cardapioSection = document.getElementById('cardapio-section');
const pedidoSection = document.getElementById('pedido-section');
const pagamentoSection = document.getElementById('pagamento-section');
const confirmacaoSection = document.getElementById('confirmacao-section');
const verPedidoBtn = document.getElementById('ver-pedido-btn');
const voltarCardapioBtn = document.getElementById('voltar-cardapio-btn');
const finalizarPedidoBtn = document.getElementById('finalizar-pedido-btn');
const voltarPedidoBtn = document.getElementById('voltar-pedido-btn');
const confirmarPagamentoBtn = document.getElementById('confirmar-pagamento-btn');
const novoPedidoBtn = document.getElementById('novo-pedido-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const paymentMethods = document.querySelectorAll('.payment-method');
const pixDetails = document.getElementById('pix-details');
const trocoSection = document.getElementById('troco-section');
const trocoInput = document.getElementById('troco-input');
const trocoResult = document.getElementById('troco-result');
const copyPixBtn = document.getElementById('copy-pix-btn');
const pixKey = document.getElementById('pix-key');
const confirmationMessage = document.getElementById('confirmation-message');
const orderDetails = document.getElementById('order-details');
const steps = document.querySelectorAll('.step');

// Carregar pedidos salvos
function loadOrders() {
    fetch('pedidos.json')
        .then(response => response.json())
        .then(data => {
            console.log('Pedidos carregados:', data);
        })
        .catch(error => {
            console.log('Nenhum pedido encontrado ou erro ao carregar:', error);
        });
}

// Salvar pedido no arquivo JSON
function saveOrder(order) {
    fetch('pedidos.json')
        .then(response => response.json())
        .then(orders => {
            orders.push(order);
            return fetch('pedidos.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orders),
            });
        })
        .catch(error => {
            // Se o arquivo não existir, cria um novo com o pedido atual
            const orders = [order];
            return fetch('pedidos.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orders),
            });
        })
        .then(response => {
            console.log('Pedido salvo com sucesso');
        })
        .catch(error => {
            console.error('Erro ao salvar pedido:', error);
        });
}

// Inicializar a aplicação
function init() {
    loadOrders();
    renderMenuItems();
    setupEventListeners();
}

// Renderizar os itens do menu
function renderMenuItems(category = 'all') {
    menuItemsContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.dataset.id = item.id;
        itemElement.dataset.category = item.category;
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="item-price">R$ ${item.price.toFixed(2)}</span>
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="decrease-btn">-</button>
                        <span class="quantity">0</span>
                        <button class="increase-btn">+</button>
                    </div>
                    <button class="add-to-cart">Adicionar</button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(itemElement);
    });
}

// Atualizar o carrinho
function updateCart() {
    orderItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        totalValueElement.textContent = 'R$ 0,00';
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        
        itemElement.innerHTML = `
            <div class="order-item-info">
                <p class="order-item-name">${item.name} <span class="order-item-quantity">x${item.quantity}</span></p>
                <p class="order-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="order-item-actions">
                <i class="fas fa-minus-circle decrease-item"></i>
                <i class="fas fa-plus-circle increase-item"></i>
                <i class="fas fa-trash-alt remove-item"></i>
            </div>
        `;
        
        orderItemsContainer.appendChild(itemElement);
    });
    
    calculateTotal();
}

// Calcular total do pedido
function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalValueElement.textContent = `R$ ${total.toFixed(2)}`;
    return total;
}

// Adicionar item ao carrinho
function addToCart(itemId, quantity = 1) {
    const item = menuItems.find(i => i.id === itemId);
    
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity
        });
    }
    
    updateCart();
}

// Remover item do carrinho
function removeFromCart(itemId, removeAll = false) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    
    if (itemIndex === -1) return;
    
    if (removeAll || cart[itemIndex].quantity <= 1) {
        cart.splice(itemIndex, 1);
    } else {
        cart[itemIndex].quantity -= 1;
    }
    
    updateCart();
}

// Configurar event listeners
function setupEventListeners() {
    // Filtros do menu
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderMenuItems(button.dataset.category);
        });
    });
    
    // Event delegation para os itens do menu
    menuItemsContainer.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.menu-item');
        if (!menuItem) return;
        
        const itemId = parseInt(menuItem.dataset.id);
        
        if (e.target.classList.contains('increase-btn')) {
            const quantityElement = menuItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
        } else if (e.target.classList.contains('decrease-btn')) {
            const quantityElement = menuItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
            }
        } else if (e.target.classList.contains('add-to-cart')) {
            const quantity = parseInt(menuItem.querySelector('.quantity').textContent);
            if (quantity > 0) {
                addToCart(itemId, quantity);
                menuItem.querySelector('.quantity').textContent = '0';
            }
        }
    });
    
    // Event delegation para os itens do carrinho
    orderItemsContainer.addEventListener('click', (e) => {
        const orderItem = e.target.closest('.order-item');
        if (!orderItem) return;
        
        const itemId = parseInt(orderItem.dataset.id);
        
        if (e.target.classList.contains('remove-item')) {
            removeFromCart(itemId, true);
        } else if (e.target.classList.contains('decrease-item')) {
            removeFromCart(itemId);
        } else if (e.target.classList.contains('increase-item')) {
            addToCart(itemId);
        }
    });
    
    // Navegação entre seções
    verPedidoBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio. Adicione itens antes de finalizar.');
            return;
        }
        
        cardapioSection.classList.remove('active-section');
        pedidoSection.classList.add('active-section');
        
        // Atualizar passos
        steps[0].classList.remove('active');
        steps[1].classList.add('active');
    });
    
    voltarCardapioBtn.addEventListener('click', () => {
        pedidoSection.classList.remove('active-section');
        cardapioSection.classList.add('active-section');
        
        // Atualizar passos
        steps[1].classList.remove('active');
        steps[0].classList.add('active');
    });
    
    finalizarPedidoBtn.addEventListener('click', () => {
        pedidoSection.classList.remove('active-section');
        pagamentoSection.classList.add('active-section');
        
        // Atualizar passos
        steps[1].classList.remove('active');
        steps[2].classList.add('active');
    });
    
    voltarPedidoBtn.addEventListener('click', () => {
        pagamentoSection.classList.remove('active-section');
        pedidoSection.classList.add('active-section');
        
        // Atualizar passos
        steps[2].classList.remove('active');
        steps[1].classList.add('active');
    });
    
    // Métodos de pagamento
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            method.classList.add('selected');
            paymentMethod = method.dataset.method;
            
            // Mostrar detalhes específicos do método
            if (paymentMethod === 'pix') {
                pixDetails.classList.remove('hidden');
                trocoSection.classList.add('hidden');
            } else if (paymentMethod === 'dinheiro') {
                pixDetails.classList.add('hidden');
                trocoSection.classList.remove('hidden');
                updateTroco();
            } else {
                pixDetails.classList.add('hidden');
                trocoSection.classList.add('hidden');
            }
        });
    });
    
    // Cálculo de troco
    trocoInput.addEventListener('input', updateTroco);
    
    // Copiar chave PIX
    copyPixBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(pixKey.textContent)
            .then(() => {
                const originalText = copyPixBtn.innerHTML;
                copyPixBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                setTimeout(() => {
                    copyPixBtn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    });
    
    // Confirmar pagamento
    confirmarPagamentoBtn.addEventListener('click', () => {
        if (!paymentMethod) {
            alert('Por favor, selecione um método de pagamento');
            return;
        }
        
        if (paymentMethod === 'dinheiro') {
            const valorRecebido = parseFloat(trocoInput.value);
            const total = calculateTotal();
            
            if (isNaN(valorRecebido)) {
                alert('Por favor, informe o valor recebido para cálculo do troco');
                return;
            }
            
            if (valorRecebido < total) {
                alert(`O valor recebido (R$ ${valorRecebido.toFixed(2)}) é menor que o total do pedido (R$ ${total.toFixed(2)}).`);
                return;
            }
        }
        
        // Criar o pedido
        const total = calculateTotal();
        currentOrder = {
            id: Date.now(),
            items: [...cart],
            total: total,
            paymentMethod: paymentMethod,
            date: new Date().toISOString(),
            status: 'confirmado'
        };
        
        // Salvar o pedido
        saveOrder(currentOrder);
        
        // Mostrar confirmação
        showConfirmation();
    });
    
    // Novo pedido
    novoPedidoBtn.addEventListener('click', () => {
        cart = [];
        currentOrder = {};
        paymentMethod = '';
        
        // Resetar UI
        updateCart();
        trocoInput.value = '';
        paymentMethods.forEach(m => m.classList.remove('selected'));
        pixDetails.classList.add('hidden');
        trocoSection.classList.add('hidden');
        
        // Voltar para o cardápio
        confirmacaoSection.classList.remove('active-section');
        cardapioSection.classList.add('active-section');
        
        // Resetar passos
        steps.forEach((step, index) => {
            if (index === 0) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    });
}

// Atualizar cálculo de troco
function updateTroco() {
    const valorRecebido = parseFloat(trocoInput.value);
    const total = calculateTotal();
    
    if (isNaN(valorRecebido)) {
        trocoResult.textContent = 'Troco: R$ 0,00';
        return;
    }
    
    const troco = valorRecebido - total;
    trocoResult.textContent = `Troco: R$ ${troco.toFixed(2)}`;
}

// Mostrar confirmação de pedido
function showConfirmation() {
    pagamentoSection.classList.remove('active-section');
    confirmacaoSection.classList.add('active-section');
    
    // Atualizar passos
    steps[2].classList.remove('active');
    steps[3].classList.add('active');
    
    // Mensagem de confirmação baseada no método de pagamento
    let message = '';
    if (paymentMethod === 'pix') {
        message = 'Seu pedido foi recebido e está sendo preparado. O pagamento via PIX será processado em breve. Obrigado por escolher o Restaurante Sabores!';
    } else if (paymentMethod === 'dinheiro') {
        message = 'Seu pedido foi recebido e está sendo preparado. O troco será entregue quando seu pedido estiver pronto. Obrigado por escolher o Restaurante Sabores!';
    } else {
        message = 'Seu pedido foi recebido e está sendo preparado. O pagamento será processado quando seu pedido estiver pronto. Obrigado por escolher o Restaurante Sabores!';
    }
    
    confirmationMessage.textContent = message;
    
    // Detalhes do pedido
    let orderHTML = `
        <p><strong>Número do Pedido:</strong> #${currentOrder.id}</p>
        <p><strong>Data:</strong> ${new Date(currentOrder.date).toLocaleString()}</p>
        <p><strong>Método de Pagamento:</strong> ${getPaymentMethodName(currentOrder.paymentMethod)}</p>
        <h3>Itens:</h3>
        <ul>
    `;
    
    currentOrder.items.forEach(item => {
        orderHTML += `
            <li>${item.name} - ${item.quantity}x - R$ ${(item.price * item.quantity).toFixed(2)}</li>
        `;
    });
    
    orderHTML += `
        </ul>
        <p class="order-total-confirm"><strong>Total:</strong> R$ ${currentOrder.total.toFixed(2)}</p>
    `;
    
    orderDetails.innerHTML = orderHTML;
}

// Obter nome do método de pagamento
function getPaymentMethodName(method) {
    switch (method) {
        case 'dinheiro': return 'Dinheiro';
        case 'cartao': return 'Cartão de Crédito/Débito';
        case 'pix': return 'PIX';
        default: return method;
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);