import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AssetDataService {

  constructor() { }

  assets(){
    return [
      {
        id:1,
        asset_name:"Generator"

      },
      {
        id:2,
        asset_name:"Compressor"

      },
      {
        id:3,
        asset_name:"Freezer"

      }
    ]
  }
  dataLoggerModel(){
    return [
      {
        logger_id:1,
        name:"DL 100"

      },
      {
        logger_id:2,
        name:"DL 200"

      },
      {
        logger_id:3,
        name:"DL 300"

      },
      {
        logger_id:4,
        name:"DL 400"

      }
    ]
  }
  attributes(){
    return [
      {
        id:1,
        asset_name:"Oil Temperature"

      },
      {
        id:2,
        asset_name:"Oil Level"

      },
      {
        id:3,
        asset_name:"Pressure"

      },
      {
        id:4,
        asset_name:"Fuel"

      },
      {
        id:5,
        asset_name:"Device Temperature"

      }
    ]
  }
  interfaces(){
    return [
      {
       
        interface_id:1,
        name:"Analog"
      },
      {
        interface_id:2,
        name:"Digital"
      }
    ]
  }
  channels(){
    return [
      {
        logger_id:1,
        interface_id:1,
        channels:['c1','c2','c3','c4','c5']
      },
      {
        logger_id:1,
        interface_id:2,
        channels:['c6','c7','c8','c9','c10']
      },
      {
        logger_id:2,
        interface_id:1,
        channels:['a1','a2','a3','a4','a5']
      },
      {
        logger_id:2,
        interface_id:2,
        channels:['a6','a7','a8','a9','a10']
      },
      {
        logger_id:3,
        interface_id:1,
        channels:['d1','d2','d3']
      },
      {
        logger_id:3,
        interface_id:2,
        channels:['c6','c7','c8','c9','c10']
      },
      {
        logger_id:4,
        interface_id:1,
        channels:['g11','g12','g13','g14','g15','g16','g17','g18','g19','g20']
      },
      {
        logger_id:4,
        interface_id:2,
        channels:['k1','k2','k3']
      }
    ]
  }


}
