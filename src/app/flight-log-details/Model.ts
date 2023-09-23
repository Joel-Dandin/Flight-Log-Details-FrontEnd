export interface FlightLogDetails {
    id: number;
    aircraft_id:number,
    intdate: Date;
    departure: string;
    destination: string;
    aircraftName: string;
    aircraftSerialNumber: string;
  }
  export interface Flights {
    id: number;
    description: string;
    name: string;
    serial_number: number;
  }

  
  export interface FlightDetails {
    date: any;
    id: number;
    aircraft_id:number,
    intdate: Date;
    departure: string;
    destination: string;
    aircraftName: string;
    aircraftSerialNumber: string;
  }