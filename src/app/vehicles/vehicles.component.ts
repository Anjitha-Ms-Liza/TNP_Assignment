import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  carData: any;
  carModels:any;
  itemsPerPage = 3; 
  currentPage = 1; 
  searchTerm = ''; 

  constructor(private apiService: ApiService,private router: Router) {}
  
  ngOnInit(): void {
    this.apiService.getCarData().subscribe((data) => {
      this.carData = data;      
    });
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
          "model_name": "Model 3",
          "milege": 133,
          "Dual Motor": "AWD",
          "mph": "3.5",
          "imageUrl": "../../assets/modelx6.jpg"
        },
        {
          "model_name": "Model 6",
          "milege": 333,
          "Dual Motor": "AWD",
          "mph": "2.5",
          "imageUrl": "../../assets/model3.jpeg"
        },
        {
          "model_name": "Model 9",
          "milege": 333,
          "Dual Motor": "AWD",
          "mph": "3.1",
          "imageUrl": "../../assets/models.jpg"
        },
        {
          "model_name": "Model A",
          "milege": 233,
          "Dual Motor": "AWD",
          "mph": "8.5",
          "imageUrl": "../../assets/modely.jpeg"
        },
        {
          "model_name": "Model Y",
          "milege": 433,
          "Dual Motor": "AWD",
          "mph": "2.5",
          "imageUrl": "../../assets/modelx4.jpg"
        },
        {
          "model_name": "Model Q",
          "milege": 333,
          "Dual Motor": "AWD",
          "mph": "3.1",
          "imageUrl": "../../assets/models.jpg"
        },
        {
          "model_name": "Model P",
          "milege": 233,
          "Dual Motor": "AWD",
          "mph": "8.5",
          "imageUrl": "../../assets/modely.jpeg"
        },
        {
          "model_name": "Model Z",
          "milege": 233,
          "Dual Motor": "AWD",
          "mph": "8.5",
          "imageUrl": "../../assets/modelx1.jpg"
        },
      ]
    }
    this.carModels = this.carData.response
    console.log(this.carModels)
  }
 
  filterCarModels() {
    this.currentPage = 1; 
  }
  get filteredPaginatedCarModels() {
    const filteredModels = this.carModels.filter(
      (      car: { model_name: string; }) => car.model_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return filteredModels.slice(startIndex, endIndex);
  }

  getTotalPages() {
    const filteredModels = this.carModels.filter(
      (      car: { model_name: string; }) => car.model_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return Math.ceil(filteredModels.length / this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = this.getTotalPages();
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  isOnFirstPage() {
    return this.currentPage === 1;
  }

  isOnLastPage() {
    return this.currentPage === this.getTotalPages();
  }

}
