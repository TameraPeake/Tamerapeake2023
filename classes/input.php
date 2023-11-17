<?php
require_once './Projects/Projects.php';
$json = file_get_contents('php://input');
$data = json_decode($json, true); 
$projects = new Projects($data);
$grabInfo = $projects->grabProjects($projects);


// $players = new Players($data); //doesn't work with protected classes, use Object::getInstance() instead
// $players = new Players($data); 
// $playerInfo = $players->GetPlayerInfo($players); 
// $playerStatus = $players->GetPlayerStatus($players, $playerInfo);

$returnData = json_encode($grabInfo);
echo $returnData;
exit();
?>