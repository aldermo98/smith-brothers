class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header id="header" class="header-section">
            <div class="container">
                <nav class="navbar ">
                    <a href="index.html" class="navbar-brand"><img src="img/logo-dark.png" alt="Arkit"></a>
                    <div class="d-flex menu-wrap">
                       <div id="mainmenu" class="mainmenu">
                            <ul class="nav">
                                <li><a data-scroll class="nav-link active" href="index.html">Home</a></li>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li>
                                    <a href="services-areas.html">Service Areas</a>
                                    <ul>
                                        <li><a href="service-areas/seattle.html">Seattle</a></li>
                                        <li><a href="service-areas/tacoma.html">Tacoma</a></li>
                                    </ul>
                                </li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li class="phone"><a href="/free-estimate">Free Estimate</a></li>
                            </ul>
                       </div>
                    </div>
                </nav>
            </div>
		</header> <!--.header-section -->
		
        <div class="header-height"></div>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
