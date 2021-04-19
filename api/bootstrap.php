<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set("Europe/Paris");
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-52-50-171-4.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'skjepssquxjtqc',
'password' => 'b4b9eafb74f712ed16156b2caaaabf6fa3f35a0d1f290694ce429cd7aa9bea62',
'dbname' => 'dcjvhb7hqv0qa2',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);