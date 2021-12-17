<?php
	$a = fopen("data.txt", "r");
	$b = fread($a,filesize("data.txt"));
	$c = json_decode($b);
	fclose($a);
	echo $c->date." ".$c->time;
?>