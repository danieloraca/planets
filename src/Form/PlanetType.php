<?php
declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class PlanetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('moons')
            ->add('diameter')
            ->add('distance_from_sun')
            ->add('img')
            ->add('wiki_url')
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary float-left'
                ]
            ]);
    }
}
