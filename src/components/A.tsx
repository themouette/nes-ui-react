import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface AProps extends StyleProps, IdProps, React.PropsWithChildren<any> {
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
    transparent?: boolean;
    dense?: boolean;
}

export const A = ({ id, style, className, href, target, rel, children, download, transparent, dense }: AProps) => 
    <a id={id} className={`nes-ui-anchor ${className || ''} ${transparent && 'nes-ui-is-transparent'} ${dense && 'nes-ui-is-dense'}`} download={download} href={href} ref={rel} target={target}  style={style}>{children}</a>