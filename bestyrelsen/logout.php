<?php
session_start();
session_destroy();
header('Location: /bestyrelsen/login.php');
exit;
