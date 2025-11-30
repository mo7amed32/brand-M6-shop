// js/main.js

// 1. بيانات المنتجات (عشان تظهر في كل الصفحات)
const products = [
    { id: 1, name: "جاكيت جلد كلاسيك", price: 1200, category: "جاكيتات", img: "https://th.bing.com/th/id/OIP.5GgLopeU1Q4cG2oJOu29IwAAAA?w=208&h=285&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", desc: "جاكيت جلد طبيعي عالي الجودة، مناسب للشتاء." },
    { id: 2, name: "تيشيرت قطن أبيض", price: 350, category: "تيشيرتات", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", desc: "تيشيرت قطن 100% مريح جداً للصيف." },
    { id: 3, name: "بنطلون جينز أزرق", price: 600, category: "بناطيل", img: "https://th.bing.com/th/id/OIP.6WDWFLcfqdk1tgAoszpPaAHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", desc: "بنطلون جينز خامة مستوردة." },
    { id: 4, name: "حذاء رياضي", price: 1500, category: "أحذية", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", desc: "حذاء مريح جداً للجري." },
    { id: 5, name: "ساعة يد", price: 2500, category: "اكسسوارات", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", desc: "ساعة شيك جداً." },
    { id: 6, name: "نظارة شمسية", price: 400, category: "اكسسوارات", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", desc: "حماية كاملة من الشمس." },
];

window.allProducts = products; // عشان نقدر نستخدمهم في صفحة التفاصيل

// 2. كود تشغيل القائمة (التلت شرط)
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    updateCartCount();
    renderShop();
});

// 3. تحديث العداد
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => el.innerText = cart.length);
}

// 4. إضافة للسلة
window.addToCart = function(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === id);
    if (!cart.some(item => item.id === id)) {
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert("تمت الإضافة للسلة!");
    } else {
        alert("المنتج موجود بالفعل");
    }
};

// 5. عرض المنتجات في صفحة Shop
function renderShop() {
    const shopGrid = document.getElementById('shop-grid');
    if (shopGrid) {
        shopGrid.innerHTML = products.map(product => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img src="${product.img}" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg">${product.name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-brand-gold font-bold">${product.price} ج.م</span>
                        <div>
                            <a href="details.html?id=${product.id}" class="text-blue-600 text-sm ml-2">تفاصيل</a>
                            <button onclick="addToCart(${product.id})" class="bg-brand-dark text-white px-3 py-1 rounded text-sm"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}