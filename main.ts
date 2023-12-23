//% weight=0 color=#EC7505 icon="\uf0ad" block="iocontrolv1"
namespace iocontrolv1 {

    //% blockId=analogRead block="analogRead Pin %pin| value"
    //% weight=47
    export function analogRead(pin: number):number {
	let a = pins.analogReadPin(pin+100)
	return a
    }

    //% blockId=digitalRead block="digitalRead Pin %pin| value"
    //% weight=49
    export function digitalRead(pin: number):number {
	let a=pins.digitalReadPin(pin+100)
	return a
    }

    //% blockId=digitalWrite block="digitalWrite Pin %pin| value %value"
    //% weight=50
    export function digitalWrite(pin: number,value: number):void {
      pins.digitalWritePin(pin+100, value)
    }

    //% blockId=analogWrite block="analogWrite Pin %pin| value %value"
    //% weight=48
    export function analogWrite(pin: number,value: number):void {
      pins.analogWritePin(pin+100, value)
    }

}
