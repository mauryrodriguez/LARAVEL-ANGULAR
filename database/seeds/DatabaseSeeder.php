<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run()
    {
        //LLAMAR AL SEEDER CREADO
        $this->call(VehiculosSeeder::class);
    }
}
