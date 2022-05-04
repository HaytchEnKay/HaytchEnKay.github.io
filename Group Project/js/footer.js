const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <script src="js/form.js"></script>
    <div class="form">
        <div id="form-description">
            <p>Subscribe below to get access to exclusive updates and offers!</p>
        </div>
        <form id="Subscriber-form">
            <input type="text" id="subscriber_name" name="username" placeholder="Full Name" required>
            <input type="text" id="subscriber_email" name="useremail" placeholder="Email" required>
            <input type="button" id="subscribe_action" name="useraction" placeholder="SUBSCRIBE" value="SUBSCRIBE">
        </form>
        
    </div>
    <div class="footer-content">
        <img src="img/Kreamy_Discounts_Kream.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Quick Links</li>
                <li><a href="/Group Project/index.html" class="footer-link">Home</a></li>
                <li><a href="/Group Project/tech.html" class="footer-link">Tech</a></li>
                <li><a href="/Group Project/coming-soon.html" class="footer-link">Fashion</a></li>
                <li><a href="/Group Project/coming-soon.html" class="footer-link">Food & Drink</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Formal Links</li>
                <li><a href="/Group Project/coming-soon.html" class="footer-link">Disclaimer</a></li>
                <li><a href="/Group Project/coming-soon.html" class="footer-link">Privacy Policy</a></li>
                <li><a href="/Group Project/coming-soon.html" class="footer-link">Terms & Conditions</a></li>
            </ul>
        </div>
    </div>
    </div>
    <p class="footer-credit">Most Definitely Not Copyright Kreamy Discounts Limited</p>
    `;
}

createFooter();