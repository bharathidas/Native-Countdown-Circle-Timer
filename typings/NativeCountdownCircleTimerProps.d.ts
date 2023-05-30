/**
 * This file was generated from NativeCountdownCircleTimer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface NativeCountdownCircleTimerProps<Style> {
    name: string;
    style: Style[];
    durationKey: EditableValue<Big>;
    colorsKey: EditableValue<string>;
    colorsTimeKey?: EditableValue<string>;
    showhoursKey: boolean;
    showminutesKey: boolean;
    showsecondsKey: boolean;
    whenDone?: ActionValue;
    isPlayingKey?: EditableValue<boolean>;
    initialRemainingTimeKey?: EditableValue<Big>;
    updateIntervalKey?: EditableValue<Big>;
    sizeKey?: EditableValue<Big>;
    isGrowingKey?: EditableValue<boolean>;
    rotationKey?: EditableValue<string>;
    isSmoothColorTransitionKey?: EditableValue<boolean>;
    shouldRepeatKey?: EditableValue<boolean>;
    delayKey?: EditableValue<Big>;
    strokeWidthKey?: EditableValue<Big>;
    trailStrokeWidthKey?: EditableValue<Big>;
    strokeLinecapKey?: EditableValue<string>;
    ColorTypeKey?: EditableValue<string>;
    trailColorKey?: EditableValue<string>;
}

export interface NativeCountdownCircleTimerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    durationKey: string;
    colorsKey: string;
    colorsTimeKey: string;
    showhoursKey: boolean;
    showminutesKey: boolean;
    showsecondsKey: boolean;
    whenDone: {} | null;
    isPlayingKey: string;
    initialRemainingTimeKey: string;
    updateIntervalKey: string;
    sizeKey: string;
    isGrowingKey: string;
    rotationKey: string;
    isSmoothColorTransitionKey: string;
    shouldRepeatKey: string;
    delayKey: string;
    strokeWidthKey: string;
    trailStrokeWidthKey: string;
    strokeLinecapKey: string;
    ColorTypeKey: string;
    trailColorKey: string;
}
