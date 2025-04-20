<?php
        function CallApiBearer($url, $bearerToken): string{
            $options = array('http' => array(
                'method' => 'GET',
                'header' => 'Authorization: Bearer '.$bearerToken
            ));
            $context = stream_context_create($options);
            $response = file_get_contents($url, false, $context);
    
            return $response;
        }
?>