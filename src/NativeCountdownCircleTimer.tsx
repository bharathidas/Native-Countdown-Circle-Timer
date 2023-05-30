import { Component, ReactNode, createElement } from "react";
import { NativeCountdownCircleTimerInput } from "./components/NativeCountdownCircleTimerInput";
import { BadgeStyle } from "./ui/styles";
import { NativeCountdownCircleTimerProps } from "../typings/NativeCountdownCircleTimerProps";

export class NativeCountdownCircleTimer extends Component<NativeCountdownCircleTimerProps<BadgeStyle>> {
    
   private readonly onCompleteHandle = this.onComplete.bind(this);
    
   //once the timer is done, onComplete function will be triggered
   private onComplete(WhenCompleted: boolean): void {
       if (WhenCompleted && this.props.whenDone && this.props.whenDone.canExecute) {
           this.props.whenDone.execute();
       }
   }
    render(): ReactNode {
   
    let colorkeyoutput="#993333 #996600";
    let colortimeoutput= "7 5 3";
    if(this.props.colorsKey.value !==undefined){
        colorkeyoutput=this.props.colorsKey.value;
    }
    //converting string to string array
    let colorsValueSplit: string[] = colorkeyoutput.split(" ");
    const colorsValue = colorsValueSplit;

    // //converting string to string arry and then to number array
    const colorsTimeArray=colortimeoutput.split(" ");
    
    const colorsTimeValue: number[] = colorsTimeArray.map(Number);
    const durationValue=Number(this.props.durationKey.value);
    const isPlaying=this.props.isPlayingKey?.value || true;
   
    const initialRemainingTime=Number(this.props.initialRemainingTimeKey?.value) || durationValue;
    const updateInterval=Number(this.props.updateIntervalKey?.value)||0;
    const key=durationValue;
    const size= Number(this.props.sizeKey?.value)|| 180;
    const strokeWidth=Number(this.props.strokeWidthKey?.value)|| 12;
    const trailStrokeWidth=Number(this.props.strokeWidthKey?.value)|| strokeWidth;;
    const strokeLinecap=this.props.strokeLinecapKey?.value|| "round";
    const rotation=this.props.rotationKey?.value || "clockwise";
    const isGrowing=this.props.isGrowingKey?.value || false;
    const trailColor=this.props.trailColorKey?.value || "d9d9d9";
    const isSmoothColorTransition=this.props.isSmoothColorTransitionKey?.value || true;
    const shouldRepeat=this.props.shouldRepeatKey?.value || false;
    const delay=Number(this.props.delayKey?.value) || 1;
    
    var colorType:'hex' | 'rgba' | 'url' ='hex';
    if(this.props.ColorTypeKey?.value=='rgba'){
        colorType='rgba'
    }
    else if(this.props.ColorTypeKey?.value=='url'){
        colorType='url'
    }
    else{
        colorType ='hex'
    }
       
return (
            
      <NativeCountdownCircleTimerInput
        key={key}
        duration={durationValue}
        colorsValue={colorsValue}
        colorsTimeValue={colorsTimeValue}
        isPlaying={isPlaying}
        initialRemainingTime={initialRemainingTime}
        updateInterval={updateInterval}
        size={size}
        strokeWidth={strokeWidth}
        trailStrokeWidth={trailStrokeWidth}
        strokeLinecap={strokeLinecap}
        rotation={rotation}
        isGrowing={isGrowing}
        trailColorValue={trailColor}
        colorType={colorType}
        isSmoothColorTransition={isSmoothColorTransition}
        shouldRepeat={shouldRepeat}
        delay={delay}
        showHours={this.props.showhoursKey}
        showMinutes={this.props.showminutesKey}
        showSeconds={this.props.showsecondsKey}
        whenCompleted={this.onCompleteHandle}  
    />
        );   
    }
}
