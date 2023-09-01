import { Component } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent {

  selectedColor: string = 'default'; 
  carImage: string = 'default'; 
  changeColor(color: string) {
    // Update the selected color
    this.selectedColor = color;

    // Determine the car image URL based on the selected color
    this.carImage = this.getCarImageUrl(this.selectedColor);
  }

  getCarImageUrl(color: string): string {
    // Implement logic to map color to the corresponding car image URL
    // For example, you can use a switch statement or an object mapping
    switch (color) {
      case 'red':
        return '../../assets/modelx_red.jpg';
      case 'blue':
        return '../../assets/modelx_blue.jpg';
      case 'green':
        return '../../assets/modelx_green.jpg';
      default:
        return '../../assets/default_car_image.jpg'; // Default image
    }
  }

}
