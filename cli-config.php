<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;
require_once 'api/bootstrap.php';
return ConsoleRunner::createHelperSet($entityManager);