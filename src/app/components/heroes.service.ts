import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private ruta:rutas[]=[
    {
    ciudad_or: "Machala",
    ciudad_dest: "Huaquillas",
    precio_ru: "$15",
    descrip: "Escala",
    tipo: "Externo"
     },
     {
      ciudad_or: "Pasaje",
      ciudad_dest: "Machala",
      precio_ru: "$1",
      descrip: "Directo",
      tipo: "Interno"
       },
       {
        ciudad_or: "Piñas",
        ciudad_dest: "El Guabo",
        precio_ru: "$17",
        descrip: "Normal, Escala",
        tipo: "Externo"
         },
         {
          ciudad_or: "Santa Rosa",
          ciudad_dest: "Machala",
          precio_ru: "$5",
          descrip: "Aire Acondicionado, Directo",
          tipo: "Interno"
           },
           {
            ciudad_or: "Machala",
            ciudad_dest: "Santa Rosa",
            precio_ru: "$5",
            descrip: "Aire Acondicionado, Directo",
            tipo: "Externo"
             },
             {
              ciudad_or: "La Peaña",
              ciudad_dest: "El Guabo",
              precio_ru: "$1",
              descrip: "Escala",
              tipo: "Interno"
               },
               {
                ciudad_or: "La Peaña",
                ciudad_dest: "El Guabo",
                precio_ru: "$1",
                descrip: "Escala",
                tipo: "Externo"
                 },
                 {
                  ciudad_or: "Pasaje",
                  ciudad_dest: "Guayaquil",
                  precio_ru: "$15",
                  descrip: "Directo",
                  tipo: "Interno"
                   },
                   {
                    ciudad_or: "Pasaje",
                    ciudad_dest: "Cuenca",
                    precio_ru: "$8",
                    descrip: "Escala",
                    tipo: "Externo"
                     },
                     {
                      ciudad_or: "Machala",
                      ciudad_dest: "Cuenca",
                      precio_ru: "$15",
                      descrip: "Directo",
                      tipo: "Interno"
                       },
  ];

  getRutas(){
    return this.ruta
  }

  getRuta(idx:number):rutas{
    return this.ruta[idx]
  }
  

  constructor() { 
    console.log("¡Rutas listas para ser usado..!");
  }
}
 export interface rutas{
  ciudad_or: string;
  ciudad_dest: string;
  precio_ru: string;
  descrip: string;
  tipo: string;
}
  
