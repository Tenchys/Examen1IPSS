<?php
    require __DIR__.'/Adapter/CallAPi.php';
    header('Content-Type: application/json');

    $response = CallApiBearer('https://ciisa.coningenio.cl/v1/services/', 'ciisa');

    echo $response;
?>