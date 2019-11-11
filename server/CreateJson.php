<?php
    include  "./SuperLigStandings.php";
    use XnCN\Standings\SuperLigStandings;
    $api  =  new SuperLigStandings();
    $standings  =  $api->getStandings();
    $topArray = array();
 foreach ($standings  as  $team) {
     $tempArray = array();
	    $tempArray["teamname"] =  $team->name;
	    $tempArray["shortname"] = $team->shortName;
	    $tempArray["position"] = $team->position;
        $tempArray["point"] = $team->points;
        $tempArray["against"] = $team->against;
        $tempArray["average"] = $team->average;
        $tempArray["lost"] = $team->lost;
        $tempArray["played"] = $team->played;
        $tempArray["won"] = $team->won;
        $tempArray["logo"] = $team->logo;

        array_push($topArray, $tempArray);
 }
$json = json_encode($topArray);
$jsonFile = fopen("cache.json", "w") or die("Unable to open file!");
fwrite($jsonFile, $json);
fclose($jsonFile);
?>