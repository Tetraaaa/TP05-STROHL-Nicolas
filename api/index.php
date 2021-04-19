<?php
use Slim\Http\Response as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/bootstrap.php';

$app = AppFactory::create();

const JWT_SECRET = "rendezmoimeschaussures";

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path"=> ["/api"],
    "ignore" => ["/api/login", "/api/register"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type",
        "application/json")->getBody()->write(json_encode($data));
    }
];

$app->get('/api/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

$app->post('/api/login', function (Request $request, Response $response, array $args) {
    
    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $payload = [
    'username' => "testas",
    'iat' => $issuedAt,
    'exp' => $expirationTime
    ];

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

    return $response;
});

$app->get('/api/products', function (Request $request, Response $response, array $args) {

    global $entityManager;
    $productRepository = $entityManager->getRepository('Product');
    $products = $productRepository->findAll();

    $data = [];
    foreach ($products as $p) {
        $elem = [];
        $elem ["id"] = $p->getId();
        $elem ["titre"] = $p->getTitre();
        $elem ["prix"] = $p->getPrix();
        $elem ["description"] = $p->getDescription();
        array_push ($data,$elem);
    }

    $response = $response
    ->withHeader("Content-Type", "application/json;charset=utf-8");
    $response->getBody()->write(json_encode($data));
    return $response;
});

$app->addErrorMiddleware(true, true, true);
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run();