<!-- COMMON SCRIPTS -->
<script src="assets/js/jquery-3.2.1.min.js"></script>
<script src="assets/js/common_scripts.min.js"></script>
<script src="js/functions.js"></script>

<!-- Wizard script -->
<script src="assets/js/survey_func.js"></script>

<script>
    
    function uploaddoc() {
        // var url = $('#uploadform').attr('action');
        var form = $('#documentupload')[0];
        var document = new FormData(form);

        $.ajax({
            type: "post",
            url: "upload.php",
            contentType: false,
            processData: false,
            enctype: 'multipart/form-data',
            data:  document,
            success:function(msg){

                if(msg == '1'){
                    $('.response').html('<b style="color: white;">Document Uploaded Successfully</b>');
                    $('#documentupload').trigger("reset");
                }else{
                    $('.response').html('<b>Document Uploaded Failed</b>');
                }
            },
            error: function (request, status, error) {
                $('.response').html('<b>Document Uploaded Failed</b>');
            }
        });
    }
</script>
</body>
</html>