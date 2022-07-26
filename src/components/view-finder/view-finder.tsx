import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'view-finder',
  styleUrl: 'view-finder.css',
  shadow: true,
})
export class ViewFinder {
  @Prop() width: number;
  @Prop() height: number;
  @Prop() left: number;
  @Prop() top: number;
  @Prop() right: number;
  @Prop() bottom: number;
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
                x={this.left} 
                y={this.top} 
                width={this.right - this.left} 
                height={this.bottom - this.top} fill="black" 
              />
            </mask>
          </defs>
          
          <line 
            x1={this.left}
            y1={this.top}
            x2={this.right}
            y2={this.top} 
            class="scan-line">
            <animate attributeName="y1" to={this.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
            <animate attributeName="y2" to={this.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
          </line>
          <rect width={this.width} height={this.height} class="mask-rect" mask="url(#myMask)">
          </rect>
          <rect x={this.left} y={this.top} width={this.right - this.left} height={this.bottom - this.top} class="scan-rect"/>
        </svg>
      </Host>
      
    );
  }

}
