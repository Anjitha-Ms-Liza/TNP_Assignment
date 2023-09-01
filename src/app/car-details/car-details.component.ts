import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  car: any;
  selectedColor: string = 'default'; 
  carImage: string = 'default'; 

  constructor(private route: ActivatedRoute) {
    this.carImage = '../../assets/modelx4.jpg';
  }

  ngOnInit(): void {
    this.car = history.state.car;
    console.log(this.car.model_name)
  }
  changeColor(color: string) {
    // Update the selected color
    this.selectedColor = color;

    // Determine the car image URL based on the selected color
    this.carImage = this.getCarImageUrl(this.selectedColor);
  }

  getCarImageUrl(color: string): string {
    switch (color) {
      case 'red':
        return '../../assets/models.jpg';
      case 'blue':
        return '../../assets/modelb.jpg';
      case 'green':
        return '../../assets/modelx6.jpg';
      default:
        return '../../assets/models.jpg'; 
    }
  }
}
