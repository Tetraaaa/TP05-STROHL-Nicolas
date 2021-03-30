<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

const JWT_SECRET = "rendezmoimeschaussures";

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path"=> ["/"],
    "ignore" => ["/login", "/register"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type",
        "application/json")->getBody()->write(json_encode($data));
    }
];

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

$app->post('/login', function (Request $request, Response $response, array $args) {
    
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

$app->get('/products', function (Request $request, Response $response, array $args) {

    $products = json_decode(`[
        {"id":1, "name":"Porte éponge en laiton", "price":30},
        {"id":2, "name":"Sac de cinq kilos de sel", "price":15},
        {"id":3, "name":"Bouteille d'eau remplie d'eau", "price":1},
        {"id":4, "name":"Pass navigo d'occasion", "price":5},
        {"id":5, "name":"Paquet de 10 Twix presque neuf", "price":4},
        {"id":6, "name":"Courroie de distribution + pompe à eau", "price":80},
        {"id":7, "name":"Naruto Tome 12", "price":5},
        {"id":8, "name":"Barbecue à charbon de bois en acier inoxydable", "price":150}
    ]`);    
    $response->getBody()->write($products);
    return $response;
});

$app->addErrorMiddleware(true, true, true);
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run();