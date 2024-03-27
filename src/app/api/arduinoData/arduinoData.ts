// src/pages/page.tsx
import { NextApiRequest, NextApiResponse } from 'next';

interface ArduinoData {
  joules: number;
  speed: number;
  caliber: number;
  fps: number;
 }

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { SerialPort } = require('serialport')
  const Readline = SerialPort.parsers.Readline;
  const parser = new Readline({delimiter: '\r\n'});
  const mySerial = new SerialPort('COM6', {
    bordRate: 9600,
  });

  mySerial.pipe(parser);

  mySerial.on('open', function() {
    console.log('Serial Port is Open');
 });

 parser.on('data', function(data: string ) {
    console.log(data);
    const [joules, speed, caliber, fps] = data.split(',').map(Number);
    res.status(200).json({ joules, speed, caliber, fps });
 });
}
 



