import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from "@angular/forms";
import { AssetDataService } from './asset-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "asset configuration form"
  assets: any = []
  dataLoggerModel: any = []
  attributes: any = []
  interfaces: any = []
  channels: any = []
  selectedAttributes: string[] = [];
  selectedChannels: string[] = [];
  selectedInterfaces: string[] = [];
  attributeArray: any[] = [];
  channelArray: any[] = [];
  interfaceArray: any[] = [];
  interfaceId: any
  iterationCount = 1;
  jsonData: any;
  jsonDataKeys: string[] = [];
  iterationLength: any;
  isConfigurationAdded: boolean = false;


  constructor(private fb: FormBuilder, private auth: AssetDataService) { }


  ngOnInit() {
    this.assets = this.auth.assets()
    this.dataLoggerModel = this.auth.dataLoggerModel()
    this.attributes = this.auth.attributes()
    this.iterationLength = this.attributes.length
    this.attributeArray = [this.attributes];
    this.interfaces = this.auth.interfaces()
    this.channels = this.auth.channels()

  }

  //Form Group definition
  form: FormGroup = this.fb.group({
    asset: ['', Validators.required],
    dataLoggerModel: ['', Validators.required],
    groupAttributes: this.fb.group({
      configureAttributes: this.fb.array([this.addPhase()])
    }),
  });

  //Method to configure attributes
  addPhase() {
    return this.fb.group({
      attribute: ['', Validators.required],
      interface: ['', Validators.required],
      channel: ['', Validators.required]
    });
  }

  /**
   * A computed property that returns the 'configureAttributes' FormArray
   * within the 'groupAttributes' FormGroup of the main form.
   * This property provides a convenient way to access the array of phases (groups).
   * @returns The 'configureAttributes' FormArray.
   */
  get phaseArray() {

    const groupAttributesFormGroup = <FormGroup>this.form.get('groupAttributes');
    const configureAttributesFormArray = <FormArray>groupAttributesFormGroup.get('configureAttributes');
    return configureAttributesFormArray;
  }

  /**
   * Adds a new phase (group) to the form if the iteration count is within the allowed limit,
   * and updates channel data based on the selected data logger model and interface.
   * @param iterationCount The current iteration count.
   */
  addMorePhase(iterationCount: any) {

    if (this.iterationCount < this.iterationLength) {

      this.phaseArray.push(this.addPhase());
      this.iterationCount = iterationCount + 1;
    }

    let dataLoggerModelId = this.form.get('dataLoggerModel')?.value;
    console.log("dataLoggerModelId", dataLoggerModelId);
    console.log("standard interfaceId", this.interfaceId);

    // Map over the channels and update channel data based on the selected data logger model and interface
    const final = this.channels.map((item: { logger_id: any; interface_id: any; channels: any; }) => {
      if (item.logger_id === dataLoggerModelId && item.interface_id === this.interfaceId) {
        // Filter out selected channels from the channel list
        item.channels = item.channels.filter((channel: string) => !this.selectedChannels.includes(channel));
      }
      return item;
    });
    this.isConfigurationAdded = true;
  }

  /**
   * Removes a phase (group) from the phaseArray at the specified index.
   * @param i The index of the phase to be removed.
   */
  removeGroup(i: number) {
    this.phaseArray.removeAt(i);
  }

  /**
   * Saves the current form data as JSON and populates the jsonData and jsonDataKeys properties.
   * This function is triggered when the "Save Configuration" button is clicked.
   */
  onSaveConfiguration() {
    const formData = this.form.getRawValue();
    this.jsonData = formData;
    this.jsonDataKeys = Object.keys(this.jsonData);
  }
  /**
   * Handles the selection of an attribute and updates the selectedAttributes and attributeArray.
   * @param selectedValue The selected attribute value.
   */
  selectedAttribute(selectedValue: any) {
    const matchingObject = this.attributes.find((item: { asset_name: any; }) => item.asset_name === selectedValue);

    this.selectedAttributes.push(matchingObject);
    let value = this.attributes.filter((attr: string) => !this.selectedAttributes.includes(attr));
    this.attributeArray.push(value);
  }


  /**
   * Handles the selection of a channel and updates the selectedChannels array.
   * @param selectedValue The selected channel value.
   */
  selectedChannel(selectedValue: any) {
    console.log("selectedValue", selectedValue);
    this.selectedChannels.push(selectedValue);
  }

  /**
   * Handles the change of interface selection and updates channel data based on the selected interface.
   * @param interfaceId The selected interface ID.
   * @param phaseIndex The index of the phase being updated.
   */
  onInterfaceChange(interfaceId: any, phaseIndex: number) {
    const dataLoggerModelId = this.form.get('dataLoggerModel')?.value;
    this.interfaceId = interfaceId;
    console.log("interfaceId", interfaceId);
    this.getChannelsByLoggerAndInterface(dataLoggerModelId, interfaceId, phaseIndex);
  }

  /**
   * Retrieves and updates channel data for the specified logger and interface combination.
   * @param loggerId The ID of the data logger model.
   * @param interfaceId The ID of the selected interface.
   * @param phaseIndex The index of the phase being updated.
   * @returns An array of channels for the specified logger and interface.
   */
  getChannelsByLoggerAndInterface(loggerId: number, interfaceId: any, phaseIndex: number) {

    const matchingEntry = this.channels.find((entry: { logger_id: number; interface_id: any; }) => entry.logger_id === loggerId && entry.interface_id === interfaceId);
    this.channelArray[phaseIndex] = matchingEntry ? matchingEntry.channels : [];

    console.log("channelArray..", this.channelArray);

    return matchingEntry ? matchingEntry.channels : [];
  }

  /**
   * Reload the entire page to reset the application state
   */
  resetForm() {
    location.reload();
  }

}