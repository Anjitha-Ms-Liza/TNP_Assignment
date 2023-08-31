import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  carData: any;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getCarData().subscribe((data) => {
      this.carData = data;
      this.carData ={
        "method_name": "Car Details",
        "response_code": 0,
        "response_message": "success",
        "response": [{
            "model_name": "Model X",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "2.5",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model Y",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "3.1",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model 3",
            "milege": 133,
            "Dual Motor": "AWD",
            "mph": "3.5",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model S",
            "milege": 233,
            "Dual Motor": "AWD",
            "mph": "8.5",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model Y",
            "milege": 433,
            "Dual Motor": "AWD",
            "mph": "2.5",
            "imageUrl": "../../assets/model3.jpeg"
          }
        ]
      }
    });
  }

}
