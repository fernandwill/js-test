const aircraft = {
    engine: 2,
    manufacturer: "Airbus",
    auxFuel: null,
    seatConfig: undefined
};

console.log(aircraft.engine ?? 2);
console.log(aircraft.manufacturer ?? "Unknown");
console.log(aircraft.auxFuel ?? "No");
console.log(aircraft.seatConfig ?? "1-class");
console.log(aircraft.owner?.airlines ?? "Private owner");