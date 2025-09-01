const footer=document.createElement('div');footer.innerHTML=`
<!-- start footer -->
<div class="footer">
    <br><br>
    <div class="row mx-2">
        <!-- Left Column -->
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div class="text-center">
                <img src="./img/logos/rfibi-green.png" style="width:150px;" loading="lazy" />
            </div>
            <p class="text-rampver gs text-center mt-3">© RF Insurance Brokers, Inc. 2025 | All Rights Reserved</p>
        </div>

        <!-- Right Column -->
        <div class="col-lg-6 col-md-6 col-sm-12 footer-text">
            <p class="text-rampver text-center gs mb-0">14B Petron Megaplaza Building,</p>
            <p class="text-rampver text-center gs mb-0">Buendia Avenue, Makati City 1227</p>
            <p class="text-rampver text-center gs mb-0">Metro Manila, Philippines</p>
            <p class="text-rampver text-center gs mb-0">(+632) 8646-0422</p>
            <p class="text-rampver text-center gs mb-0">insure@rampver.com</p>
        </div>
    </div>

    <div class="container my-4">
        <p class="fw-bold text-center gsBold text-rampver">Rampver Insure is registered with:</p>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="d-flex justify-content-center align-items-center flex-wrap">
                    <div class="p-3">
                        <img src="./img/regulator/sec.jpg" class="img-fluid" alt="SEC" style="max-height:80px;">
                    </div>
                    <div class="p-3">
                        <img src="./img/regulator/ic.jpg" class="img-fluid" alt="IC" style="max-height:80px;">
                    </div>
                    <div class="p-3">
                        <img src="./img/regulator/amlc.jpg" class="img-fluid" alt="AMLC" style="max-height:80px;">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bottombar"><br></div>
</div>
<!-- end footer -->
<!-- developed by Erwin C. Baluyot (https://www.linkedin.com/in/erwincbaluyot/) -->

	`;document.getElementById('footerSet').appendChild(footer);