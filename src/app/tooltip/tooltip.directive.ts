import { Directive, Input, ElementRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: "appTooltip"
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement("div");
  visible = false;

  @Input()
  set tooltip(value: any) {
    this.tooltipElement.textContent = value
  }

  hide() {
    this.tooltipElement.classList.remove("tooltip--active");
    console.log("Hide method called");
  }

  show() {
    this.tooltipElement.classList.add("tooltip--active")
    console.log("Show method called!")
  }

  constructor( private element: ElementRef) { }

  ngOnInit(): void {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }
}
