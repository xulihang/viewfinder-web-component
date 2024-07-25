import { Component, h, Host, Prop } from '@stencil/core';

export interface region {
  left:number;
  top:number;
  right:number;
  bottom:number;
}

@Component({
  tag: 'view-finder',
  styleUrl: 'view-finder.css',
  shadow: true,
})
export class ViewFinder {
  @Prop() width: number;
  @Prop() height: number;
  @Prop() left?: number;
  @Prop() top?: number;
  @Prop() right?: number;
  @Prop() bottom?: number;
  @Prop() regions?: region[];
  @Prop() preserveAspectRatio?: string;
  
  renderRectsInMask() {
    if (this.regions) {
      let rects = [];
      for (let index = 0; index < this.regions.length; index++) {
        const region = this.regions[index];
        rects.push(
        <rect 
          x={region.left} 
          y={region.top} 
          width={region.right - region.left} 
          height={region.bottom - region.top} fill="black" 
        />);
      }
      return rects;
    }else{
      return (
        <rect 
          x={this.left} 
          y={this.top} 
          width={this.right - this.left} 
          height={this.bottom - this.top} fill="black" 
        />
      )
    }
  }

  renderRects() {
    if (this.regions) {
      let rects = [];
      for (let index = 0; index < this.regions.length; index++) {
        const region = this.regions[index];
        rects.push(
          <rect 
            x={region.left} 
            y={region.top} 
            width={region.right - region.left} 
            height={region.bottom - region.top} class="scan-rect"
          />);
      }
      return rects;
    }else{
      return (
        <rect 
          x={this.left} 
          y={this.top} 
          width={this.right - this.left} 
          height={this.bottom - this.top} 
          class="scan-rect" 
        />
      )
    }
  }
  renderLines(){
    if (this.regions) {
      let lines = [];
      for (let index = 0; index < this.regions.length; index++) {
        const region = this.regions[index];
        lines.push(
          <line 
            x1={region.left}
            y1={region.top}
            x2={region.right}
            y2={region.top} 
            class="scan-line">
            <animate attributeName="y1" to={region.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
            <animate attributeName="y2" to={region.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
          </line>
        )
      }
      return lines;
    }else{
      return (
        <line 
          x1={this.left}
          y1={this.top}
          x2={this.right}
          y2={this.top} 
          class="scan-line">
          <animate attributeName="y1" to={this.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
          <animate attributeName="y2" to={this.bottom}  begin="0s" dur="2s"  repeatCount="indefinite" />
        </line>
      )
    }
  }

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
              {this.renderRectsInMask()}
            </mask>
          </defs>
          {this.renderLines()}
          <rect width={this.width} height={this.height} class="mask-rect" mask="url(#myMask)">
          </rect>
          {this.renderRects()}
        </svg>
      </Host>
      
    );
  }

}
