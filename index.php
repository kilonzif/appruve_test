<?php include('layouts/app.php') ?>
<style>

</style>
<div class="wrapper_centering">
    <div class="container_centering">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-6 col-lg-6 d-flex align-items-center">
                    <div class="main_title_1 container_smile">
                        <h4 style="color: white;font-size: 2.5rem"> Document Upload</h4>
                        <p><em> Simple Page for Document Upload</em></p>
                    </div>
                </div>
                <!-- /col -->
                <div class="col-xl-5 col-lg-5">
<!--                    <div id="wizard_container">-->
<!--                        <div id="top-wizard">-->
<!--                            <div id="progressbar"></div>-->
<!--                        </div>-->
                        <!-- /top-wizard -->
                        <span class="response"></span>
                        <form id="documentupload" method="POST" enctype="multipart/form-data" >

                            <label for="name">Select File to Upload</label>
                            <input type="file" name="document" id="document"  class="form-control required">

                            <input type="hidden" name="upload">

                            <div id="bottom-wizard">
                                <button onclick="uploaddoc()"  type="button"  class="payment">Upload</button>
                            </div>
                            <!-- /bottom-wizard -->

                        </form>
<!--                    </div>-->
                    <!-- /Wizard container -->
                </div>
                <!-- /col -->
            </div>
        </div>
        <!-- /row -->
    </div>
    <!-- /container_centering -->
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    © <?php echo date('Y'); ?> Upload Challenge
                </div>
            </div>
            <!-- /row -->
        </div>
        <!-- /container-fluid -->
    </footer>
    <!-- /footer -->
</div>

<!-- /container-fluid -->
<?php include('layouts/end-script.php');?>
