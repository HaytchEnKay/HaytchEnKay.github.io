const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <div class="logo-container">
                <a href="/Group Project/index.html"><img src="img/Kreamy_Discounts.png" class="brand-logo" alt=""></a>
            </div>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Looking for a specific deal?">
                    <button class="search-btn">search</button>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="/Group Project/index.html" class="link">Home</a></li>
                <li class="link-item"><a href="/Group Project/tech.html" class="link">Tech</a></li>
                <li class="link-item"><a href="/Group Project/coming-soon.html" class="link">Fashion</a></li>
                <li class="link-item"><a href="/Group Project/coming-soon.html" class="link">Food & Drink</a></li>
            </ul>
        </div>
    `;
}

createNav();