<?php
     function loadPageData($pagesArray, $name) {

        $pageData = [];
        foreach ($pagesArray as $value) 
        {   
            if($value['name'] == $name) 
            {
                return $pageData = [
                    "name"              => $value['name'],
                    "menuLabel"         => $value['menuLabel'],
                    "angularController" => $value['angularController'],
                    "nameSection"       => $value['nameSection'],
                    "showInMenu"        => $value['showInMenu'],
                    "permissions"       => $value['permissions'],
                ];
            }
        }
        return [];
    }

    function e($array) {
        echo "<pre>";
            print_r($array);
        echo "</pre>";
    }

    function exitsPage($pagesArray, $page) {

        $exits = false;
        foreach ($pagesArray as $value) 
        {   
            if($value['name'] == $page) {
            # if(strstr($page, $value['name'])) {
                $exits = true;
                break;
            }
        }
        return $exits;
    }
    
    function generateMenuByUser($pagesArray, $name, $userSession) 
    {
        foreach ($pagesArray as $value) 
        {         
            $menuPermission = $value["permissions"];
            if(in_array($userSession["role"], $menuPermission)) 
            {
                if($value['showInMenu'] == "yes")
                {
                    if($value['name'] == $name) 
                    {
                        echo "<li class='active'><a href='{$value['name']}'>{$value['menuLabel']}</a></li>";
                    } else {
                        echo "<li><a href='{$value['name']}'>{$value['menuLabel']}</a></li>";
                    }        
                }          
            }
        }
    }

    function loadPage($pageData) 
    {
        global $pages;
        include_once "core/templates/common/header.php";
        # include_once "core/templates/common/menu.php";
        include_once "core/templates/common/menu-school.php";
        
        if(isSessionActive()) {

            # Permission for this Page
            $currentPageData = loadPageData($pages, $pageData['name']);
    
            # Check if the current user have permission to see the page
            # if not, a restricted page will be displayed
            if(in_array($_SESSION['role'], $currentPageData['permissions'])){
                include_once "core/templates/views/{$pageData['name']}.php";
            } else {
                include_once "core/templates/views/restringido.php";
            }

        } else {
            include_once "core/templates/views/login.php";
        }
        include_once "core/templates/common/footer.php";

        # safe exit
        exit;
    }

    function callApi($server, $rootApplication, $endPoint) 
    {
        $endPoint = "{$server}{$rootApplication}/$endPoint";
        $responseData = [];
        try
        {   
            # Get cURL resource
            $curl = curl_init();

            # Set some options 
            curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $endPoint,
                CURLOPT_HTTPHEADER => ['Accept:application/json']
            ));
            # Send the request & save response to $response
            $response = curl_exec($curl);

            // Check HTTP status code
            if (!curl_errno($curl)) {
                switch ($http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE)) {
                    case 200:  # OK
                        $responseData = json_decode($response);
                        break;
                    default:
                        # echo 'Unexpected HTTP code: ', $http_code, "\n";
                        # echo $response;
                        $responseData = json_decode($response);
                }
            }
            
            // Close request to clear up some resources
            curl_close($curl);


        } catch (Exception $ex) {
            printf("Error while sending request, reason: %s\n",$ex->getMessage());

        }
        return $responseData;
    }

    function closeSession() {
        session_unset();
        session_destroy(); 
    }

    function isExpiredSession($dateExpired) {
        $currentTime = date("Y-m-d G:i:s"); 
        return strtotime($currentTime) > strtotime($dateExpired);
    }

    function loadSession() {
        
        # Getting the Global Server Data
        global $server;

        if(!isSessionActive()) {
            if(isset($_REQUEST['formSubmited'])) 
            {   
                $userName = $_REQUEST["username"];
                $password = $_REQUEST["password"];

                $endPoint = "api/public/get/usuario/{$userName}/" . md5($password);
                $response = callApi($server["server"], $server["root"], $endPoint);

                if(isset($response->status) && $response->status == "success") 
                {
                    $dataUser = $response->usuario;

                    $_SESSION["userId"]         = $dataUser->userId;
                    $_SESSION["userName"]       = $dataUser->userName;
                    $_SESSION["fullName"]       = $dataUser->fullName;
                    $_SESSION["role"]           = $dataUser->role;
                    # $_SESSION["dateExpired"]    = $dataUser["dateExpired"];
                    $_SESSION["sessionLoaded"]  = "true";
                  
                    # Getting the Token of the session
                    $_SESSION["apiToken"] = $response->token;
                    
                    redirect("inicio");

                } else {
                    $_REQUEST['error'] = $response->msg;
                    closeSession();
                    registerLogin([
                        'status'      => 'fail',
                        'remote_addr' => $_SERVER['REMOTE_ADDR'],
                        'user_name'   => $_REQUEST['username'],
                        'user_pass'   => $_REQUEST['password']
                   ]);
                }
            }
        } else {
            if(isSessionActive()) {
                redirect("inicio");
            }
        }
    }

    function getSessionUserId() 
    {  
        return (isset($_SESSION["userId"])) ? $_SESSION["userId"] : 0;
    }
 
    function registerLogin($dataAccessObject) 
    {
        # Getting the Global Server Data
        global $server;
        
        $jsonData = json_encode($dataAccessObject);
        $jsonDataEncrypted = base64_encode($jsonData);
        
        $endPoint = "api/public/fnz/register-login/{$jsonDataEncrypted}";
        $response = callApi($server["server"], $server["root"], $endPoint);

        # print_r($response);
    }

    function isSessionActive() 
    {
        # Getting the Global Server Data
        global $server;
        
        if (isset($_SESSION["sessionLoaded"]) && 
            $_SESSION["sessionLoaded"] == "true" && 
            count($_SESSION) > 0) 
        {    
            $endPoint = "api/public/validate-session/{$_SESSION["apiToken"]}";
            $response = callApi($server["server"], $server["root"], $endPoint);
            
            if($response->status != 200) {
                closeSession();
                redirect("inicio?expired=true");
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function getRoleSistema() 
    {    
        if(isset($_SESSION["role"])) {
            return $_SESSION["role"];
        } else {
            return "invalid";
        }
    }

    function productionRedirect() 
    {
        if(strstr($_SERVER['HTTP_HOST'], PRODUCTION_DOMAIN)) 
        {
            if(!isset($_SERVER['REDIRECT_URL'])){
                header("Location: section/login");
            }
        }
    }

    function redirect($url) {
        echo "<script> window.location.href='{$url}'; </script>";
        exit;
    }
    
    function isExpiredSessionFromURL() {
        return isset($_SERVER['REQUEST_URI']) && 
            strstr($_SERVER['REQUEST_URI'], 'expired=true');
    }
