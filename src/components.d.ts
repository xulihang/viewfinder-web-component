/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ViewFinder {
        "bottom": number;
        "height": number;
        "left": number;
        "preserveAspectRatio"?: string;
        "right": number;
        "top": number;
        "width": number;
    }
}
declare global {
    interface HTMLViewFinderElement extends Components.ViewFinder, HTMLStencilElement {
    }
    var HTMLViewFinderElement: {
        prototype: HTMLViewFinderElement;
        new (): HTMLViewFinderElement;
    };
    interface HTMLElementTagNameMap {
        "view-finder": HTMLViewFinderElement;
    }
}
declare namespace LocalJSX {
    interface ViewFinder {
        "bottom"?: number;
        "height"?: number;
        "left"?: number;
        "preserveAspectRatio"?: string;
        "right"?: number;
        "top"?: number;
        "width"?: number;
    }
    interface IntrinsicElements {
        "view-finder": ViewFinder;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "view-finder": LocalJSX.ViewFinder & JSXBase.HTMLAttributes<HTMLViewFinderElement>;
        }
    }
}
