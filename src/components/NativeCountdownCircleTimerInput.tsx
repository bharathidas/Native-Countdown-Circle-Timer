import { Animated } from 'react-native'
import { Component, ReactNode, createElement } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export interface NativeCountDownCircleTimerProps {
  key?: number;
  isPlaying?: boolean;
  duration: number;
  colorsValue?: string | string[];
  colorsTimeValue?: number[];
  initialRemainingTime?: number;
  strokeWidth?: number;
  updateInterval?: number;
  size?: number;
  trailStrokeWidth?: number;
  strokeLinecap?: string;
  rotation?: string;
  isGrowing?: boolean;
  trailColorValue?: string;
  isSmoothColorTransition?: boolean;
  colorType?: 'hex' | 'rgba' | 'url';
  shouldRepeat?: boolean;
  delay?: number;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  whenCompleted: (whenComplete: boolean) => void;
}
type ColorFormat = `#${string}` | `rgba(${string})` | `url(#${string})`;

export class NativeCountdownCircleTimerInput extends Component<NativeCountDownCircleTimerProps> {
  // private readonly OnCompleted = this.onComplete.bind(this);

  render(): ReactNode {
    
    const strokeLinecapval = this.props.strokeLinecap || "round"
    const colortypevalue = this.props.colorType || 'hex';
    const delayvalue = this.props.delay;
    const shouldRepeatvalue = this.props.shouldRepeat;
    
    return <CountdownCircleTimer
      key={this.props.key}
      duration={this.props.duration}
      colors={this.getColorFormat()}
      colorsTime={this.getColorTimeValue()}
      isPlaying={this.props.isPlaying}
      initialRemainingTime={this.props.initialRemainingTime}
      updateInterval={this.props.updateInterval}
      size={this.props.size}
      strokeWidth={this.props.strokeWidth}
      trailStrokeWidth={this.props.trailStrokeWidth}
      strokeLinecap={

        strokeLinecapval != 'round' ? (strokeLinecapval == 'square' ? 'square' : 'butt') : 'round'
      }
      rotation={this.props.rotation != 'clockwise' ? 'counterclockwise' : 'clockwise'}
      isGrowing={this.props.isGrowing}
      trailColor={this.convertStringToColorFormat(this.props.trailColorValue || '', colortypevalue)}
      isSmoothColorTransition={this.props.isSmoothColorTransition}

      onComplete={() => {
        
        // onComplete funtion has been called
        if (shouldRepeatvalue == false) {
          { this.onComplete(true) };
        }

        return { shouldRepeat: shouldRepeatvalue, delay: delayvalue }
      }}
    >
      {({ remainingTime, color }) => (
        <Animated.Text style={{ color, fontSize: 40 }}>
          {this.getchildrenvalue(remainingTime)}
        </Animated.Text>
      )}
    </CountdownCircleTimer>


  }
  private onComplete(whenDone: boolean): void {
    //console.info("onComplete:"+whenDone);
    whenDone = true;
    this.props.whenCompleted(whenDone);

  }

  private getColorFormat(): any {
    //console.info("inside getColorFormat:"+this.props.initialRemainingTime);
    let color: string | string[] = this.props.colorsValue || "";
    let colorFormat: any | ({ 0: `#${string}`; } & { 1: `#${string}`; } & `#${string}`[]);

    if (typeof color === 'string' && color.startsWith('#')) {
      colorFormat = color as `#${string}`;
    } else if (Array.isArray(color) && color.every(c => typeof c === 'string' && c.startsWith('#'))) {
      colorFormat = color as `#${string}`[];
    } else {
      // handle invalid color format
    }
    return colorFormat;
  }

  private getColorTimeValue(): any {
    // console.info("inside getColorTimeValue");
    let arr: number[] | undefined = this.props.colorsTimeValue; // This is just an array of numbers or undefined

    let complexArr: { 0: number } & { 1: number } & number[] | undefined;

    if (arr && arr.length >= 2) {
      complexArr = arr as { 0: number } & { 1: number } & number[];
    } else {
      // handle case when arr is undefined or doesn't have at least two elements
    }
    return complexArr;
  }


  convertStringToColorFormat(color: string, type: 'hex' | 'rgba' | 'url'): ColorFormat {
    switch (type) {
      case 'hex':
        return `#${color}`;
      case 'rgba':
        return `rgba(${color})`;
      case 'url':
        return `url(#${color})`;
      default:
        throw new Error('Invalid color type');
    }
  }

  private getchildrenvalue(remainingTime: number) {
    let timevalue: string | undefined = undefined;


    if (this.props.showHours) {
      let hourString;
      const hours = Math.floor(remainingTime / 3600)
      hourString = hours.toString();
      timevalue = `${hourString}`;
    }
    if (this.props.showMinutes) {
      let minutesString;

      let minutes;

      if (this.props.showHours) {
        minutes = Math.floor((remainingTime % 3600) / 60)
      }
      else {
        minutes = Math.floor(remainingTime / 60)
      }
        minutesString = minutes.toString();
      
      if (timevalue != undefined) {

        timevalue = timevalue + `:${minutesString}`;
      }
      else {
        timevalue = `${minutesString}`;
      }

    }

    if (this.props.showSeconds) {
      let secondsString;

      let seconds = remainingTime % 60
      secondsString = seconds.toString();
      
      if (timevalue != undefined) {

        timevalue = timevalue + `:${secondsString}`;
      }
      else {
        timevalue = `${secondsString}`;
      }

    }

    return timevalue;


  }


}