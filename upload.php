<?php

$user_id = rand(100,999);


if (isset($_POST['upload']))
{

    $post_data = array(
        'document' => file_get_contents($_FILES['document']['tmp_name']),
        'user_id' => $user_id,
    );



    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => 'https://stage.appruve.co/v1/verifications/test/file_upload',
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $post_data,
    ));

    $resp = curl_exec($curl);
    curl_close($curl);

    if($resp == ""){
        echo '1';
    }else{
        echo '0';
    }
}
?>