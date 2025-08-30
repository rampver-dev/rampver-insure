const navbar=document.createElement('div');navbar.innerHTML=`
<!-- developed by Erwin C. Baluyot (https://www.linkedin.com/in/erwincbaluyot/) -->
<!-- navbar LG -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-none d-md-block">
        <div class="container-fluid d-flex">
            <a class="navbar-brand" href="https://rampverinsure.com">
                <img src="./img/logos/rfibi-green.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto order-2">
                    <li class="nav-item mt-1 mr-2">
                        <a
                        > <h6 class="nav-link gs" style="color: #124735;">insure@rampver.com</h6></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a
                        > <h6 class="nav-link gs" style="color: #124735;">+632 8646-0422</h6></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- navbar LG -->
    <!-- navbar SM -->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-md-none pl-0">
        <div class="container-fluid d-flex">
           
            <a class="navbar-brand mr-auto ml-3" href="https://rampverinsure.com">
                <img src="./img/logos/rfibi-green.png" style="width: 90px;"></a>
          
    </nav>
<!-- navbar SM -->
	`;document.getElementById('navbarSet').appendChild(navbar);