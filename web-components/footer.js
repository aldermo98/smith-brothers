class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="widget-section padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 sm-padding">
                            <div class="widget-content">
                                <a href="#"><img src="img/logo-dark.png" alt="brand"></a>
                                <p>Locally owned, Family operated.</p>
                                <p>❤️ Proudly serving Seattle-Tacoma metro area</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 sm-padding">
                            <div class="widget-content">
                                <h4>Company</h4>
                                <ul class="widget-links">
                                    <li><a href="/about-us.html">About Us</a></li>
                                    <li><a href="/services.html">Our Services</a></li>
                                    <li><a href="/gallery.html">Before & Afters</a></li>
                                    <li><a href="/free-estimate">Free Estimate</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 sm-padding ml-auto">
                            <div class="widget-content">
                                <h4>Contact Us</h4>
                                <div><a href="mailto:info@support.smithbrothersdevelopment.homes"><i class="fa fa-envelope mr-2"></i> info@smithbrothersdevelopment.homes</a></div>
                                <div><a href="tel:2532851656"><i class="fa fa-phone mr-2"></i> +1 (253) 285-1656</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!--/.widget-section-->
        
            <footer class="footer-section align-center">
                <div class="container">
                    <p>&copy; 2025 Smith Brothers Development LLC Powered by <a href="https://neoboltsystems.com/" target="_blank">Neobolt Systems</a></p>
                </div>
            </footer><!-- /.footer-section -->
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
