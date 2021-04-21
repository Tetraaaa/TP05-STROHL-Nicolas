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
    global $entityManager;

    $parsedBody = $request->getParsedBody();
    if(array_key_exists("login", $parsedBody) && array_key_exists("password", $parsedBody))
    {
        $accountRepository = $entityManager->getRepository("Account");
        $currentAccount = $entityManager->findOneBy(["login"=> $parsedBody["login"]]);
        if($currentAccount)
        {
            if($currentAccount["password"] == $parsedBody["password"])
            {
                $issuedAt = time();
                $expirationTime = $issuedAt + 600;
                $payload = [
                'username' => $parsedBody["login"],
                'iat' => $issuedAt,
                'exp' => $expirationTime
                ];
            
                $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
                $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
            
                return $response;
            }
        }   
    }
    return $response->withJson("Identifiants incorrects.", 400);
});

$app->get('/api/init', function (Request $request, Response $response, array $args) {

    global $entityManager;

    $entityManager->createNativeQuery("TRUNCATE TABLE Product").executeUpdate();
    $entityManager->createNativeQuery("TRUNCATE TABLE Account").executeUpdate();

    $products = [
        ["id"=>1, "name"=>"Porte éponge en laiton", "price"=>30],
        ["id"=>2, "name"=>"Sac de cinq kilos de sel", "price"=>30],
        ["id"=>3, "name"=>"Bouteille d'eau remplie d'eau", "price"=>1],
        ["id"=>4, "name"=>"Pass navigo d'occasion", "price"=>5],
        ["id"=>5, "name"=>"Paquet de 10 Twix presque neuf", "price"=>4],
        ["id"=>6, "name"=>"Courroie de distribution + pompe à eau", "price"=>80],
        ["id"=>7, "name"=>"Naruto Tome 12", "price"=>5],
        ["id"=>8, "name"=>"Barbecue à charbon de bois en acier inoxydable", "price"=>15]
    ];

    foreach($products as $p)
    {
        $product = new Product();
        
        $product->setTitre($p["name"]);
        $product->setPrix($p["price"]);
        $product->setDescription("");
        $entityManager->persist($product);
    }

    $account = new Account();
    $account->setLogin("tetra");
    $account->setPassword("rootroot");
    $entityManager->persist($account);
    $entityManager->flush();
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