import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";
import { PixelIconName } from './interface/PixelIconName';
import { useEffect } from "react";
import React from "react";
import { rememberDarkModeUserSetting } from "src/lib/darkMode";

export interface PixelIconProps extends StyleProps, IdProps {
    name: PixelIconName | string // custom pixelicon
    size?: Size
    inverted?: boolean
}
 
export const PixelIcon = (props: PixelIconProps) => {

    const [isInverted, setIsInverted] = React.useState(props.inverted);
    
    useEffect(() => {
        if (props.inverted) {
            setIsInverted(true)
        } else if (typeof props.inverted === 'undefined') {
            setIsInverted(rememberDarkModeUserSetting())
        } else {
            setIsInverted(false)
        }
    }, [props.inverted]) 
 
    return (
        <span id={props.id} className={`nes-ui-pixelicon nes-ui-is-size-${props.size || 'medium'}`} >
            <span className={`${props.name} ${isInverted ? 'nes-ui-is-inverted' : ''}`} style={props.style} />
        </span> 
    )
}