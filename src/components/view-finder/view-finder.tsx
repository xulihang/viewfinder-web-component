import { Component, h, Host, Prop } from '@stencil/core';

export interface ScanRegion {
  left:number;
  top:number;
  width:number;
  height:number;
}

@Component({
  tag: 'view-finder',
  styleUrl: 'view-finder.css',
  shadow: true,
})
export class ViewFinder {
  @Prop() width: number;
  @Prop() height: number;
  @Prop() scanRegion: ScanRegion;
  @Prop() preserveAspectRatio?: string;
  render() {
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio={this.preserveAspectRatio}
          viewBox={"0 0 "+this.width+" "+this.height}>
          <defs>
            <mask id="myMask">
              <rect 
                x="0" 
                y="0" 
                width={this.width} 
                height={this.height} fill="white" />
              <rect 
                x={this.scanRegion.left} 
                y={this.scanRegion.top} 
                width={this.scanRegion.width} 
                height={this.scanRegion.height} fill="black" 
              />
            </mask>
          </defs>
          
          <line 
            x1={this.scanRegion.left}
            y1={this.scanRegion.top}
            x2={this.scanRegion.left+this.scanRegion.width}
            y2={this.scanRegion.top} 
            class="scan-line">
            <animate attributeName="y1" to={this.scanRegion.top+this.scanRegion.height}  begin="0s" dur="2s"  repeatCount="indefinite" />
            <animate attributeName="y2" to={this.scanRegion.top+this.scanRegion.height}  begin="0s" dur="2s"  repeatCount="indefinite" />
          </line>
          <rect width={this.width} height={this.height} class="mask-rect" mask="url(#myMask)">
          </rect>
          <rect x={this.scanRegion.left} y={this.scanRegion.top} width={this.scanRegion.width} height={this.scanRegion.height} class="scan-rect"/>
        </svg>
      </Host>
      
    );
  }

}
