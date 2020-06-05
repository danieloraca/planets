<?php

namespace App\Controller;

use App\Entity\Planet;
use App\Form\PlanetType;
use App\Repository\PlanetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class PlanetController extends AbstractController
{
    /** @var PlanetRepository */
    private $planetRepository;

    public function __construct(PlanetRepository $planetRepository)
    {
        $this->planetRepository = $planetRepository;
    }

    /**
     * @Route("/planet/getPlanets", name="planet_getPlanets")
     */
    public function getPlanets():JsonResponse
    {
        $planets = $this->planetRepository->findAll();

        $transformed = [];
        foreach ($planets as $planet) {
            $transformed[] = [
                'id' => $planet->getId(),
                'name' => $planet->getName(),
                'moons' => $planet->getMoons(),
                'diameter' => $planet->getDiameter(),
                'distance_from_sun' => $planet->getDistanceFromSun(),
                'img' => $planet->getImg(),
                'wiki_url' => $planet->getWikiUrl()
            ];
        }

        return new JsonResponse(array(
            'planets' => $transformed
        ));
    }

    public function add(Request $request)
    {
        $planet = new Planet();
        $form = $this->createForm(PlanetType::class, $planet);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();

            $em->persist($planet);
            $em->flush();
            $this->addFlash('success', 'Added a planet');

            return $this->redirect($this->generateUrl('planet_getPlanets'));
        }

        return $this->render('planet/create_planet.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
