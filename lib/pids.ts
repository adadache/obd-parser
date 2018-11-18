
import * as PIDS from './pids/pid';
import { OBD_MESSAGE_TYPES } from './constants';

export = {
  FuelLevel: new PIDS.FuelLevel(),
  Rpm: new PIDS.Rpm(),
  Gear: new PIDS.Gear(),
  CoolantTemp: new PIDS.CoolantTemp(),
  VehicleSpeed: new PIDS.VehicleSpeed(),
  Odometer: new PIDS.Odometer(),
  CalculatedEngineLoad: new PIDS.CalculatedEngineLoad(),
  FuelPressure: new PIDS.FuelPressure(),
  IntakeManifoldAbsolutePressure: new PIDS.IntakeManifoldAbsolutePressure(),
  IntakeAirTemperature: new PIDS.IntakeAirTemperature(),
  MafAirFlowRate: new PIDS.MafAirFlowRate(),
  ThrottlePosition: new PIDS.ThrottlePosition(),
  ObdStandard: new PIDS.ObdStandard(),
  FuelSystemStatus: new PIDS.FuelSystemStatus(),
  SupportedPids: new PIDS.SupportedPids()
};
