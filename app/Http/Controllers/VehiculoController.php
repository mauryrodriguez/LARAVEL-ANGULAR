<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App;
class VehiculoController extends Controller
{
    public function index()
    {
        return response ()->json(App\Vehiculo::all(),200);
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        $f = App\Vehiculo::find($id);

        if(!$f){
            return response ()->json(['error'=>'VEHICULO NO ENCONTRADO','codigo'=>202]);
        }
        else{

            return response ()->json($f,200);
        }
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
