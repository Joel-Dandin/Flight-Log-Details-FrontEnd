import { Pipe, PipeTransform } from '@angular/core';
import { FlightLogDetails } from './flight-log-details/Model';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(
    flightLogs: FlightLogDetails[],
    searchValue: string
  ): FlightLogDetails[] {
    if (!flightLogs || !searchValue) {
      return flightLogs;
    }

    return flightLogs.filter(
      (eachflightLogs) => 
      // eachflightLogs.aircraftSerialNumber.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      // eachflightLogs.aircraftName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      eachflightLogs.destination.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      eachflightLogs.departure.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      eachflightLogs.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      eachflightLogs.aircraft_id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

      );
  }
}
