export interface IEntity extends IDrawable {}

export interface IDrawable {
  draw: () => void;
  getCanvas: () => HTMLElement | null;
  drawableArea: HTMLElement | null;
  initialized: boolean;
}

export interface IEventsReciever {
  onEvent: (e: Event) => void;
}
